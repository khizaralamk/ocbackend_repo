const { userData } = require("../config/userData");

const fetchProperties =  async (req, res) => {

    const user_id = req.params && req.params.id ? req.params.id : req.query && req.query.userId;
    if (!user_id) {
        return res.status(400).json({ message: 'Missing userId' });
    }

    const foundUser = userData.find(item => item.user && item.user.id === user_id);
    if (!foundUser) {
        return res.status(404).json({ message: 'User not found' });
    }

    console.log('Found user properties:', foundUser.properties || []);
    return res.json({ success: true, properties: foundUser.properties || [] });

}

module.exports = { fetchProperties };