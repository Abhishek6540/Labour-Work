const express = require('express');
const colors = require('colors');
const connectDB = require('./config/mongodb');
const userRoutes = require('./routes/userRoutes');
const jobPostRoutes = require('./routes/jobpostRoutes');
const followRoutes = require('./routes/followRoutes');
const roleRoutes = require('./routes/roleRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Connect to MongoDB server
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Main routes start
app.use("/user", userRoutes);
app.use("/jobpost", jobPostRoutes);
app.use("/follow", followRoutes);
app.use("/roles", roleRoutes);

// Main routes end

// Default route 
app.get('/', (req, res) => {
    res.send('Hello, welcome to the Node.js and MongoDB API!');
});

// Handle 404 (Not Found) Errors
app.use((req, res, next) => {
    res.status(404).json({ success: false, message: 'API route not found' });
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack.red);
    res.status(500).json({ success: false, message: 'Server Error', error: err.message });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`.bgGreen.black);
});
