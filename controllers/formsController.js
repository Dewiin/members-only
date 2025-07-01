const { body, validationResult } = require("express-validator");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const users_db = require("../db/userQueries");

// Validators
const validateUserRegister = [
	body("full_name")
		.trim()
		.notEmpty()
		.withMessage("Full name cannot be empty.")
		.matches(/^[a-zA-Z]+ [a-zA-Z]+$/)
		.withMessage(
			"Full name can only contain alphabetical letters and the format must be the first and last name separated by one space.",
		),
	body("username")
		.trim()
		.notEmpty()
		.withMessage("Username cannot be empty.")
		.matches(/^[a-zA-Z0-9]+$/)
		.withMessage("Username can only contain alphanumeric characters.")
		.custom(async (value) => {
			const user = await users_db.findUserByUsername(value);
			if (user) {
				throw new Error("Username already in use.");
			}
		}),
	body("password")
		.matches(/^[\S]+$/)
		.withMessage("Password cannot contain whitespace."),
	body("confirm_password").custom((value, { req }) => {
		if (value !== req.body.password) {
			throw new Error("Passwords do not match.");
		}
		return true;
	}),
];

const validateUserLogin = [
	body("username").custom(async (value) => {
		const user = await users_db.findUserByUsername(value);
		if (!user) {
			throw new Error("Username does not exist.");
		}
	}),
];


// Functions
function registerGet(req, res) {
	try {
		res.render("register", { title: "Register" });
	} catch (error) {
		console.error(`Error fetching register page: `, error);
	}
}

async function registerPost(req, res) {
	try {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.render("register", {
				title: "Register",
				errors: errors.array(),
			});
		}

		const { full_name, username, password } = req.body;
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

function loginPost(req, res, next) {
	try {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.render("login", {
				title: "Login",
				errors: errors.array(),
			});
		}
		next();
	} catch (error) {
		console.error(`Failed to verify login: `, error);
	}
}

module.exports = {
	registerGet,
	registerPost: [validateUserRegister, registerPost],
	loginGet,
	loginPost: [
		validateUserLogin, 
		loginPost,
		passport.authenticate("local", {
			successRedirect: "/",
			failureRedirect: "/form/login",
		}), 
	],
};
