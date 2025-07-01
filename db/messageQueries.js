const pool = require("./pool");

async function insertMessage(title, text, author) {
    try {
        const SQL = 
        `
        INSERT INTO messages(title, text, author)
        VALUES ($1, $2, $3)
        `

        await pool.query(SQL, [title, text, author]);
    } catch (error) {
        console.error(`Error inserting message into database: `, error);
    }
}

module.exports = {
    insertMessage,
}