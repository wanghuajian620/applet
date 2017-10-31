'use strict';

module.exports = appInfo => {
  const config = exports = {};
  exports.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '127.0.0.1',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '111111',
      // 数据库名
      database: 'virgo',
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1509435019629_8377';

  // add your config here
  config.middleware = [];
  config.security = {
    csrf: {
      ignoreJSON: true,
    },
  };

  return config;
};
