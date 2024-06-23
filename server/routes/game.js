const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const NumberGuessStat = require('../Models/NumberGuessStat');

// add game stat
router.post('/NumberGuessStatSv', auth, async (req, res) => {
    const { username, wincount, failcount } = req.body;
    try {
        const newrecord = new NumberGuessStat({
            username,
            wincount,
            failcount
        });
        const ad = await newrecord.save();
        res.json(ad);
    } catch (err) {
        res.status(500).send(err);
    }
});


module.exports = router;
