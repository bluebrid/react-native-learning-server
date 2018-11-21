'use strict';

const Service = require('egg').Service;

class SearchService extends Service {
  async find() {
    // const user = await this.ctx.db.query('select * from user where uid = ?', uid);
    const user = [
      {
        name: 'Ivan Fan',
        age: 18,
      },
    ];
    return user;
  }
}

module.exports = SearchService;
