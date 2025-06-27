const { Client } = require("pg");
require("dotenv").config();

const SQL = `
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        full_name TEXT NOT NULL,
        username TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        membership_status BOOLEAN DEFAULT FALSE
    );

    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        title TEXT NOT NULL,
        text TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        author INTEGER REFERENCES users(id) ON DELETE CASCADE
    );
`;

async function main() {
	console.log("seeding...");
	const client = new Client({
		connectionString: process.env.DATABASE_URL,
	});
	await client.connect();
	await client.query(SQL);
	await client.end();
	console.log("done");
}

main();
