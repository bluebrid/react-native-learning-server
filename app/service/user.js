'use strict';

// app/service/home.js
const Service = require('egg').Service;

class UserService extends Service {
  async findAll() {
    return await this.ctx.model.User.find();
  }
}

module.exports = UserService;
