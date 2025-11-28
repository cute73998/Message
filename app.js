const express = require('express');
const app = express();

const indexRouter = require('./routes/index');
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);

app.listen(3000, (error) => {
    if (error) {
        throw error;
    }
    console.log(`My first Express app - listening on port ${3000}!`);
})