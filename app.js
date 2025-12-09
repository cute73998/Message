const express = require('express');
const app = express();

const { types } = require('pg');

// OID 20 là kiểu BIGINT trong PostgreSQL
// Đặt parser để chuyển đổi BIGINT thành Number
types.setTypeParser(20, function (val) {
  // Chỉ chuyển đổi nếu giá trị khác null
  return val === null ? null : parseInt(val, 10);
});

const indexRouter = require('./routes/index');
const path = require('path');

const staticPath = path.join(__dirname, 'public');
app.use(express.static(staticPath));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);

app.listen(3000, (error) => {
    if (error) {
        throw error;
    }
    console.log(`My first Express app - listening on port ${3000}!`);
})