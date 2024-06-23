const mongoose = require('mongoose');

const NumberGuessStatSchema = new mongoose.Schema({
    username: { type: String, required: true },
    wincount: { type: String, required: true },
    failcount: { type: String, required: true },
    time: { type: Date, default: Date.now },
});

module.exports = mongoose.model('NumberGuessStat', NumberGuessStatSchema);
