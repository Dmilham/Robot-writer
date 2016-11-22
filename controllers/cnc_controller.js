var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
	res.redirect("/home");
});

router.get("/home", function (req, res) {
	res.render("home");
});

router.get("/user", function (req, res) {
	res.render("simpler");
});

router.get("/admin", function (req, res) {
	
	res.render("advanced");
});

router.get("/signup", function (req, res) {
	
	res.render("signup");
});

router.post("/login", function (req, res) {
	
});

router.post("/create", function (req, res) {
	
	console.log(req.body);
});


module.exports = router;
