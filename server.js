const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

// Dummy data
const internData = {
    name: "Tharun Akula",
    referralCode: "tharun2025",
    donationsRaised: 2500,
    rewards: [
        "Bronze Badge",
        "Silver Badge",
        "Gold Badge (Locked)"
    ]
};

// API endpoint
app.get('/api/intern', (req, res) => {
    res.json(internData);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
