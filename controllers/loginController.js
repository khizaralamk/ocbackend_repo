const { userData } = require('../config/userData');
const jwt = require('jsonwebtoken');

// NOTE: For development only. In production store this in env (process.env.JWT_SECRET)
const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_change_me';

function generateRandomToken(length = 32) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  for (let i = 0; i < length; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return token;
}

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    console.log("Email is = ", email, " Password is = ", password);
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  // find user in mock DB
  const found = userData.find(item => item.user && item.user.email === email);

  if (!found) {
    // email not found
    return res.status(401).json({ message: 'Enter correct email' });
  }

  if (found.user.password !== password) {
    // password mismatch
    return res.status(401).json({ message: 'Wrong password' });
  }

  // successful login - create a signed JWT
  const tokenPayload = {
    sub: found.user.id,
    email: found.user.email,
    name: found.user.name
  };
  const token = jwt.sign(tokenPayload, JWT_SECRET, { expiresIn: '1h' });
  const user = {
    id: found.user.id,
    email: found.user.email,
    name: found.user.name,
  };

  res.json({ success: true, terms: found.user.termsAccepted, token, user: found.user.email, userId: found.user.id });
};

// controller to update the termsAccepted field for a user
const updateTermsAccepted = (req, res) => {
  const user_id = req.params && req.params.id ? req.params.id : (req.query && req.query.userId ? req.query.userId : null);

  if (!user_id) {
    return res.status(400).json({ message: 'user id is required' });
  }

  const finduserbyid = userData.find(item => item.user && item.user.id === user_id);
  if (!finduserbyid) {
    console.log("User ID not found:", user_id);
    return res.status(404).json({ message: 'User not found' });
  }
  finduserbyid.user.termsAccepted = false;
  res.json({ success: true, message: 'Terms accepted updated successfully' });
};

module.exports = { login, updateTermsAccepted };