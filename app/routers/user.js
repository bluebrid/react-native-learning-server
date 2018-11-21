'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/users', controller.user.findAll);
  router.get('/user/:id', controller.user.findOne);
  router.post('/user', controller.user.add);
  router.put('/user/:id', controller.user.update);
  router.del('/user/:id', controller.user.delete);
};
