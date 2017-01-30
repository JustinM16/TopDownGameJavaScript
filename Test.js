const express = require('express');
const app = express();
const port = 8080;


app.use((request, response, next) => {
	console.log(request.headers);
	next();
});

app.use((request, response, next) => {
	request.chance = Math.random();
	next();
});

app.use((err, request, response, next) => {
	console.log(err);
	response.status(500).send('Somthing broke!');
	next();
});


app.get('/', (request, response) => {
	response.json({
		chance: request.chance
	});

});

app.listen(port, (err) => {
	if(err) {
		return console.log('somthing bad happend', err);
	}

	console.log('server is listening on ' + port);
})