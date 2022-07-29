const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
	const game = {"game": "Crusader Kings II", "price": 22.50, "Release Year": 2012};
	const gameAsJSON = JSON.stringify(game);
	res.setHeader('Content-Type', 'application/json');
	res.end("Hello World!\n" + gameAsJSON);
});

app.listen(port, () => {
	console.log(`REST API application listening on port ${port}`);
});
