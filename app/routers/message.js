'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/messages/:userId', controller.message.findByUserId);
  router.post('/message', controller.message.add);
  router.del('/messages/:id', controller.message.delete);
};
