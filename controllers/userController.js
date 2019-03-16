"use strict"
const alumni = require("../models/alumni")
const student = require("../models/student")

exports.login=(req,res,next)=>{
  alumni.findOne({ email: req.body.email}, function (err, doc){
    console.log(doc)
  });
}

exports.alumniRegister=(req,res,next)=>{
  alumni.create(req.body,function(err,data){
    res.send(data)
  })
}

exports.studentRegister=(req,res,next)=>{
  student.create(req.body,function(err,data){
    res.send(data)
  })
}
