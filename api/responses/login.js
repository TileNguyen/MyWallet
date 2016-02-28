/**


*/

module.exports = function login(inputs){
  inputs = inputs || {};

  // Get access to `req` and `res`
  var req = this.req;
  var res = this.res;

  // Look up the user
  User.attemptLogin({
    email:inputs.email,
    password: inputs.password
  }, function (err, user) {
    // body...
    console.log(user);
    if (err) return res.negotiate(err);
    if (!user){

      if (res.wantsJSON || !inputs.invalidRedirect){
        return res.badRequest('Invalid username/password combination!');
      }

      return res.redirect(inputs.invalidRedirect);
    }

    req.session.me = user.id;

    if (req.wantsJSON || !inputs.successRedirect){
      return ok();
    }

    return res.redirect(inputs.successRedirect);
  })





  // return res.ok();
}
