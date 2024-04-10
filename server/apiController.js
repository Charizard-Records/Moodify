const axios = require('axios');
const querystring = require ('querystring');
const { Cookie } = require('express-session');



const accessToken = '';
const clientId = '16a9c134560d4ae5ae1085469dcdf56b';
const clientSecret = '05745b1fb16342b08f7ef71045e2c348';
const redirectUri = 'http://localhost:8080/test';

function generateRandomString(length) {
    // Define characters allowed in the random string
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      // Generate a random index within the characters string
      const randomIndex = Math.floor(Math.random() * characters.length);
      
      // Append the character at the random index to the result string
      result += characters.charAt(randomIndex);
    }
    return result;
  }



const apiController = {
  
//   //object fetches access token 

//Oauth login redirect
login(req, res, next){
    let state = generateRandomString(16);
    let scope = 'user-read-private user-read-email';
    console.log("login middleware hit")

    res.redirect('https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: clientId,
        scope:scope,
        redirect_uri: redirectUri,
        state:state,
      }));
    
    next()
  },

  
//   getToken(req, res, next){
//     let code = req.query.code || null;
//     let state = req.query.state || null;

//     if (state = req.query.code || null) {
//         res.redirect('/#' + querystring.stringify({
//             error: 'state_mismatch'
//         }));
//     } else {
//         let getToken = {
//             url: 'https://accounts.spotify.com/api/token',
//             form: {
//                 code: code,
//                 redirect_uri: redirectUri,
//                 grant_type: 'authorization_code'
//             },
//             headers: {
//                 'content-type': 'application/x-www-form-urlencoded',
//                 'Authorization': 'Basic ' + (new Buffer.from(clientId + ':' + clientSecret).toString('base64'))
//                 },
//             json: true 
//           };
//     }
//     next()
//   },



async getToken(req, res, next){
    const code = req.query.code;
    const state = req.query.state; 
    res.cookie('code', code);
    res.cookie('state', state);
    try{
     res.locals.token = await fetch('https://accounts.spotify.com/api/token',{
        method: "POST",
        form: {
            code: code,
            redirect_uri: redirectUri,
            grant_type: 'authorization_code'
          },
          header:{
            'content-type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + (new Buffer.from(clientId + ':' + clientSecret).toString('base64'))
          },
          json: true
    })
    const myCookie = new Cookie();
    myCookie.httpOnly = true;
    res.cookie('token', res.locals.token, myCookie);
    return (next())
    } catch{
        return next((err) => err);
    }

},


//   refreshToken(req, res, next){
//     let refreshToken = req.query.refresh_token;
//   },


  //middleware 
  async getRecs(req, res, next) {
    const url = `https://api.spotify.com/v1/recommendations?limit=15&market=US&seed_genres=riddim%2C+metal%2C+pop%2C+blues`;
    const encodedCredentials =  new Buffer.from(
      `${clientId}:${clientSecret}`
    ).toString('base64');

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      });
      if (response.status === 200) {
        //something here...
        next();
      }
    } catch (err) {
      //error catching, change this a bit...
      console.log('Error making Spotify API request:', err);
      res.status(500).send('Error retrieving Spotify data');
    }
  },
};

module.exports = apiController;
