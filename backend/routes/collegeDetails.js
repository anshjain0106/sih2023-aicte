const express = require("express");
const router = express.Router();
const { Client } = require('pg');
const generateEmbed = require('../openai/connection/connection');
const math = require('mathjs');
const tf = require('@tensorflow/tfjs');
const { client, connectRedis } = require('../db/connect/redis');
const college_Schema = require('../schema/college_project')
// const client = require("../db/schema/clientSchema");

const { connectCockroachDb, CockClient } = require('../db/connect/postgreSql');


// router.post("/searchcollege1",async (req,res)=>{
//     console.log("in searchcollege1 found on redis ....")

//     const college="University of Example";
//     console.log(college);
//     const id=1;
//     const details = null;
//     // const details=await client.get(college)
//     if (details == null) {
//         console.log("cockroach db  pe gaya")
//         const selectQuery = 'SELECT * FROM colleges where collegename=$1'
//         const result=await CockClient.query(selectQuery,[college])

//         await Client.set(college,JSON.stringify(result.rows[0]))
//         console.log(result.rows[0])
//     }
//     res.status(200).json({success:true,details:details})
//   }) 


// router.post("/searchcollege",async (req,res)=>{
//   const college= req.body.college;
//   var r = await generateEmbed(college);
//   console.log(typeof(r[0]));
//   const selectQuery = 'SELECT * FROM college_details1 ORDER BY ST_DISTANCE(embedding_vector, $1) ASC LIMIT 1';
//   const result=await CockClient.query(selectQuery,[r]);
//   console.log(result.rows);
//   res.status(200).json({success:true,details:result});
// })

//Function to calculate cosineSimilarity
async function cosineSimilarity(embedding1, embedding2) {
  const tensor1 = tf.tensor(embedding1);
  const tensor2 = tf.tensor(embedding2);

  const dotProduct = tf.dot(tensor1, tensor2);
  const normTensor1 = tf.norm(tensor1);
  const normTensor2 = tf.norm(tensor2);

  const similarityScore = dotProduct.div(normTensor1.mul(normTensor2)).dataSync()[0];

  tensor1.dispose();
  tensor2.dispose();

  return similarityScore;
}

router.post("/searchcollege", async (req, res) => {

  //First searching in REDIS
  var collegeName = req.body.searchTerm;

  console.log(req.body.searchTerm)
  collegeName += '*';
  let result = await client.ft.search(
    'idx:colleges',
    `${collegeName}`
  );
  var cacheRes = JSON.stringify(result, null, 2);
  cacheRes = JSON.parse(cacheRes);

  var countElements = cacheRes.total;
  if (countElements == 0) {

    //Searching In Cockroach DB
    const selectQuery = 'SELECT * FROM college_details1'
    const result = await CockClient.query(selectQuery);
    var queryEmbed = await generateEmbed(collegeName);

    const newdata = [];

    for (var i = 0; i < result.rows.length; i++) {

      const similarityScore = await cosineSimilarity((queryEmbed), (result.rows[i].embedding_vector));
      const data = {
        item: result.rows[i],
        similarityScore: similarityScore
      }
      newdata.push(data);

    }

    const ranked = newdata.sort(
      (a, b) => b.similarityScore - a.similarityScore
    );

    // console.log(ranked);
    var output1 = ranked[0].item;
    var output2 = ranked[1].item;

    var idx1 = parseInt(output1.college_id);
    var idx2 = parseInt(output2.college_id);
    await Promise.all([
      client.json.set(`clg:${idx1}`, '$', {
          "name": `${output1.college_name}`,
          "city": output1.college_location
      }),
      client.json.set(`clg:${idx2}`, '$', {
        "name": `${output2.college_name}`,
        "city": output2.college_location
      })
    ]);
    res.status(200).json({ success: true, data: cacheRes,msg:"value set in reddis" });
  }
  else {

    res.status(200).json({ success: true, data: cacheRes });

  }

})

router.post("/searchProject",async(req,res)=>{
  //First searching in REDIS
  console.log(projectname);
  var projectname = req.body.projectname;
  projectname += '*';
  let result = await client.ft.search(
    'idx:project',
    `${projectname}`
  );
  var cacheRes = JSON.stringify(result, null, 2);
  cacheRes = JSON.parse(cacheRes);
  var countElements = cacheRes.total;
  if(countElements==0){
    var queryEmbed = await generateEmbed(projectname);
    const r=await college_Schema.find()
    // console.log(r)
    const newdata = [];

    for (var i = 0; i < r.length; i++) {

      const similarityScore = await cosineSimilarity((queryEmbed), (r[i].EmbeddedArray));
      const data = {
        item: r[i],
        similarityScore: similarityScore
      }
      newdata.push(data);

    }

    const ranked = newdata.sort(
      (a, b) => b.similarityScore - a.similarityScore
    );
    
    var output1 = ranked[0].item;
    var output2 = ranked[1].item;

    var idx1 = parseInt(output1.ProjectId);
    var idx2 = parseInt(output2.ProjectId);
    await Promise.all([
      client.json.set(`prj:${idx1}`, '$', {
          "projectname": `${output1.ProjectName}`,
          "collegename": output1.CollegeName,
          "undertaken":output1.Undertaken
      }),
      client.json.set(`prj:${idx2}`, '$', {
        "projectname": `${output2.ProjectName}`,
        "collegename": output2.CollegeName,
        "undertaken":output2.Undertaken
      })
    ]);
    res.status(200).json({ success: true, data: "Value set in REDIS" });
  }
  else {

    res.status(200).json({ success: true, data: cacheRes });

  }
})
module.exports = router;