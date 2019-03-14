"use strict";

var utils = require("../utils/writer.js");
var User = require("../service/UserService");

module.exports.userLoginPOST = function userLoginPOST(req, res, next) {
  var username = req.swagger.params["username"].value;
  var password = req.swagger.params["password"].value;
  if(!req.session.loggedin) {
      req.session.loggedin = true;
  } else {
     req.session.loggedin = !req.session.loggedin;
  }
  User.userLoginPOST(username, password)
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};

module.exports.userRegisterPOST = function userRegisterPOST(req, res, next) {
  var body = req.swagger.params["body"].value;
  User.userRegisterPOST(body)
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};
