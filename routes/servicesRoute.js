const express = require('express');
const router = express.Router();


const { RestaurantServiceController } = require('../controllers/servicesController');
const { FullBodyController } = require('../controllers/fullBodyController');

router.get('/restaurantItems', RestaurantServiceController);
// Add route to return full body data for a specific user (route param id)
router.get('/userData/:id', FullBodyController);

module.exports = router;