'use strict';

module.exports = app => {
  app.post('/virgo', 'virgo.select');
  app.post('/classify', 'classify.select');
  app.post('/classify/get', 'classify.get');
  app.post('/classify/update', 'classify.update');
};
