const pool = require("./pool");

async function getAllMessages() {
	try {
		const SQL = `
        SELECT 
			messages.id, 
			messages.title, 
			messages.text, 
			messages.created_at, 
			users.full_name, 
			users.username
		FROM messages
		JOIN users
		ON messages.author = users.id
		ORDER BY messages.created_at DESC;
        `;

		const { rows } = await pool.query(SQL);
		return rows;
	} catch (error) {
		console.error(`Error retrieving all messages from the database: `, error);
	}
}

async function insertMessage(title, text, author) {
	try {
		const SQL = `
        INSERT INTO messages(title, text, author)
        VALUES ($1, $2, $3)
        `;

		await pool.query(SQL, [title, text, author]);
	} catch (error) {
		console.error(`Error inserting message into database: `, error);
	}
}

async function deleteMessageByID(id) {
	try {
		const SQL = 
		`
		DELETE FROM messages
		WHERE id = $1
		`

		await pool.query(SQL, [id]);
	} catch (error) {
		console.error(`Error deleting message from the database: `, error);
	}
}

module.exports = {
	getAllMessages,
	insertMessage,
	deleteMessageByID
};
