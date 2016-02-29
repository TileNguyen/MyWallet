/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var bcrypt = require('bycript');


module.exports = {
  schema: true,
  tableName: "users",
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    id: {
      type: 'integer',
      unique: true,
      primaryKey: true,
      columnName: 'id',
      required: true
    },
    name: {
      type: 'string'
    },
    email: {
      type: 'email',
      unique: true
      required: true
    },
    password: {
      type: 'string',
      required: true,
      minLength: 6
    },
    toJSON: function(){
      var obj = this.toObject();
      delete obj.password;
      delete obj.createdAt;
      delete obj.updateAt;
      return obj;
    }

    // login : { type: 'string' },
    //
    // logout : { type: 'string' },
    //
    // signup : { type: 'string' }
  },
  // lifecycle callback
  beforeCreate: function(values, cb){
    // Encript password
    bycript.hash(values.password, 10, function(err, hash){
      if (err) return cb(err);
      values.password = hash;
      // callback and return hash
      cb();
    })
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
