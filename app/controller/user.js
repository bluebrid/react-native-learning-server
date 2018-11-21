'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async findAll() {
    this.ctx.body = await this.service.user.findAll();
    // this.ctx.body = yield this.ctx.model.User.find()
  }
  async findOne() {
    this.ctx.body = this.ctx.request.url;
  }
  async add() {
    this.ctx.body = this.ctx.request.url;
  }
  async update() {
    this.ctx.body = this.ctx.request.url;
  }
  async delete() {
    this.ctx.body = this.ctx.request.url;
  }
}

module.exports = UserController;
