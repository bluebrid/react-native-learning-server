'use strict';
// {app_root}/app/model/user.js
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    userName: { type: String, required: true },
    password: { type: String, required: true },
    isMaster: { type: Boolean, default: false, required: true },
  });

  return mongoose.model('User', UserSchema);
};
