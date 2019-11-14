'use strict';

const express = require('express');

const { CONFIG } = require('../config');

const healthCheckRouter = express.Router();

healthCheckRouter.get('/health_check', (req, res) => {
  console.log('health_check');

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
