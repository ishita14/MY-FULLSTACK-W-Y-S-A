const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types 

    const sleepCycleSchema = new mongoose.Schema(
        {
            userID: { type: ObjectId,
                ref:"User" 
                },
            sleepGoal :{
                type:String,
                required:true
            },
             sleepStruggle :{
                type:String,
                required:true
             },
            bedTime :{
                type:String,
                required:true
             },
            wakeupTime :{
                type:String,
                required:true
             },
            sleepDuration: { 
                type: Number,
                 min: 0,
                 max: 24 },   
           
             } );

 mongoose.model("sleepCycle", sleepCycleSchema)
