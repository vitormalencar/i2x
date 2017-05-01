const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// this is to serve the frontend part
app.use(express.static('dist/'));

app.use('/*', (req, res) => {
	if (req.headers['x-forwarded-proto'] !== 'https') {
		res.redirect(301, 'https://ix2-challenge.herokuapp.com/' + req.url);
	}
	res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
