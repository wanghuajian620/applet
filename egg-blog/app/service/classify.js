'use strict';


module.exports = app => {
  class Classify extends app.Service {
    * select() {
      let res;
      try {
        res = yield app.mysql.select('classify');
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
  }
  return Classify;
};
