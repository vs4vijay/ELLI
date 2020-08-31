#!/usr/bin/env node
'use strict';

const express = require('express');

const { CONFIG } = require('./config');
const { emailRouter, healthCheckRouter } = require('./controllers');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res, next) {
  res.json({
    success: true,
    message: 'Server is Running'
  });
});

// Adding routes
app.use(CONFIG['BASE_PATH'], healthCheckRouter);
app.use(CONFIG['BASE_PATH'], emailRouter);

// Adding 404 route
app.get('*', (req, res) => {
  res.status(404).json({ success: false, message: 'Resource not found' });
});

app.use(function(error, req, res, next) {
  console.error(error.stack);
  // error.message

  const response = {
    success: false,
    errors: error.stack
  };
  res.status(500).json(response);
});

if (require.main == module) {
  app.listen(CONFIG['PORT'], _ => {
    console.log(`[+] Service started on port: ${CONFIG['PORT']}`);
  });
}

process.on('SIGINT', function() {
  process.exit();
});

module.exports = {
  app
};
