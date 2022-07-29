const router = require("express").Router();

let myBreakoutRoom = ["Erhan", "Lewis", "Muhammed"];

router.get("/", (req, res) => {
	res.send("Hello my name is Cameron");
});


router.get("/getAll", (req, res) => {
	res.send(myBreakoutRoom);
})

router.get("/get/:id", (req, res) => {
	res.send(myBreakoutRoom[req.params.id]);
})

router.get("/delete/:id", (req, res) => {
	res.send(`Deleted ${myBreakoutRoom.splice(req.params.id, 1)}`);
})

module.exports = router;