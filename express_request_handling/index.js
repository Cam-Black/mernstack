const express = require("express");
const app = express();
const routes = require("./routes/breakoutRoom");
const port = 8080;

app.listen(port);

const logger = (req, res, next) => {
	console.log(new Date());
	next();
}

app.use(routes);