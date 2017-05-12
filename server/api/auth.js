const bcrypt = require('bcryptjs');

let router = require('koa-router')();

router
    .prefix('/auth')
    .post('/', post);

module.exports = router.routes();

async function post(ctx, next) {
    let body = ctx.request.body;
    
    ctx.status = 400;
    
    if (body.username && body.password) {
        let login = await ctx.knex('login')
            .first()
            .where('username', body.username);
            
        if (login && bcrypt.compareSync(body.password, login.hash)) {
            let user = await ctx.knex('user')
                .first()
                .where('id', login.user_id);
            
            ctx.body = {
                token: user
            };
            
            ctx.status = 200;
        }
    }
}