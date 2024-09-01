// Login Route
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).send({ error: 'Invalid username or password' });
        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(400).send({ error: 'Invalid username or password' });
        }

        res.send({ message: 'Login successful' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});
