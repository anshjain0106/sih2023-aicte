const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    CollegeId:{
        type: Number
    },
    CollegeName:{
        type:String,
    },
    ProjectId:{
        type: Number
    },
    ProjectName:{
        type:String
    },
    Undertaken:{
        type:String
    },
    EmbeddedArray:{
        type:Array
    }
});

module.exports = mongoose.model('project',projectSchema);