var User = require('../../../api/models/User');



describe('User', function(){
  describe('#signup()', function(){
    it('should check signup function', function(done){
      User.signup({name:'tile',email:'t@n.com',password: '1'}, function(){})
        .then(function(results){
          // some tests
          // console.log(results);
          done();
        })
        .catch(done);
    });
  });
});
