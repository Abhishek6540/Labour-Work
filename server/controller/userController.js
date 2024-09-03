const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
exports.createUser = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;
        const image = req.file ? req.file.path : null;
        let hashedPassword = await bcrypt.hash(password, 10)
        let user = await User.findOne({ $or: [{ email: email }, { phone: phone }] });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }
        user = new User({
            name,
            email,
            phone,
            password: hashedPassword,
            image
        });

        await user.save();
        return res.status(201).json({ message: 'User registered successfully' });

    } catch (error) {
        console.error(error)
        return res.status(404).json({ message: error.message });
    }
}

exports.getUser = async (req, res) => {
    console.log(req.params)
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        return res.status(201).json({ data: user })

    } catch (error) {
        console.error(error)
        return res.status(404).send({ message: error.message });
    }
}

exports.updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findByIdAndUpdate(userId, req.body, {
            new: true
        });
        return res.status(201).json({ message: "Upadated successfully", data: user })

    } catch (error) {
        return res.status(404).send({ message: error.message });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        await User.findByIdAndDelete(userId);
        return res.status(201).json({ message: "Deleted successfully" })

    } catch (error) {
        return res.status(404).send({ message: error.message });
    }
}
exports.login = async (req, res) => {
    console.log("Login process started");

    try {
        const { emailOrPhone, password } = req.body;

        const query = isNaN(emailOrPhone)
            ? { email: emailOrPhone }
            : { phone: Number(emailOrPhone) };

        const user = await User.findOne(query);
        if (!user) {
            console.log("User not found");
            return res.status(400).json({ success: false, message: "User not found" });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: "Wrong password" });
        }

        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined");
        }


        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1h"
        });

        await User.updateOne(
            { _id: user._id },
            { $set: { access_token: token } }
        );

        return res.status(201).json({ success: true, message: "Login successful", token, user });

    } catch (error) {
        console.error("Error during login:", error.message);
        return res.status(500).json({ success: false, message: error.message });
    }
};

exports.logout = async (req, res) => {
    const { emailOrPhone } = req.body;

    try {

        const query = isNaN(emailOrPhone)
            ? { email: emailOrPhone }
            : { phone: Number(emailOrPhone) };

        const user = await User.findOne(query);

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        await User.updateOne(
            { _id: user._id },
            { $unset: { access_token: "" } }
        );

        res.status(201).json({ success: true, message: 'Logged out successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.verifyotp = async (req, res) => {
    const { emailOrPhone } = req.body;
    try {
        const query = isNaN(emailOrPhone)
            ? { email: emailOrPhone }
            : { phone: Number(emailOrPhone) };

        const user = await User.findOne(query);
        if (!user) {
            return res.status(400).json({ success: false, message: "User not found" });
        }
        const otp = Math.floor(Math.random() * 9000 + 1000);
        await User.updateOne(
            { _id: user._id },
            { $set: { otp: otp, updatedBy: new Date() } }
        );
        setTimeout(async () => {
            await userModel.updateOne(
                { _id: user._id },
                { $set: { otp: '', updatedBy: null } }
            );
            console.log("OTP cleared for user:", user.email);
        }, 3 * 60 * 1000);

        return res.status(201).json({ success: true, otp });

    } catch (error) {
        console.error("Error verifying OTP:", error.message);
        return res.status(500).json({ success: false, message: error.message });
    }
}

exports.resetPassword = async (req,res) => {
    const { otp, newPassword } = req.body;

    try {
         const user = await User.findOne({ otp });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        const lastestPassword = await bcrypt.hash(newPassword, 10);

        const updatedUser = await User.updateOne(
            { _id: user._id },
            { $set: { password: lastestPassword } }
        );
        res.status(200).json({ success: true, message: 'Password reset successfully'});
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}