'use strict';

const express = require('express');
const logger = require('pino')();

const config = require('../config');

const healthCheckRouter = express.Router();

healthCheckRouter.get('/healthz', (req, res) => {
  logger.info('healthcheck');

  const response = {
    success: true,
    health_check: true,
    timestamp: config['TIMESTAMP']
  };
  res.json(response);
});

module.exports = {
  healthCheckRouter
};
