function updatePassword(req, res) {
    const { email, password } = req.body;

    try {
    console.log("Request Body:", req.body); // Debugging line
    console.log(`Password for ${email} updated to ${password}`); 

    res.json({ message: 'Password updated successfully.' });
    } catch (error) {
        console.error("Error updating password:", error);
        res.status(500).json({ message: 'Internal server error.' });
    }
}   

module.exports = {
    updatePassword
};