'use strict';

module.exports = app => {
  class ClassifyController extends app.Controller {
    * select() {
      console.log(this.ctx.request.body);
      this.ctx.body = yield this.service.classify.select(this.ctx.request.body);
    }
    * get() {
      console.log(this.ctx.request.body);
      this.ctx.body = yield this.service.classify.get(this.ctx.request.body);
    }
  }
  return ClassifyController;
};
