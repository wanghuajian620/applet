'use strict';

module.exports = app => {
  class ClassifyController extends app.Controller {
    * select() {
      this.ctx.body = yield this.service.classify.select();
    }
  }
  return ClassifyController;
};
