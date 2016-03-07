var User = require('../../../api/models/User');
var sails = require('sails');

describe('Model User', function(){
  it('should bcrypt password ok', function(done){
    User.beforeCreate({password: "password"}, function(err, cb){
      sails.log(err);
      if (err) {
        return done(err);
      }
      done();
    });
  });
});
