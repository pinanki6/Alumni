var express = require('express');
var router = express.Router();
var userController = require("../controllers/userController");

/* GET users listing. */
// router.get('/register',userController.registerView);
router.post('/login',userController.login);

router.post('/alumni',userController.alumniRegister)
router.post('/student',userController.studentRegister);


module.exports = router;
