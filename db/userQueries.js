const pool = require("./pool");

async function findUserByUsername(username) {
	try {
		const SQL = `
        SELECT *
        FROM users
        WHERE username = $1
        `;

		const { rows } = await pool.query(SQL, [username]);
		return rows[0];
	} catch (error) {
		console.error(`Error getting user from the database: `, error);
	}
}

async function insertUser(full_name, username, password_hash) {
	try {
		const SQL = `
        INSERT INTO 
        users (full_name, username, password_hash) 
        VALUES ($1, $2, $3)
        ON CONFLICT (username) DO NOTHING
        `;

		await pool.query(SQL, [full_name, username, password_hash]);
	} catch (error) {
		console.error(`Failed to add user to database: `, error);
	}
}

// async function giveMembership(username) {
//     try {

//     } catch (error) {
//         console.error(`Failed to validate user's membership: `, error);
//     }
// }

module.exports = {
	findUserByUsername,
	insertUser,
};

// async function main() {
//     const user = await getUser("john");
//     if(user) {
//         console.log(user);
//     }
//     else {
//         console.log("nope.");
//     }
// }

// main();
