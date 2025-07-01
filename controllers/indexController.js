const { text } = require("express");
const messages_db = require("../db/messageQueries");

function indexGet(req, res) {
	try {
		res.render("index", { title: "Inkcognito", user: req.user });
	} catch (error) {
		console.error(`Error getting home page: `, error);
	}
}

function logoutGet(req, res) {
	req.logout((err) => {
		if(err) {
			return next(err);
		}
		res.redirect("/");
	});
}

function createGet(req, res) {
	try {
		res.render("newPost", {title: "Create New Post", user: req.user});
	}
	catch (error) {
		console.error(`Error rendering new post page: `, error);
	}	
}

async function createPost(req, res) {
	try {
		const {post_title, post_content} = req.body;
		const author = req.user.id;

		await messages_db.insertMessage(post_title, post_content, author);

		res.redirect("/");
	} catch (error) {
		console.error(`Error adding new post to database: `, error);
	}
}

module.exports = {
	indexGet,
	logoutGet,
	createGet,
	createPost
};
