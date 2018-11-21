'use strict';

module.exports = appInfo => {
  const config = exports = {};
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1541735701381_1116';
  // add your config here
  config.middleware = [];
  // config.initData = false;
  config.cluster = {
    listen: {
      path: '',
      port: 7001,
      hostname: '',
    },
  };
  config.mongoose = {
    client: {
      url: 'mongodb://localhost:27017/react-native-demo',
      options: {},
    },
  };
  return config;
};
