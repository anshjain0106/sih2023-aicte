const express = require("express");
const router = express.Router();
const {connectCockroachDb,CockClient} = require("../db/connect/postgreSql")
const generateEmbed = require("../openai/connection/connection")
router.post('/insertInPostgre',async(req,res)=>{
    const collegeId=parseInt(req.body.collegeId)
    const collegeName=req.body.collegeName
    const location=req.body.location
    const query=collegeName+" "+location
    const result = await generateEmbed(query);
    const nirf=parseInt(req.body.nirf)
    console.log(nirf)  
    const insertQuery = 'INSERT INTO college_details1 values($1,$2,$3,$4,$5)';
    const res1 = await CockClient.query(insertQuery,[collegeId,collegeName,location,nirf,result]);
    const checking = await CockClient.query("Select * from college_details1");
    // console.log(checking.rows);

    res.status(200).json({success:true,message:"Done"});
});








module.exports=router