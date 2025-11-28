const express = require('express');
const app = express.Router();
let messages = [];
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render('index', { messages });
})

app.get('/new', (req, res) => {
    res.render('new');
})

app.post('/new', (req, res) => {
    messages.push({ text: req.body.text, user: req.body.user, added: new Date().getTime() });
    res.redirect('/');
});

app.get('/delete/:index', (req, res) => {
    const index = req.params.index;
    messages = messages.filter((m, i) => i != index);
    res.redirect('/');
})

module.exports = app;