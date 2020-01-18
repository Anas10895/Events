const router = require('express').Router();
let Event = require('../models/event.model');

//get all event in the database
router.route('/').get((req, res) => {
  Event.find()
    .then(events => res.json(events))
    .catch(err => res.status(400).json('Error: ' + err));
});


//add an event 
router.post("/add", async (req, res) => {
  try {
    let event = new Event(req.body);
    let savedEvent = await event.save();
    res.json({ msg: "event added", event: savedEvent });
  } catch (error) {
    res.json({ msg: error});
  }
});


// get a specific event by id
router.route('/:id').get((req, res) => {
  Event.findById(req.params.id)
    .then(Event => res.json(Event))
    .catch(err => res.status(400).json('Error: ' + err));
});


// delete a specific event by id 
router.route('/:id').delete((req, res) => {
  Event.findByIdAndDelete(req.params.id)
    .then(() => res.json('Event deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});


// update a specific event by id 
router.put("/:id", async (req, res) => {
  let updatedEvent = req.body;
  Item.findByIdAndUpdate(req.params.id, updatedEvent)
    .then(response => {
      res.json({ msg: "event edited", updatedEvent: response });
    })
    .catch(err => {
      res.json({ msg: "event couldn't be found", err: err });
    });
});



module.exports = router;