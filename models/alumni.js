"use strict"

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const alumniSchema = Schema({
  fullname:String,
  email:String,
  timeSlot:{
    type:Array,
    default:[{
      time:"1PM-2PM",
      book:false
    },
    {
      time:"3PM-5PM",
      book:false
    },
    {
      time:"6PM-7PM",
      book:false
    }
  ]
},
  createAt:{
    type:Date,
    default:Date.now()
  }
});

module.exports=mongoose.model("alumni",alumniSchema)
