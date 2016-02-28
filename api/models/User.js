/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    email: {
      type: 'email',
      required: true
    },
    password: {
      type: 'string',
      required: true
    }

    // login : { type: 'string' },
    //
    // logout : { type: 'string' },
    //
    // signup : { type: 'string' }
  },
  signup: function (inputs, cb){
    // Create a user
    User.create({
      name: inputs.name,
      email: inputs.email,
      password: inputs.password
    }).exec(cb);
  },
// Check login
  attemptLogin: function(inputs, cb){
    User.findOne({
      email: inputs.email,
      password: inputs.password
    }).exec(cb);
  }
};
