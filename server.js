const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// this is to serve the frontend part
app.use(express.static('dist/'));

app.use((req, res, next) => {
  let newURL;
  // If not on HTTPS, or not on the main domain, redirect
  if (process.env.NODE_ENV === 'production' &&
    (req.headers['x-forwarded-proto'] !== 'https' || req.headers.host !== 'ix2-challenge.herokuapp.com/')) {

    newURL = ['https://ix2-challenge.herokuapp.com/', req.url].join('');
    return res.redirect(newURL);
  }

  return next();
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
