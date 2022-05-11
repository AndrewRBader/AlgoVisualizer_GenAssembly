// require mongoose to get connection to mongodb
const mongoose = require('mongoose')
//getting access to .env
require('dotenv').config();
// connection str variable (URI is from .env file with app link)
const connectionStr = process.env.MONGODB_URI

mongoose.connect(connectionStr);

mongoose.connection.on('connected', () => {
    console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected... 🥳 🥳 🥳 `);
});

mongoose.connection.on('error', (error) => {
    console.log('MongoDB connection error', error);
});

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});