const express = require('express');
const app = express();
const connectDb = require('./db/connect/mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const {connectCockroachDb,CockClient} = require("./db/connect/postgreSql")
const fs = require('fs');
const generateEmbed = require("./openai/connection/connection")
const {AggregateSteps, AggregateGroupByReducers, createClient, SchemaFieldTypes} = require('redis');
const {client,connectRedis} = require('./db/connect/redis');


//connecting to db
connectDb();

//connnect cock db
connectCockroachDb();

//connect to redis
// connectRedis();

//openai connection
// console.log(result);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/college',require('./routes/collegeDetails'));
app.use('/api/redis',require('./routes/redisFunctionality'));
app.use('/api/mongoDb',require('./routes/mongoFunctionality'));
app.use('/api/postGre',require('./routes/postgreSqlFunctionality'))
// app.use('/api/research',require('./routes/ResearchDetails'));

 
app.listen(4000,()=>{
    // console.log(API_KEY);
    console.log("Listening at port 4000");
});