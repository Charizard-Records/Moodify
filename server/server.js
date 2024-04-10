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







///////////////////////////////////////////////////////

app.use(express.static(path.resolve(__dirname, 'INSERT FILE PATH')));

// ROUTES
app.post('/genre', dbController.getGenre, (req, res) =>
  res.status(200).send(res.locals.genre)
);

app.get('/login', apiController.login , (req, res) => {
    res.status(200).send(res.query.code)
});

app.get('/callback', apiController.getToken,(req, res) => {
    res.send(302).redirect('http://localhost:8080');
});

// app.use('/login', function(req, res) {

//     let state = generateRandomString(16);
//     let scope = 'user-read-private user-read-email';
//     let redirectUrl = 'https://accounts.spotify.com/authorize?' +
//     querystring.stringify({
//       response_type: 'code',
//       client_id: clientId,
//       scope: scope,
//       redirect_uri: redirectUri,
//       state: state
//     });
//      res.status(301).redirect(redirectUrl);
//   });



app.post('/addHistory', dbController.addHistory, (req, res) =>
  res.status(200).send(res.locals.date, res.locals.userId, res.locals.moodId, res.locals.message)
);

app.post('/getUserHistory', dbController.getUserHistory, (req, res) =>
  res.status(200).send(res.locals.history)
);

app.get('/getUserInfo/:id', dbController.getUserInfo, (req, res) =>
  res.status(200).send(res.locals.userInfo)
);

app.use('/test', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));
// console.log(path.join(__dirname, '../index.html'))

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
