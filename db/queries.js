const pool = require('./pool');

async function getAllMessages(){
    const {rows} = await pool.query('SELECT * FROM message1');
    return rows;
}

async function deleteMessage(username){
    await pool.query('DELETE FROM message1 WHERE username=$1', [username]);
}

async function insertMessage(text, username, added){
    await pool.query('INSERT INTO message1 (text, username, added) VALUES ($1, $2, $3)', [text, username, added]);
}

module.exports = {
    getAllMessages,
    deleteMessage,
    insertMessage
}