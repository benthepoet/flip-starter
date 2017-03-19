var router = require('koa-router')();

router.prefix('/v1');

router
    .use(require('./todos'));

module.exports = router.routes();
