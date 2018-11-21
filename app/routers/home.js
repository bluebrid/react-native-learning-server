'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/hot', controller.home.findHot);
  router.get('/heart', controller.home.findHeart);
};
