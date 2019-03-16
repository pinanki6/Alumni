var express = require('express');
var router = express.Router();
var alumni = require("../models/alumni");
var student = require("../models/student");
var book =  require("../models/book");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/', function(req, res, next) {

    if(req.body.whois==="alumni"){
      let email= {email:req.body.email}
      alumni.findOne(email,function(err,data){
        let email=req.body.email;
        if(data==null){
          res.send("You are not register with the system")
        }else{
          req.session.alumni_email = data.email;
          req.session.alumni_name = data.fullname;
          req.session.alumni_id = data._id;
          console.log(data)
          res.redirect("/alumni")
        }
      })
    }

    if(req.body.whois==="student"){
      let email= {email:req.body.email}
      student.findOne(email,function(err,data){
        let email=req.body.email;
        if(data==null){
          res.send("You are not register with the system")
        }else{
          req.session.student_email = data.email;
          req.session.student_name = data.fullname;
          req.session.student_id = data._id;
          console.log(data)
          res.redirect("/student")
        }

      })
    }
});


router.get('/student', function(req, res, next) {

if(req.session.student_name){

  alumni.find({},function(err,alumnis){

    book.find()

    book.find({studentName:req.session.student_name},function(err,book){
      console.log(book)
      res.render("studentDashboard",{username:req.session.student_name,data:alumnis,book:book})
    })

  })

}else{
  res.redirect("/")
}

});


router.get('/alumni', function(req, res, next) {
  if(req.session.alumni_name){

  book.find({alumni_id:req.session.alumni_id},function(err,booking){
    res.render("alumniDashboard",{book:booking,fullname:req.session.alumni_name})
  })
}else{
  res.redirect("/")
}
});




router.get('/book/:id', function(req, res, next) {

  alumni.findById(req.params.id,function(err,alumni){
  res.render("booking",{student_name:req.session.student_name,student_id:req.session.student_id,data:alumni})
  })

});



router.get('/confrim/:id', function(req, res, next) {
  book.findByIdAndUpdate(req.params.id,{ status: true },(err,data)=>{
  res.send("Confirmed")
  })
});

router.post('/book/', function(req, res, next) {
  book.create(req.body,function(err,data){
    console.log(data)
    res.send("Thank you, You will notifiy once alumni approved")
  })
});










module.exports = router;
