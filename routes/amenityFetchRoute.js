const express = require('express');
const { fetchAmenityListing } = require('../controllers/amenitySlots');
const router = express.Router();

router.get('/listing', fetchAmenityListing);

module.exports = router;