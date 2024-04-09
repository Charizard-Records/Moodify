const axios = require('axios');


const accessToken = '';
const clientId = '16a9c134560d4ae5ae1085469dcdf56b';
const clientSecret = '05745b1fb16342b08f7ef71045e2c348';
const redirectUri = 'http://localhost:3000/';

const apiController = {
  
//   //object fetches access token 

//Oauth login redirect
login(req, res, next){
    let state = generateRandomString(16);
    let scope = 'user-read-private user-read-email';

    res.redirect('https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: clientId,
        scope:scope,
        redirect_uri: redirectUri,
        state:state
      }));
    
    next()
  },

  getToken(req, res, next){
    let code = req.query.code || null;
    let state = req.query.state || null;

    if (state = req.query.code || null) {
        res.redirect('/#' + querystring.stringify({
            error: 'state_mismatch'
        }));
    } else {
        let getToken = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
                code: code,
                redirect_uri: redirectUri,
                grant_type: 'authorization_code'
            },
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + (new Buffer.from(clientId + ':' + clientSecret).toString('base64'))
                },
            json: true 
          };
    }
    next()
  },


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

export default apiController;
