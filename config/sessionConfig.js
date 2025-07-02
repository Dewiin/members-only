const session = require("express-session");

module.exports = session({
	secret: "cats",
	resave: false,
	saveUninitialized: false,
});
