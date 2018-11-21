'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = this.service.home.index();
  }
  async findHot() {
    this.ctx.body = this.service.home.findHot();
  }
  async findHeart() {
    this.ctx.body = this.service.home.findHeart();
  }
}

module.exports = HomeController;
