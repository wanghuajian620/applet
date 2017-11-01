'use strict';

module.exports = app => {
  app.post('/virgo', 'virgo.select');
  app.get('/classify', 'classify.select');
};
