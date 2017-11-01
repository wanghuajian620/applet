'use strict';

const knex = require('knex')({
  client: 'mysql',
});


module.exports = app => {
  app.beforeStart(function* () {
    // const ctx = app.createAnonymousContext();
    const hasUser = yield app.mysql.query(knex.schema.hasTable('virgo').toString());
    if (hasUser.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('virgo', function(table) {
        table.increments();
        table.string('image').notNullable().defaultTo('');
        table.string('title').notNullable().defaultTo('');
        // table.integer('votetimes').notNullable().defaultTo(0);
        table.text('essay').notNullable().defaultTo('');
        table.timestamp('created').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(userSchema.toString());
      // yield ctx.helper.member(app, 'user', 'mobile');
      // yield ctx.helper.member(app, 'user', 'wechat');
    }
    const hasClassify = yield app.mysql.query(knex.schema.hasTable('classify').toString());
    if (hasClassify.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('classify', function(table) {
        table.increments();
        table.string('type').notNullable().defaultTo('');
        table.string('title').notNullable().defaultTo('');
        table.text('content').notNullable().defaultTo('');
        // table.string('ES6').notNullable().defaultTo('');
        // table.string('css').notNullable().defaultTo('');
        // table.timestamp('created').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(userSchema.toString());
    }
  });
};
