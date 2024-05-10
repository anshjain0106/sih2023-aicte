const express = require("express");
const router = express.Router();
const {AggregateSteps, AggregateGroupByReducers, createClient, SchemaFieldTypes} = require('redis');
const {client,connectRedis} = require('../db/connect/redis');



router.post('/insertIntoRedis',async(req,res)=>{
    /****college,colleges,users are already formed not visible redis insight********/
    try {
        await client.ft.create('idx:project', {
            '$.projectname': {
                type: SchemaFieldTypes.TEXT,
                SORTABLE: true
            },
            '$.collegename': {
                type: SchemaFieldTypes.TEXT,
                AS: 'collegename'
            },
            '$.undertaken': {
                type: SchemaFieldTypes.TEXT,
                AS: 'undertaken'
            },
            
        }, {
            ON: 'JSON',
            PREFIX: 'prj:'
        });
    } catch (e) {
        if (e.message === 'Index already exists') {
            res.status(200).json({message:"Index exists already, skipped creation."});
        } else {
            // Something went wrong, perhaps RediSearch isn't installed...
            res.status(200).json({message:e});
            // console.error(e);
            process.exit(1);
        }
    }

    // await Promise.all([
    //     client.json.set('clg:1', '$', {
    //         "name": "Ramaiah Institute Of Technology",
    //         "city": "Bangalore"
    //     }),
    //     client.json.set('clg:2', '$', {
    //         "name": "BMS College Of Engineering",
    //         "city": "Delhi"
    //     }),
    //     client.json.set('clg:3', '$', {
    //         "name": "RV College Of Engineering",
    //         "city": "Bangalore"
    //     }),
    // ]);
});




router.post('/insertIntoRedis1',async(req,res)=>{
    /****college,colleges,users are already formed not visible redis insight********/
    try {
        await client.ft.create('idx:colleges', {
            '$.name': {
                type: SchemaFieldTypes.TEXT,
                SORTABLE: true
            },
            '$.city': {
                type: SchemaFieldTypes.TEXT,
                AS: 'collegename'
            },

            
        }, {
            ON: 'JSON',
            PREFIX: 'clg:'
        });
    } catch (e) {
        if (e.message === 'Index already exists') {
            res.status(200).json({message:"Index exists already, skipped creation."});
        } else {
            // Something went wrong, perhaps RediSearch isn't installed...
            res.status(200).json({message:e});
            // console.error(e);
            process.exit(1);
        }
    }

    // await Promise.all([
    //     client.json.set('clg:1', '$', {
    //         "name": "Ramaiah Institute Of Technology",
    //         "city": "Bangalore"
    //     }),
    //     client.json.set('clg:2', '$', {
    //         "name": "BMS College Of Engineering",
    //         "city": "Delhi"
    //     }),
    //     client.json.set('clg:3', '$', {
    //         "name": "RV College Of Engineering",
    //         "city": "Bangalore"
    //     }),
    // ]);
});













router.post('/searchInRedis',async(req,res)=>{

    var collegeName = req.body.collegeName;
    collegeName+='*';
    let result = await client.ft.search(
        'idx:colleges',
        `${collegeName}`
    );
    var cacheRes = JSON.stringify(result,null,2);
    cacheRes = JSON.parse(cacheRes);

    res.status(200).json({success:true,data:cacheRes.documents});
    // console.log(cacheRes.documents);
});

module.exports=router