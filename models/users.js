// Users is a PRIVATE variable, only available within the scope of models/users.js
/*var Users = [
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
*/

var mongo = require ('mongodb') 
	,Db = mongo.Db
	,Connection = mongo.Connection
	,Server = mongo.Server;

var db = new Db('test', new Server("127.0.0.1", Connection.DEFAULT_PORT, {})) ;

var hash = function (string) {
  var crypto=require('crypto');
  var sha = crypto.createHash('sha1');
  sha.update(string);
  var hash = sha.digest('hex');
  return hash;
};

var UsersModel = {

  list:function (callback) {
    
    db.open(function(err,db){
    
    	db.collection('users', function(err, collection){
    
    		collection.find().toArray(function(err, results) {
    			
    			db.close();
    			callback(results);
    
    	});
    
    });  //collection
  
  }); // db.
}, //list()

  detail:function (callback) {
    
    db.open(function(err,db){
    
    	db.collection(':id', function(err, collection){
    
    		collection.find().toArray(function(err, results) {
    			
    			db.close();
    			callback(results);
    
    	});
    
    });  //collection
  
  }); // db.
}, //list()
  
  create:function (data) {
  
    data.pass = hash(data.pass);
    
    if (data.email){
      Users.push(data);
      return true;
    }
    
    return false;
    
  }
};

// make UsersModel PUBLICLY available to other code OUTSIDE the scope of models/users.js
// by assigning to module.exports
module.exports = UsersModel;