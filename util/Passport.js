const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
//const FacebookStrategy = require('passport-facebook').Strategy;
//const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/userModel');

passport.use(new LinkedInStrategy({
    clientID: process.env.LI_CLIENT_ID,
    clientSecret: process.env.LI_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/api/auth/linkedin/callback",
    scope: ['openid', 'profile', 'email', 'w_member_social'],
}, (accessToken, refreshToken, done) => {

    //done(null, profile);
    //console.log('LinkedIn profile:', profile);
    console.log('LinkedIn access token:', accessToken);
    sessionStorage.setItem('LinkedInAccessToken', accessToken);
}));

passport.serializeUser((user, done) => {
    // Serialize the user profile to the session
    done(null, user);
});

passport.deserializeUser((user, done) => {
    // Deserialize the user profile from the session
    done(null, user);
});
module.exports = passport;