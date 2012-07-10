// Users is a PRIVATE variable, only available within the scope of models/users.js
var Users = [
  {
    id:1
    ,name_first:"Bill"
    ,name_last:"Smith"
    ,email:"bill@smi.th"
    ,role:"member"
    ,pass:"12345"
  }
  ,{
    id:2
    ,name_first:"Joe"
    ,name_last:"Schmoe"
    ,email:"joe@schm.oe"
    ,role:"member"
    ,pass:"12345"
  }
  ,{
    id:3
    ,name_first:"John"
    ,name_last:"Doe"
    ,email:"john@doe.com"
    ,role:"admin"
    ,pass:"12345"
  }
];


var UsersModel = {

  list:function () {
    return Users;
  }

};

// make UsersModel PUBLICLY available to other code OUTSIDE the scope of models/users.js
// by assigning to module.exports
module.exports = UsersModel;