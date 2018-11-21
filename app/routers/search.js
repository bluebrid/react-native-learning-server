'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/search/:keyword', controller.search.find);
};
