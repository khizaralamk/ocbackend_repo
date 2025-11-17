const { userData } = require('../config/userData');

const fetchBookings = async (req, res) => {
    const user_id = req.params && req.params.id ? req.params.id : req.query && req.query.userId;
    const propertyId = req.params && req.params.propertyId ? req.params.propertyId : req.query && req.query.propertyId;

    if (!user_id || !propertyId) {
        return res.status(400).json({ message: 'Missing userId or propertyId' });
    }

    const foundUser = userData.find(item => item.user && item.user.id === user_id);
    if (!foundUser) {
        return res.status(404).json({ message: 'User not found' });
    }

    const property = (foundUser.properties || []).find(p => p.propertyId === propertyId);
    if (!property) {
        return res.status(404).json({ message: 'Property not found for user' });
    }

    // Convert bookings object categories to a single array
    const bookings = Object.values(property.bookings || {}).flat();

    return res.json({ success: true, bookings });
};

module.exports = { fetchBookings };