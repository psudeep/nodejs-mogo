/*
@Company: Medimojo
@Author: Prashant Sudeep
*/

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_database');

exports.InsertSingle = function(data, cb){
	var User = mongoose.model('User', { name: String, email: String, mobile: Number });

	var name = data.name;
	var email = data.email;
	var mobile = data.mobile;

	var users = new User({ name: name, email: email, mobile: mobile });
	users.save(function (err) {
	  if (err) {
	    console.log(err);
	    cb(err, null);
	  } else {
	    console.log('Data Saved');
	    cb(null, {"success": true, "code": 200, "message": "Data Saved"});
	  }
	});
}