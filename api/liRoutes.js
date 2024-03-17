const express = require('express');
const axios = require('axios');

const passport = require('../util/Passport');

const router = express.Router();
const baseUrl = process.env.PRODUCTION_URL || "http://localhost:3000/api";
const CLIENT_ID = process.env.LI_CLIENT_ID;
const CLIENT_SECRET = process.env.LI_CLIENT_SECRET;
const REDIRECT_URI = `${baseUrl}/auth/linkedin/callback`;



router.get('/', (req, res) => {
    const scopes = ['openid', 'profile', 'email', 'w_member_social'];
    const scopeString = encodeURIComponent(scopes.join(' '));
    const authorizationUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scopeString}`;
  
    res.redirect(authorizationUrl);
});
router.get('/callback', async (req, res) => {
    const { code, state } = req.query;
    const tokenEndpoint = 'https://www.linkedin.com/oauth/v2/accessToken';
    const params = new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_uri: REDIRECT_URI,
        code: code
      });
    try {

      const response = await axios.post(tokenEndpoint, params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      
      const accessToken = response.data.access_token;
      res.redirect(`/dashboard?access_token=${accessToken}`);
      
      // useful for testing the response
    //   const profileResponse = await axios.get('https://api.linkedin.com/v2/userinfo', {
    //     headers: {
    //         'Content-type': 'application/json',
    //       'Authorization': `Bearer ${accessToken}`
    //     }
    //   });
  
    //   // Process user profile data
    //   const userProfile = profileResponse.data;
    //   res.json(userProfile);


    } catch (error) {
      console.error('Error fetching LinkedIn profile:', error.response.data);
      res.status(500).send('Error fetching LinkedIn profile');
    }
});

router.get('/profile', (req, res) => {
    res.json(req.user);
});

module.exports = router;
