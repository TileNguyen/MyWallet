/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



  /**
   * `UserController.login()`
   */
  // login: function (req, res) {
  //   // See 'api/responses/login.js'
  //   return res.login({
  //     email: req.param('email'),
  //     password: req.param('password'),
  //     successRedirect: '/',
  //     invalidRedirect: '/login'
  //   });
  // },
  //
  //
  // /**
  //  * `UserController.logout()`
  //  */
  // logout: function (req, res) {
  //
  //   req.session.me = null;
  //
  //   if (req.wantsJSON){
  //     return res.ok('Logged out successfully!');
  //   }
  //
  //   return res.redirect('/');
  // },
  //
  //
  // /**
  //  * `UserController.signup()`
  //  */
  // signup: function (req, res) {
	// 	// signup
	// 	User.signup({
	// 		name: req.param('name'),
	// 		email: req.param('email'),
	// 		password: req.param('password')
	// 	}, function(err, user){
	// 		if (err) return res.negotiate(err);
  //
	// 		req.session.me = user.id;
  //
	// 		if (req.wantsJSON){
	// 			return res.ok('Signup successful!');
	// 		}
  //
  //
	// 		return res.redirect('/welcome');
  //
	// 		// return res.json({
	// 		// 	todo: 'signup() is not implemented yet!'
	// 		// });
	// 	});
  // }

  findAllUsers: function(req, res){
    User.find({}, function(err, users){
      if(err){
        return res.json({'ERROR': err});
      }
      else {
        return res.json(users);
      }
    });
  },
  findUserById: function(req, res){
    var param = req.allParams();
    if (!param.id) return res.badRequest();
    User.native(function(err, collection){
      if(err){
        return res.badRequest();
      }
      else {
        collection.find({name: param.id},{}).toArray(function(err, user){
          if(err){
            return res.badRequest();
          }
          return res.ok(user);
        });
      }
    });

  },
  // Add user.
  addUser: function(req, res){
    var values = req.allParams();
    if(!values) return res.badRequest(values);
    User.create({
      name: values.name,
      email: values.email,
      password: values.password
    },
    function(err, user){
      if (err) return res.badRequest({error: err.code, message: "What's it?"});
      return res.ok(user);
    });
  },
  updateUser: function(req, res){
    var param = req.allParams();
    if (!param.id) return res.badRequest();
    User.native(function(err, collection){
      if (err) return res.badRequest();
      collection.findOneAndUpdate({name: param.id}, {$set: {email: param.email}}, function(err, user){
        if (err) return res.badRequest();
        return res.ok(user.value);
      });
    });
  },
  deleteUser: function(req, res){
    var param = req.allParams();
    if (!param.id) return res.badRequest();
    User.native(function(err, collection){
      if (err) return res.badRequest();
      collection.deleteOne({name: param.id},{}, function(err, user){
        if (err) return res.badRequest();
        return res.ok(user.value);
      });
    });
  }





};
