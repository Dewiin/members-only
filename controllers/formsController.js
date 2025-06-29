const bcrypt = require("bcryptjs");
const users_db = require("../db/userQueries");

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
