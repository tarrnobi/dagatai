const routes = require('express').Router();
const events = require('./events');

routes.use('/api/events', events);
routes.get('/', (req, res) => {
  res.status(200).json({ message: 'API Initialized!' });
});

module.exports = routes;
