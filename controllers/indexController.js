const { formatDistanceToNow } = require("date-fns");
const messages_db = require("../db/messageQueries");
const users_db = require("../db/userQueries");
require("dotenv").config();

async function indexGet(req, res) {
	try {
		const response = await messages_db.getAllMessages();

		const messages = response.map((msg) => ({
			...msg,
			timeAgo: formatDistanceToNow(new Date(msg.created_at), {addSuffix: true})
		}));

		res.render("index", { title: "Inkcognito", user: req.user, messages: messages });
	} catch (error) {
		console.error(`Error getting home page: `, error);
	}
}

function logoutGet(req, res) {
	req.logout((err) => {
		if (err) {
			return next(err);
		}
		res.redirect("/");
	});
}

function createGet(req, res) {
	try {
		res.render("newPost", { title: "Create New Post", user: req.user });
	} catch (error) {
		console.error(`Error rendering new post page: `, error);
	}
}

async function createPost(req, res) {
	try {
		const { post_title, post_content } = req.body;
		const author = req.user.id;

		await messages_db.insertMessage(post_title, post_content, author);

		res.redirect("/");
	} catch (error) {
		console.error(`Error adding new post to database: `, error);
	}
}

async function memberPost(req, res) {
	try {
		const { membershipPassword } = req.body;

		if (membershipPassword === process.env.MEMBERSHIP_SECRET) {
			await users_db.giveMembership(req.user.id);
			return res.sendStatus(200);
		}
		res.sendStatus(401);
	}
	catch (error) {
		console.error(`Error updating membership status in database: `, error);
	}
}

module.exports = {
	indexGet,
	logoutGet,
	createGet,
	createPost,
	memberPost
};
