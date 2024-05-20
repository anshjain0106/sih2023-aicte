// const express = require("express");
// const router = express.Router();
// const {connectCockroachDb,CockClient} = require("../db/connect/postgreSql")
// const generateEmbed = require("../openai/connection/connection")
// router.post('/insertInPostgre',async(req,res)=>{
//     const collegeId=parseInt(req.body.collegeId)
//     const collegeName=req.body.collegeName
//     const location=req.body.location
//     const query=collegeName+" "+location
//     const result = await generateEmbed(query);
//     const nirf=parseInt(req.body.nirf)
//     console.log(nirf)  
//     const insertQuery = 'INSERT INTO college_details1 values($1,$2,$3,$4,$5)';
//     const res1 = await CockClient.query(insertQuery,[collegeId,collegeName,location,nirf,result]);
//     const checking = await CockClient.query("Select * from college_details1");
//     // console.log(checking.rows);

//     res.status(200).json({success:true,message:"Done"});
// });


const express = require("express");
const router = express.Router();
const {connectCockroachDb,CockClient} = require("../db/connect/postgreSql")
const generateEmbed = require("../openai/connection/connection");
const { time } = require("@tensorflow/tfjs");

router.post('/insertInPostgre',async(req,res)=>{
    const college_id=parseInt(Date.now()%100000)
    const college_name=req.body.collegeName
    const college_location=req.body.location
    const college_type=req.body.type
    const query=college_name + college_location +college_type
    const nirf_ranking =req.body.nirf
    const result = await generateEmbed(query);
 

    
    const insertQuery = 'INSERT INTO collegeDetails1 values($1,$2,$3,$4,$5,$6)';
    const res1 = await CockClient.query(insertQuery,[college_id,college_name,college_location,result,nirf_ranking,college_type]);
    const checking = await CockClient.query("Select * from collegeDetails1");
    console.log(checking.rows);

    res.status(200).json({success:true,message:"Done"});
});




// router.post('/insertInPostgre', async (req, res) => {
//     try {
//         const requestBody = req.body;
//         const insertQueries = [];

//         for (const college of requestBody) {
//             const college_id = parseInt(Date.now() % 100000);
//             const college_name = college.collegeName;
//             const college_location = college.location;
//             const college_type = college.type;
//             const query = college_name + college_location + college_type;
//             const nirf_ranking = college.nirf;
//             const result = await generateEmbed(query);
            
//             const insertQuery = 'INSERT INTO collegeDetails1 values($1,$2,$3,$4,$5,$6)';
//             insertQueries.push(CockClient.query(insertQuery, [college_id, college_name, college_location, result, nirf_ranking, college_type]));
//         }

//         // Execute all insert queries concurrently
//         await Promise.all(insertQueries);

//         const checking = await CockClient.query("SELECT * FROM collegeDetails1");
//         console.log(checking.rows);

//         res.status(200).json({ success: true, message: "Done" });
//     } catch (error) {
//         console.error("Error inserting data:", error);
//         res.status(500).json({ success: false, message: "Error inserting data" });
//     }
// });



module.exports=router