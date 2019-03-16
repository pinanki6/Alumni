"use strict"

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const studentSchema = Schema({
  fullname:String,
  email:String,
  createAt:{
    type:Date,
    default:Date.now()
  }
});

module.exports=mongoose.model("student",studentSchema)
