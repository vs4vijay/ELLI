'use strict';

require('dotenv').config();

const config = {
  // Application configuration
  PORT:       process.env.PORT || 9099,
  BASE_PATH:  '/api/v1',
  TIMESTAMP:  new Date().toTimeString(),
  EMAILS:       process.env.EMAILS && process.env.EMAILS.split(","),

  // Kafka configuration
  KAFKA: {
    CLIENT_ID:  process.env.KAFKA_CLIENT_ID || 'default',
    GROUP_ID:   process.env.KAFKA_GROUP_ID || 'email-service',
    BROKERS:    process.env.KAFKA_BROKERS && process.env.KAFKA_BROKERS.split(","), // As brokers are expected in array
    USERNAME:   process.env.KAFKA_USERNAME,
    PASSWORD:   process.env.KAFKA_PASSWORD,
    TOPIC:      process.env.KAFKA_TOPIC,
  },

  // Email related configuration
  EMAIL: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    FROM_EMAIL:       process.env.FROM_EMAIL,
    TEMPLATE_ID:      process.env.EMAIL_TEMPLATE_ID,
    APP_URL:          process.env.APP_URL,
    SENDER_NAME:      process.env.SENDER_NAME
  }
};


module.exports = config;
