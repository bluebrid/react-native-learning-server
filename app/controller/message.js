'use strict';

const Controller = require('egg').Controller;

class MessageController extends Controller {
  async findByUserId() {
    this.ctx.body = this.ctx.request.url;
  }
  async add() {
    this.ctx.body = this.ctx.request.url;
  }
  async delete() {
    this.ctx.body = this.ctx.request.url;
  }
}

module.exports = MessageController;
