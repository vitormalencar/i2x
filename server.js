const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// this is to serve the frontend part
app.use(express.static('dist/'));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
