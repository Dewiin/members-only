const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require("bcryptjs")
const users_db = require("../db/userQueries");

async function verifyCallback(username, password, done) {
    try {
        const user = await users_db.findUserByUsername(username);

        if (!user) {
            return done(null, false, { message: "Username not found." });
        }

        const match = await bcrypt.compare(password, user.password_hash);
        if (!match) {
            return done(null, false, { message: "Incorrect username or password" })
        }

        return done(null, user);
    } catch(err) {
        return done(err);
    }
}

passport.use(new LocalStrategy(verifyCallback));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await users_db.findUserByID(id);

        done(null, user);
    } catch(err) {
        done(err);
    }
});