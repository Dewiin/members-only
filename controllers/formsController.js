function registerGet(req, res) {
    try {
        res.render("register", {title: "Register"});
    }
    catch (error) {
        console.error(`Error fetching register page: `, error);
    }
}

function loginGet(req, res) {
    try {
        res.render("login", {title: "Login"});
    }
    catch (error) {
        console.error(`Error fetching login page: `, error);
    }
}

module.exports = {
    registerGet,
    loginGet,
}