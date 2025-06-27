function indexGet(req, res) {
    try {
        res.render("index", {title: "Inkcognito"});
    }
    catch (error) {
        console.error(`Error getting home page: `, error);
    }
}

module.exports = {
    indexGet,
}