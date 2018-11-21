'use strict';
// app.js
module.exports = app => {
  app.beforeStart(async () => {
    if (app.config.initData) {
      const initUsers = require('./app/data/user.json');
      const ctx = app.createAnonymousContext();
      ctx.model.User.create(initUsers, err => {
        if (err) {
          app.coreLogger.console.warn('[egg-app-beforeStart] init user data fail %s', err);
          return;
        }
        app.coreLogger.console.info('[egg-app-beforeStart] init user data successfully.');
      });
    }
  });
};
