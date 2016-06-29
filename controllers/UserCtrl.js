/*
@Company: Medimojo
@Author: Prashant Sudeep
*/

var UserModel = require('./../models/UsersUtils');
var MongooseModel = require('./../models/MongooseConnect');

exports.sayHi = function(req, res, next) {
    res.send('Howdy from User Controller!');
};

exports.randomCheck = function(req, res, next) {
    var uid = req.params.uid;
    if(uid) {
        // use a model to see how it works.
        UserModel.isUserActive(req.query.uid, function(err, isActive) {
            if(err) {
                res.status(500).json({err: true, msg: "DB Error!"});
            }
            else {
                if(isActive === true)
                    res.json({err: false, msg: "Yay! User is active!"});
                else
                    res.json({err: false, msg: "Sorry! User is not active!"});
            }
        })
    }
    else {
        res.status(400).json({err: true, msg: "User id missing from url."});
    }
};

exports.saveData = function(req, res, next){
    var name = req.query.name;
    var email = req.query.email;
    var mobile = req.query.mobile;
    if(name=="" || email=="" || mobile==""){
        res.status(400).json({err: true, msg: "missing name, email & mobile in query string"});
    }else{
        var data = {"name": name, "email": email, "mobile": mobile};
        MongooseModel.InsertSingle(data, function(err,results){
            if(err){
                res.status(400).json({err: true, msg: err});
            }else{
                res.status(200).json({err: false, msg: "Data Saved ! "});
            }
        })
    }

}