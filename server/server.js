const express = require('express');
const path = require('path');
const dbController = require('./dbController');
const apiController = require('./apiController');

const app = express();
const cors = require('cors');

const PORT = 3000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const axios = require('axios');
const querystring = require ('querystring');


const accessToken = '';
const clientId = '16a9c134560d4ae5ae1085469dcdf56b';
const clientSecret = '05745b1fb16342b08f7ef71045e2c348';
const redirectUri = 'http://localhost:8080';

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










app.use(express.static(path.resolve(__dirname, 'INSERT FILE PATH')));

// ROUTES
app.post('/genre', dbController.getGenre, (req, res) =>
  res.status(200).send(res.locals.genre)
);

// app.get('/login', apiController.login, (req, res) => {
//     res.status(200).send(res.body.code)
// } )

app.use('/login', function(req, res) {

    let state = generateRandomString(16);
    let scope = 'user-read-private user-read-email';
    let redirectUrl = 'https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: clientId,
      scope: scope,
      redirect_uri: redirectUri,
      state: state
    });
     res.status(301).redirect(redirectUrl);
  });



app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));
console.log(path.join(__dirname, '../index.html'))

// Unknown Page
app.use('*', (req, res) => res.status(404).send('Page not found'));

// Error Handler
app.use((err, req, res) => {
  const defaultErr = {
    log: 'Unknown middleware error',
    status: 500,
    message: { err: 'An unknown error occurred' },
  };
  const errObj = Object.assign({}, defaultErr, err);
  console.log(errObj.log);
  return res.status(errObj.status).send(errObj.message);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

module.exports = app;
