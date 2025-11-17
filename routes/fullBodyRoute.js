const express = require('express');
const router = express.Router();

const { FullBodyController, fetchInvoicesFromDBwithUserId, fetchParcelsFromDBwithUserIdAndPropertyId, fetchCards } = require('../controllers/fullBodyController');
const { updateTermsAccepted } = require('../controllers/loginController');
const { fetchBookings } = require('../controllers/fetchBookings');
const { fetchInvoices } = require('../controllers/fetchInvoices');
const { fetchParcels } = require('../controllers/fetchParcels');
const { fetchProperties } = require('../controllers/fetchProperties');
const { fetchUserRegisteredProperties } = require('../controllers/fetchUserRegisteredProperties');
const { submitMaintenanceController } = require('../controllers/submitMaintenanceController');
const { submitAmenityBookingController } = require('../controllers/submitAmenityBookingController');
const { fetchUserProfile } = require('../controllers/fetchUserProfile');
const { fetchMembers } = require('../controllers/fetchMembers');
const { fetchDocuments } = require('../controllers/fetchDocuments');
const { fetchAmenityListing } = require('../controllers/amenitySlots');

router.get('/userData/:id', FullBodyController);
router.get('/fetchInvoices/:id', fetchInvoicesFromDBwithUserId);
router.get('/updateTerms/:id', updateTermsAccepted)
router.get('/fetchBookings/:id/:propertyId', fetchBookings);
router.get('/fetchInvoices/:id/:propertyId', fetchInvoices);
router.get('/fetchParcels/:id/:propertyId', fetchParcels);
router.get('/fetchProperties/:id', fetchProperties);
router.get('/fetchUserRegisteredProperties/:id', fetchUserRegisteredProperties);

// ADD THIS ROUTE for maintenance submission
router.post('/submitMaintenance/:id', submitMaintenanceController);

router.post('/submitAmenityBooking/:id', submitAmenityBookingController);

// fetch user profile
router.get('/fetchUserProfile/:id', fetchUserProfile)

// fetch cards
router.get('/fetchCards/:id',fetchCards)

// fetch members
router.get('/fetchMembers/:id/:propertyId',fetchMembers);

// fetch documents
router.get('/fetchDocuments/:id/:propertyId', fetchDocuments);

router.get('/fetchAmenityListing', fetchAmenityListing);

module.exports = router;