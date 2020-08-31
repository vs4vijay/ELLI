'use strict';

const logger = require('pino')();

const { Kafka } = require('kafkajs');

const config = require('../config');

class KafkaService {

    constructor() {
        const options = {
            clientId: config.KAFKA.CLIENT_ID,
            brokers: config.KAFKA.BROKERS,
            // ssl: { 
            //     rejectUnauthorized: false 
            // },
            // sasl: {
            //     mechanism: 'scram-sha-256', // scram-sha-256 or scram-sha-512
            //     username: config.KAFKA.USERNAME,
            //     password: config.KAFKA.PASSWORD
            // }
        };
        this.kafka = new Kafka(options);
    }

    // Consumer: Starts the Kafka Consumer, and takes process callback function
    async startConsumer(procces) {
        const consumer = this.kafka.consumer({ groupId: config.KAFKA.GROUP_ID });
        await consumer.connect();
      
        await consumer.subscribe({ topic: config.KAFKA.TOPIC });
      
        logger.info('Listening for Messages');
      
        await consumer.run({ eachMessage: procces });
      
        return consumer;
    }

    // Producer: sends message to the topic
    async sendMessage(topic, message) {
        const producer = this.kafka.producer();
        await producer.connect();
      
        await producer.send({
            topic: topic,
            messages: [
                { value: JSON.stringify(message) },
            ],
        });
      
        logger.info('Message Sent');
      
        await producer.disconnect();
      
        return producer;
    };

}

module.exports = {
    KafkaService
};