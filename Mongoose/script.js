const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const app = express();
app.listen(4040);

mongoose.connect('mongodb://localhost:27017/movies', {useNewUrlParser: true})
	.then(() => {
			console.log("Connected Successfully");
		},
		(err) => {
			console.error("Connection failed." + err.stack);
		});

const movieSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	genre: {
		type: []
	},
	releaseYear: {
		type: Number
	}
});

const movies = mongoose.model('Movies', movieSchema);
const movieOne = new movies({
	"title": "Gone with the wind",
	"genre": [
		"Rom-Com",
		"Drama",
		"Horror"
	],
	releaseYear: 2214
});

movieOne.save().then(() => console.log(JSON.stringify(movieOne)));

app.get("/read", (req, res) => {
	res.send(JSON.stringify(movieOne));
});