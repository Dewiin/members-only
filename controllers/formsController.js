const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const users_db = require("../db/userQueries");

const validateUser = [
	body("fullname")
	.trim()
	.notEmpty()
	.withMessage(
		"Full name cannot be empty."
	)
	.matches(/^[a-zA-Z]+ [a-zA-Z]+$/)
	.withMessage(
		"Full name can only contain alphabetical letters and the format must be the first and last name separated by one space."
	),
	body("username")
	.trim()
	.notEmpty()
	.withMessage(
		"Username cannot be empty."
	)
	.matches(/^[a-zA-Z0-9]+$/)
	.withMessage(
		"Username can only contain alphanumeric characters."
	),
	body("password")
	.matches(/^[\S]+$/)
	.withMessage(
		"Password cannot contain whitespace."
	),
	body("confirmPassword")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords do not match.");
      }
      return true;
    })
];

function registerGet(req, res) {
	try {
		res.render("register", { title: "Register" });
	} catch (error) {
		console.error(`Error fetching register page: `, error);
	}
}

async function registerPost(req, res) {
	try {
		const {full_name, username, password} = req.body;
		const hashedPassword = await bcrypt.hash(password, 10);
		await users_db.insertUser(full_name, username, hashedPassword);

		res.redirect("/");
	} catch (error) {
		console.error(`Failed to verify registration: `, error);
	}
}

function loginGet(req, res) {
	try {
		res.render("login", { title: "Login" });
	} catch (error) {
		console.error(`Error fetching login page: `, error);
	}
}

async function loginPost(req, res) {
	try {

	} catch (error) {
		console.error(`Failed to verify login: `, error);
	}
}

module.exports = {
	registerGet,
	registerPost,
	loginGet,
	loginPost
};
