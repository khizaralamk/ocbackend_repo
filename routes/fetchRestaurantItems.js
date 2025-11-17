const express = require('express');
const router = express.Router();
const { fetchRestaurantItems } = require('../controllers/fetchRestaurantItems');

// GET /api/fetchrestuantitems
router.get('/fetchrestuantitems', fetchRestaurantItems);

module.exports = router;
