function checkEmail(req, res) {
  const { email } = req.body;
    if (!email) {
        return res.status(400).json({ message: 'Email is required.' });
    }
    const isRegistered = email === "khizar@gmail.com";
    res.json({ registered: isRegistered });
}

module.exports = {
  checkEmail
};