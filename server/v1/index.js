var router = require('koa-router')();

router.prefix('/v1');

router
    .use(require('./buckets'));

module.exports = router.routes();
