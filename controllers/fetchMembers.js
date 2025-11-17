const { userData } = require("../config/userData");

const fetchMembers = async (req, res) => {
    try {

        const user_id = req.params && req.params.id ? req.params.id : req.query && req.query.userId;
        const propertyId = req.params && req.params.propertyId ? req.params.propertyId : req.query && req.query.propertyId;

        if (!user_id || !propertyId) {
            return res.status(400).json({ message: 'Missing userId or propertyId' });
        }

        if (!user_id) {
            return res.status(400).json({ error: 'User ID is required' });
        }

        const foundUser = userData.find(item => item.user && item.user.id === user_id);
        if (!foundUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        const property = (foundUser.properties || []).find(p => p.propertyId === propertyId);
        if (!property) {
            return res.status(404).json({ message: 'Property not found for user' });
        }

        res.status(200).json({
            success: true,
            members: property.members
        });

    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch members' });
    }
}

module.exports = { fetchMembers };