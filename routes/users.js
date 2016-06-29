/*
@Company: Medimojo
@Author: Prashant Sudeep
*/

var express = require('express');
var router = express.Router();
var UserController = require('./../controllers/UserCtrl');

/* GET users listing. */
router.get('/', UserController.sayHi);

module.exports = router;
