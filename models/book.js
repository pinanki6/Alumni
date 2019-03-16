"use strict"
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = Schema({
  alumni_id:Schema.Types.ObjectId,
  student_id:Schema.Types.ObjectId,
  timeslot:String,
  date:String,
  studentName:String,
  createAt:{
    type:Date,
    default:Date.now()
  },
  status:{
    type:Boolean,
    default:false
  }
})


module.exports=mongoose.model("book",bookingSchema)
