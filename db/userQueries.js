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
		console.error(
			`Error finding username ${username} in the database: `,
			error,
		);
	}
}

async function findUserByID(id) {
	try {
		const SQL = `
        SELECT * 
        FROM users
        WHERE id = $1
        `;

		const { rows } = await pool.query(SQL, [id]);
		return rows[0];
	} catch (error) {
		console.error(`Error finding id ${id} in the database: `, error);
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

async function giveMembership(id) {
	try {
		const SQL = `
		UPDATE users
		SET membership_status = true
		WHERE users.id = $1
		`;

		await pool.query(SQL, [id]);
	} catch (error) {
		console.error(`Failed to validate user's membership: `, error);
	}
}

module.exports = {
	findUserByUsername,
	findUserByID,
	insertUser,
	giveMembership,
};
