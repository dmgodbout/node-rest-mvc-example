var UsersModel = require('../models/users');

var UsersController = {

  // index method handles the GET /users route
  index: function (req, res) {
    var usersList = UsersModel.list();
    res.render('users/index', {users:usersList});
  }
  
  ,detail: function (req, res) {
    res.render('users/detail');
  }
  
  ,create:function (req, res) {}
  ,edit:function (req, res) {}
  ,del:function (req, res) {}
  
};

// expose Users to rest of node application
module.exports = UsersController;