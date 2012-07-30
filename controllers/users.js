var UsersModel = require('../models/users');

var UsersController = {

  // index method handles the GET /users route
  index: function (req, res) {
    
      UsersModel.list(function (usersList){
    	console.log(usersList);
    	res.render('users/index', {users:usersList,errors:[]});
  
  });
  
  }
  ,detail: function (req, res) {
    UsersModel.detail(req.params.id,function(err,user){
    res.render('users/detail');
   })
  }
  
  ,create:function (req, res) {
    
    var user = req.body.user;
    
    var created = UsersModel.create(user);
    
    if (created) {
      res.redirect('/users');
    }
  }
  
  ,edit:function (req, res) {}
  ,del:function (req, res) {}
  
};

// expose Users to rest of node application
module.exports = UsersController;