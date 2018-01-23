const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// models
const Event = require('./model/events');
// bring in our environment variables
dotenv.config();
// create our express instances
const app = express();
const router = express.Router();

// set port from config or default.
const port = process.env.API_PORT || 3001;

// db configure
const mongoDB = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds111608.mlab.com:11608/dagatai`;
mongoose.connect(mongoDB, { useMongoClient: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// configure express to use bodyParser and to look for JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// allow CORS to prevent Cross Origin Resource Sharing errors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  // remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

// set the route path & initialize the API
router.get('/', (req, res) => {
  res.json({ message: 'API Initialized!' });
});

// add events route to our api
router.route('/events')
  .get((req, res) => {
    Event.find((err, events) => {
      if (err) {
        res.send(err);
      }
      // response with events
      return res.json(events);
    });
  })
  // add new event to the database
  .post((req, res) => {
    const event = new Event();
    event.entryDate = req.body.entryDate;
    event.author = req.body.author;
    event.text = req.body.text;

    event.save((err) => {
      if (err) {
        res.send(err);
      }
      return res.json({ message: 'Event added!' });
    });
  });

// user our router configuration when we call /api
app.use('/api', router);

// start the server and listen for requests
app.listen(port, () => {
  console.log(`api running on port ${port}`);
});
