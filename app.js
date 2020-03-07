const createError                 = require('http-errors');
const express                     = require('express');
const path                        = require('path');
const cookieParser                = require('cookie-parser');
const logger                      = require('morgan');
const consign                     = require('consign');
const helmet                      = require('helmet');
const dotenv                      = require('dotenv').config();

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());

consign()
  .include('src/routes')
  .then('src/models')
  .then('src/controllers')
  .into(app);

module.exports = app;
