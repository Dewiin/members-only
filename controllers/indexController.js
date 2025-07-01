function indexGet(req, res) {
	try {
		res.render("index", { title: "Inkcognito", user: req.user });
	} catch (error) {
		console.error(`Error getting home page: `, error);
	}
}

module.exports = {
	indexGet,
};
