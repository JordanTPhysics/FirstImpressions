const express = require('express');
const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

const router = express.Router();
const baseUrl = process.env.PRODUCTION_URL;

// Configure LinkedIn authentication strategy
passport.use(new LinkedInStrategy({
    clientID: process.env.LINKEDIN_CLIENT_ID,
    clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    callbackURL: `${baseUrl}/callback`,
}, (accessToken, refreshToken, profile, done) => {
    // Handle authentication and user profile retrieval here
    // You can save the user profile to your database or perform any other necessary actions
    // The `profile` object contains the user's LinkedIn profile information
    // Call `done()` to indicate successful authentication
    done(null, profile);
}));

// Endpoint for initiating LinkedIn authentication
router.get('/', passport.authenticate('linkedin'));

// Endpoint for LinkedIn callback after authentication
router.get('/callback', passport.authenticate('linkedin', {
    successRedirect: '/profile',
    failureRedirect: '/login',
}));

// Endpoint for user profile
router.get('/profile', (req, res) => {
    // Access the authenticated user's profile from `req.user`
    // You can render a profile page or return the profile data as JSON
    res.json(req.user);
});

module.exports = router;
