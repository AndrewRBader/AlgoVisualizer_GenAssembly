// Import Dependencies
const express = require("express");
const cors = require("cors");
// connect to mongodb
require('./config/db.connection')

////// Models //////
// Import JSON files
const algorithmsJSON = require("./Models_test/Algorithms.json");
const algorithmsJS = require("./Models_test/Algorithms.js");
const db = require('./Models_DB/AlgosDB');

// Create our app object
const app = express();

// set up middleware
app.use(cors());
// mongoDB/express middleware
// body parser middleware
app.use(express.urlencoded({extended:false}));
//application view engine to render ejs
app.set('view engine', 'ejs');



// home get route backend
app.get('/', (req, res) => {
  res.render('home.ejs');
});

// route for retrieving algorithms from JSON
app.get("/algorithmsJSON", (req, res) => {
  // send projects via JSON
  console.log(algorithmsJSON);
  const context = {algorithms:algorithmsJSON};
  res.render('index.ejs', context);
});

// route for retrieving algorithms from JS
app.get("/algorithmsJS", (req, res) => {
  // send projects via JSON
  console.log(algorithmsJS);
  const context = {algorithms:algorithmsJS};
  res.render('index.ejs', context);
});

// new get route for db -> http://localhost:4000/algorithmsJSDB/new
app.get('/algorithmsJSDB/new', (req, res) => {
  res.render('newDB.ejs');
});

// route for retrieving algorithms from mongoDB (js schema)
app.get('/algorithmsJSDB', (req, res) => {
  res.render('indexDB.ejs')
});



//declare a variable for our port number
const PORT = process.env.PORT || 4000;

// turn on the server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));