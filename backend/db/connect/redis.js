const redis = require('redis');

const client = redis.createClient({
    legacyMode: false,
    password: 'a9bJGInel1lSQ4vejmL7ETFFfGZ9gWgK',
    socket: {
        host: 'redis-10785.c57.us-east-1-4.ec2.cloud.redislabs.com',
        port: 10785,
        connectTimeout: 100000
    }
}); 

async function connectRedis(){
    await client.connect();
    console.log("redis is connected");
}

module.exports = {connectRedis,client};