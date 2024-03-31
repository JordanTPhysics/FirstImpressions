const express = require('express');
const router = express.Router();
const VoiceResponse = require('twilio').twiml.VoiceResponse;

router.post('/voice', (req, res) => {
    const twiml = new VoiceResponse();
    const city = req.body.FromCity;
    const fromNo = req.body.From;

    twiml.say(`Sorry you missed us, I'm probably busy right now, you live in ${city} and Number is ${fromNo} but will get back to you as soon as I can \n - FirstImpression`)
    console.log(`Missed call from ${fromNo} in ${city}`);
    res.type('text/xml');
    res.send(twiml.toString());
    res.status(200).end();

});


module.exports = router;
