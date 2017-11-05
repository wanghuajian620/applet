'use strict';


module.exports = app => {
  class Classify extends app.Service {
    * select(par) {
      let res;
      try {
        res = yield app.mysql.select('classify', {
          where: { type: par.type },
        });
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * get() {
      let res;
      try {
        res = yield app.mysql.select('classify');
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * update(a) {
      let res;
      try {
        res = yield app.mysql.update('classify', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
  }
  return Classify;
};
