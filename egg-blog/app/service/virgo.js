'use strict';


module.exports = app => {
  class Virgo extends app.Service {
    * select() {
      let res;
      try {
        res = yield app.mysql.select('virgo');
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
  }
  return Virgo;
};
