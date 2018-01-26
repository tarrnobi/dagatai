const router = require('express').Router();
const moment = require('moment');
// models
const Event = require('../../model/events');

router.get('/', (req, res) => {
  const queryParams = req.query;
  if (queryParams.entryDate) {
    const start = moment(queryParams.entryDate).startOf('day');
    const end = moment(start).add(1, 'days');
    queryParams.entryDate = {
      $gte: start,
      $lt: end,
    };
  }
  Event.find(queryParams, (err, events) => {
    if (err) res.send(err);
    // response with events
    return res.status(200).json(events);
  });
});
// add new event to the database
router.post('/', (req, res) => {
  const event = new Event();
  event.entryDate = req.body.entryDate;
  event.author = req.body.author;
  event.text = req.body.text;

  event.save((err) => {
    if (err) res.send(err);

    return res.status(200).json({ message: 'Event added!' });
  });
});
// reouter route for specific events
router.put('/:event_id', (req, res) => {
  Event.findById(req.params.event_id, (err, event) => {
    if (err) res.send(err);

    if (req.body.author) event.author = req.body.author;
    if (req.body.text) event.text = req.body.text;
    if (req.body.entryDate) event.entryDate = req.body.entryDate;
    // save events
    event.save((saveError) => {
      if (saveError) {
        res.send(saveError);
      }
      res.status(200).json({ message: 'Event updated' });
    });
  });
});
// delete method for removing events
router.delete('/:event_id', (req, res) => {
  Event.remove({ _id: req.params.event_id }, (err) => {
    if (err) res.send(err);
    res.status(200).json({ message: 'Comment deleted' });
  });
});

module.exports = router;
