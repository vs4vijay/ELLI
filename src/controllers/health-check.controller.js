'use strict';

const express = require('express');

const { CONFIG } = require('../config');

const healthCheckRouter = express.Router();

healthCheckRouter.get('/healthz', (req, res) => {
  console.log('healthcheck');

  const response = {
    success: true,
    health_check: true,
    timestamp: CONFIG['TIMESTAMP']
  };
  res.json(response);
});

module.exports = {
  healthCheckRouter
};
