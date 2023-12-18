const express = require("express");
const router = express.Router();
const college_Schema = require('../schema/college_project')
const generateEmbed = require("../openai/connection/connection")



router.post('/insertInMongo',async(req,res)=>{
    const CollegeId=req.body.collegeId
    const CollegeName=req.body.collegeName
    const ProjectId=req.body.projectId
    const projectName=req.body.projectName
    const result = await generateEmbed(projectName);
    const Undertaken = req.body.undertaken
    const user = await college_Schema.create({
        CollegeId: CollegeId,
        CollegeName:CollegeName,
        ProjectId:ProjectId,
        ProjectName:projectName,
        Undertaken:Undertaken,
        EmbeddedArray:result
    })

    res.status(200).json({success:true,message:"Done"});
})

module.exports=router;