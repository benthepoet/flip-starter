let router = require('koa-router')();

router
    .prefix('/v1')
    .use(require('./todos'));

module.exports = router.routes();
