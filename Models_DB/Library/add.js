// Import Dependencies
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
// connect to mongodb
require('../../config/db.connection')

////// Models //////
const db = require('../index.js');

// Create our app object
const app = express();

// set up middleware
app.use(cors());
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies

db.FunctionCollection.create({
    name: "AddFunction",
    value: function (x, y){ return x + y; }
})
