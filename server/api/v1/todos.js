let router = require('koa-router')();

router
    .prefix('/todos')
    .post('/', create)
    .get('/:id', get)
    .get('/', query);

module.exports = router.routes();

async function create(ctx, next) {
    await next();
    
    await ctx.validation.validate('todo', ctx.request.body);

    ctx.body = await ctx.knex('todo')
        .first()
        .insert(ctx.request.body);
        
    ctx.status = 201;
}

async function get(ctx, next) {
    await next();
    
    ctx.body = await ctx.knex('todo')
        .first()
        .where(ctx.params);
    
    ctx.status = 200;
}

async function query(ctx, next) {
    await next();
    
    ctx.body = await ctx.helpers
        .applyQuery(ctx.knex('todo'), ctx.query)
        .select();
}