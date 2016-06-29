var express = require('express');
var router = express.Router();
var UserController = require('./../controllers/UserCtrl');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MongoConnect' });
});

router.get('/addUser', UserController.saveData);

module.exports = router;
