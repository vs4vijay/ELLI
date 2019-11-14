'use strict';

const { emailRouter } = require('./email.controller');
const { healthCheckRouter } = require('./health-check.controller');

module.exports = {
  emailRouter,
  healthCheckRouter
};
