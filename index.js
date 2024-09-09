// server.js
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./db');


dotenv.config({ path: "config/config.env" })

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Basic route for health check
app.get('/', (req, res) => {
    res.send('Chatbot backend is running!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

connectDB(process.env.MONGO_URL)