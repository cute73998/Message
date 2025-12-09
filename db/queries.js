const pool = require('./pool');

async function getAllMessages(){
    const {rows} = await pool.query('SELECT * FROM messages1');
    return rows;
}

async function deleteMessage(username){
    await pool.query('DELETE FROM messages1 WHERE username=$1', [username]);
}

async function insertMessage(text, username, added){
    await pool.query('INSERT INTO messages1 (text, username, added) VALUES ($1, $2, $3)', [text, username, added]);
}

module.exports = {
    getAllMessages,
    deleteMessage,
    insertMessage
}