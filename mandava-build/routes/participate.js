const express = require('express');
const router = express.Router();
const Volunteer = require('../models/Volunteer');

// POST route to handle volunteer form submission
router.post('/', async (req, res) => {
  try {
    console.log('POST request received:', req.body);
    const newVolunteer = new Volunteer(req.body);
    await newVolunteer.save();
    res.status(200).json({ status: 'success' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 'error', message: err.message });
  }
});

module.exports = router;