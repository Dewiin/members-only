const expressSession = require("express-session");
const pgSession = require("connect-pg-simple")(expressSession);
const pool = require("../db/pool");
require("dotenv").config();

module.exports = expressSession({
	store: new pgSession({
		pool: pool,
		tableName: "user_sessions",
		createTableIfMissing: true,
	}),
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false,
	cookie: { maxAge: 14 * 24 * 60 * 60 * 1000 },
});
