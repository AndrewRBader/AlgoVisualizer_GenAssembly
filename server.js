// Import Dependencies
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
// connect to mongodb
require('./config/db.connection')

////// Models //////
// Import JSON files
const algorithmsJSON = require("./Models_test/Algorithms.json");
const db = require('./Models_DB/index.js');

// Create our app object
const app = express();

// set up middleware
app.use(cors());
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies

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
  res.json(algorithmsJSON);
});


// new get route for db -> http://localhost:4000/algorithmsJSDB/new
// complete just render new.ejs
app.get('/algorithmsJSDB/new', (req, res) => {
  res.render('./DBviews/newDB.ejs');
});

// route for retrieving algorithms from mongoDB (js schema)
app.get('/algorithmsJSDB', async (req, res) => {
    try {
        res.json(await db.AlgosDB.find({}));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
});

// create post route to create new algorithm docs for db
app.post('/algorithmsJSDB', async (req,res, next) => {
  try {
  const createdAlgoDB = await db.AlgosDB.create(req.body);
  console.log(createdAlgoDB)
  res.redirect('/algorithmsJSDB/');
  } catch (error) {
        console.log(error);
        req.error = error;
        return next();
  }
});


//declare a variable for our port number
const PORT = process.env.PORT;

// turn on the server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));