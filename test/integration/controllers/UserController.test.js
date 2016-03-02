var request = require('supertest'),
    assert = require('assert'),
    controller = require('../../../api/controllers/UserController');
// require('sails');

describe('UserController', function(){
  describe('#login()', function(){
    it('should redirect to /', function(done){
      request('http://localhost:1337/')
        .post('/login')
        .send({email: 'test@gmail.com', password: 'password'})
        // .expect(302)
        .expect('location', '/', done);
    });
  });
});
