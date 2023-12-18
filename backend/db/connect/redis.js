const redis = require('redis');

const client = redis.createClient({
    legacyMode: false,
    password: 'JP7vYVypzUQk1QTvgkZYBxJrd1DOwEq8',
    socket: {
        host: 'redis-16295.c267.us-east-1-4.ec2.cloud.redislabs.com',
        port: 16295,
        connectTimeout: 100000
    }
});

async function connectRedis(){
    await client.connect();
    console.log("redis is connected");
}

module.exports = {connectRedis,client};