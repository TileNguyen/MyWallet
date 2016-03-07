
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var sails = require('sails');
var expect = chai.expect;

chai.use(chaiHttp);
var server = 'http://localhost:1337';

describe('UserController', function(){
  it('should list All users on /users GET', function(done){
    chai.request(server)
      .get('/users')
      .end(function(err, res){
        // res.should.have.status(200);
        // expect(res).to.have.status(200);
        // expect(err).to.be.null;
        // expect(res).to.be.json;
        // expect(res.status).to.equal(200);
        // if (err) return done(err);
        // sails.log(res.body[0]);
        // res.should.have.status(200);
        done();
      });
  });
  // it('should list a SINGLE user on /user/<id> GET');
  it('should add a SINGLE user on /users POST', function(done){
    chai.request(server)
      .post('/users')
      .send({'name': 'Java', 'email':'java@tile.com', 'password': 'password'})
      .end(function(err, res){
        if (err) {
          // sails.log(res.body);
          return done(err);
        }
        // res.should.have.status(200);
        // res.should.be.json;
        // // sails.log(res);
        // res.body.should.have.property('name');
        // res.body.name.should.equal('Java');
        done();
      });
  });
  // it('should update a SINGLE user on /user/<id> PUT');
  // it('should delete a SINGLE user on /user/<id> DELETE');
});
