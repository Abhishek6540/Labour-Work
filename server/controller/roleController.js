const Role = require('../models/roleModel');

exports.createRole = async (req, res) => {
    try {
        const { name, permissions } = req.body;

        const role = new Role({ name, permissions });
        await role.save();

        return res.status(201).json({ message: 'Role created successfully', role });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
}

exports.getRoles = async (req, res) => {
    try {
        const roles = await Role.find();
        return res.status(200).json(roles);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
}
