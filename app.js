const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { notFound, internalServerError } = require('./middleware/error');
require('dotenv').config();

const dbUrl = process.env.DATABASE_URL.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(dbUrl)
  .then(() => {
    console.log('資料庫連線成功');
  })
  .catch((e) => {
    console.log(e.reason);
  });

const indexRouter = require('./routes/index');
const postRouter = require('./routes/post');

const app = express();

app.use(
  cors({
    allowedHeaders:
      'Content-Type,Authorization,Content-Length,X-Requested-With',
  })
);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/posts', postRouter);

app.use(notFound);
app.use(internalServerError);

module.exports = app;
