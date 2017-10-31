'use strict';

module.exports = app => {
  class VirgoController extends app.Controller {
    * select() {
      this.ctx.body = yield this.service.virgo.select();
    }
  }
  return VirgoController;
};
