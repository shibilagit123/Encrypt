const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Registration Route
app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = new User({ username, password });
        await user.save();
        res.status(201).send({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// MongoDB connection and server setup
mongoose.connect('mongodb://localhost:27017/myAuthDB')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
