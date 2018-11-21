'use strict';
const userRouter = require('./routers/user');
const messageRouter = require('./routers/message');
const homeRouter = require('./routers/home');
const searchRouter = require('./routers/search');
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  userRouter(app);
  messageRouter(app);
  homeRouter(app);
  searchRouter(app);
};
