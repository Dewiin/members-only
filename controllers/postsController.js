async function postsGet(req, res) {
	try {
		// fetch posts

		res.render("posts", { title: "Posts" });
	} catch (error) {
		console.error(`Error fetching posts: `, error);
	}
}

module.exports = {
	postsGet,
};
