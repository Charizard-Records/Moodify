const axios = require('axios');


const accessToken = '';
const clientId = '16a9c134560d4ae5ae1085469dcdf56b';
const clientSecret = '05745b1fb16342b08f7ef71045e2c348';

const apiController = {
  
  //object fetches access token 
  getToken : {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
        'Authorization': 'Basic ' + (new Buffer.from(clientId + ':' + clientSecret).toString('base64'))
        },
    form: { 
        grantType: 'client_crendentials'
    },
    json: true 
  },


  //middleware gets token
  async getRecs(req, res, next) {
    const url = `https://api.spotify.com/v1/recommendations?limit=15&market=US&seed_genres=riddim%2C+metal%2C+pop%2C+blues`;
    const encodedCredentials =  new Buffer.from(
      `${clientId}:${clientSecret}`
    ).toString('base64');

    try {
      const body = await axios.get(url, {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      });
      if (body.status === 200) {
        //something here...
      }
    } catch (err) {
      //error catching, change this a bit...
      console.log('Error making Spotify API request:', err);
      res.status(500).send('Error retrieving Spotify data');
    }
  },
};

export default apiController;
