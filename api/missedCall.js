const express = require('express');
const router = express.Router();
const VoiceResponse = require('twilio').twiml.VoiceResponse;

router.post('/voice', (req, res) => {
    const twiml = new VoiceResponse();
    const city = req.body.FromCity;

    twiml.say(`Sorry you missed us, I'm probably busy right now ${city} but will get back to you as soon as I can \n - FirstImpression`)
    console.log(`Missed call`);
    
    res.status(200).end();
});

module.exports = router
