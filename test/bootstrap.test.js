var sails = require('sails');

before(function(done) {

  // Increase the Mocha timeout so that Sails has enough time to lift.
  this.timeout(5000);

  sails.lift({
    // configuration for testing purposes
    // console.log("-----Configuration for testing");
  }, function(err, server) {
    if (err) return done(err);
    // here you can load fixtures, etc.
    // console.log("------Load fixtures");
    done(err, sails);
  });
});

after(function(done) {
  // here you can clear fixtures, etc.
  sails.lower(done);
});
