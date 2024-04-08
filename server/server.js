const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'INSERT FILE PATH')));

// ROUTES
app.use('/', (req, res) => res.sendFile(path.join(__dirname, './index.html')));

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
