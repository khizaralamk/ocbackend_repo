const { userData } = require("../config/userData");

const fetchUserRegisteredProperties = (req, res) => {
    const user_id = req.params && req.params.id ? req.params.id : req.query && req.query.userId;
    if (!user_id) {
        return res.status(400).json({ message: 'Missing userId' });
    }

    const found_user = userData.find(item => item.user && item.user.id === user_id);
    if (!found_user) {
        return res.status(404).json({ message: 'User not found' });
    }
    // Extract properties array safely
    const properties = Array.isArray(found_user.properties) ? found_user.properties : [];

    // Map to required shape: { id, title }
    const result = properties.map(p => {
        // prefer propertyId if present, fall back to id or other common keys
        const id = p.propertyId || p.id || null;
        const title = p.title || p.name || '';
        return { id, title };
    }).filter(item => item.id !== null);

    return res.status(200).json(result);
}

module.exports = { fetchUserRegisteredProperties };