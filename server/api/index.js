let router = require('koa-router')();

router
    .prefix('/api')
    .use(require('./auth'))
    .use(require('./signup'))
    .use(require('./v1'));
    
module.exports = router.routes();