// Import Dependencies
const express = require("express");
const cors = require("cors");

// Import JSON files
const algorithmsJSON = require("./Models_test/Algorithms.json");
const algorithmsJS = require("./Models_test/Algorithms.js");

// Create our app object
const app = express();

// set up middleware
app.use(cors());

//home route backend
app.get("/", (req, res) => {
  res.send("Andrew's Algo Visualizer Site");
});

// route for retrieving algorithms from JSON
app.get("/algorithmsJSON", (req, res) => {
  // send projects via JSON
  res.json(algorithmsJSON);
});

// route for retrieving algorithms from JS
app.get("/algorithmsJS", (req, res) => {
  // send projects via JSON
  res.send(algorithmsJS);
});

//declare a variable for our port number
const PORT = process.env.PORT || 4000;

// turn on the server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));