const express = require('express');
const query = require('../db/queries.js');
const app = express.Router();
let messages = [];
app.use(express.urlencoded({ extended: true }));


app.get('/', async (req, res) => {
    const messages = await query.getAllMessages();
    res.render('index', {messages});
})

app.get('/new', (req, res) => {
    res.render('new');
})

app.post('/new', async (req, res) => {
    await query.insertMessage(req.body.text, req.body.user, new Date().getTime());
    res.redirect('/');
});

app.get('/delete/:username', (req, res) => {
    const username = req.params.username;
    query.deleteMessage(username);
    res.redirect('/');
})

module.exports = app;