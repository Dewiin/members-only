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

module.exports = {
	indexGet,
	logoutGet
};
