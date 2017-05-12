const bcrypt = require('bcryptjs');

let router = require('koa-router')();

router
    .prefix('/signup')
    .post('/', post);

module.exports = router.routes();

async function post(ctx, next) {
    let body = ctx.request.body;
    
    ctx.status = 400;
    
    if (body.email && body.username && body.password) {
        let ids = await ctx.knex('user')
            .first()
            .insert({
                email: body.email
            });
            
        let user = await ctx.knex('user')
            .first()
            .where('id', ids.pop());
            
        let login = await ctx.knex('login')
            .first()
            .insert({
                username: body.username,
                hash: bcrypt.hashSync(body.password, 8),
                user_id: user.id
            });
            
        ctx.body = {
            token: user
        };
        
        ctx.status = 200;
    }
}