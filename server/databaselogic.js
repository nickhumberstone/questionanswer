import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export async function getAnswers() {
    const [output] = await pool.query("SELECT * FROM responses")
        return output
        //.text_content
    }

export async function addAnswer(user_id, text_content) {
    const [output] = await pool.query(`
    INSERT into responses (user_id, text_content)
    VALUES (?, ?)`, [user_id, text_content])
    return output[0]
}