const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const Event = require('../../models/Event');

// @route   POST API/event
// @desc    Create a new event
// @access  Private

router.post(
  '/',
  [
    check('eventname', 'Event name is required!')
      .not()
      .isEmpty(),
    check('eventdate', 'Event date is required!')
      .not()
      .isEmpty()
  ],
  auth,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //Destructuring
    const {
      eventid,
      eventname,
      host,
      description,
      eventdate,
      capacity,
      price,
      currently,
      location,
      location_id
    } = req.body;

    const eventFields = {};
    if (eventid) eventFields.eventid = eventid;
    if (eventname) eventFields.eventname = eventname;
    if (host) eventFields.host = host;
    if (description) eventFields.description = description;
    if (eventdate) eventFields.eventdate = eventdate;
    if (price) eventFields.price = price;
    if (currently) eventFields.currently = currently;
    if (capacity) eventFields.capacity = capacity;
    if (location) eventFields.location = location;
    if (location_id) eventFields.location_id = location_id;

    try {
      let event = await Event.findOne({
        eventid
      });
      //Update
      if (event) {
        event = await Event.findOneAndUpdate(
          { eventid },
          { $set: eventFields },
          { new: true }
        );
        return res.json(event);
      }

      const filter = { currently: 'true' };
      const update = { currently: 'false' };

      //Create
      let iterate = await Event.findOneAndUpdate(filter, update);
      event = new Event(eventFields);
      await event.save();
      res.json(event);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error (500)');
    }
  }
);

// @route   GET api/event
// @desc    Get all existing events
// @access  Private

router.get('/', auth, async (req, res) => {
  try {
    const event = await Event.find();
    res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
