const redis = require('redis');

const client = redis.createClient({
    legacyMode: false,
    password: 'kvzNQN6rL6Mnp1sr7VIjK59zwKbwy4Rx',
    socket: {
        host: 'redis-13487.c11.us-east-1-2.ec2.redns.redis-cloud.com',
        port: 13487,
        connectTimeout: 100000
    }
}); 

async function connectRedis(){
    await client.connect();
    console.log("redis is connected");
}

module.exports = {connectRedis,client};