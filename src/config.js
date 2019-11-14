'use strict';

require('dotenv').config();

const CONFIG = {
  PORT: process.env.PORT || 3333,
  BASE_PATH: '/api/v1',
  TIMESTAMP: new Date().toTimeString()
};

const EMAIL_CONFIG = {
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  NO_REPLY_EMAIL: process.env.NO_REPLY_EMAIL,
  TEMPLATES: {
    SALE_SUMMARY: process.env.TEMPLATE_SALE_SUMMARY
  },
  APP_URL: process.env.APP_URL,
  SENDER_NAME: process.env.SENDER_NAME
};

module.exports = {
  CONFIG,
  EMAIL_CONFIG
};
