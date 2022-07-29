const express = require("express");
const app = express();
const port = 4000;

app.listen(port);

app.get("/error", (req, res, next) => {
		const err = new Error("You ran into an error. Bad!");
		next(err);
});

app.use((err, req, res, next) => {
	console.log(err.stack);
	next(err);
});

app.use((err, req, res, next) => {
	res.status(500).send(err.message);
});