var router = require('koa-router')();

const TODOS = 'todos';

router.prefix(`/${TODOS}`);

router
    .delete('/:id', remove)
    .get('/', query)
    .get('/:id', get)
    .post('/', create)
    .put('/:id', update);

module.exports = router.routes();

function* create(next) {
    yield next;
    
    var ids = yield this.knex(TODOS)
        .first()
        .insert(this.request.body);
    
    this.body = yield this.knex(TODOS)
        .first()
        .where('id', ids.pop());
    
    this.status = 201;
}

function* get(next) {
    yield next;
    
    this.body = yield this.knex(TODOS)
        .first()
        .where(this.params);
    
    this.status = 200;
}

function* query(next) {
    yield next;
    
    this.body = yield this.knex(TODOS)
        .select();
    
    this.status = 200;
}

function* remove(next) {
    yield next;
    
    yield this.knex(TODOS)
        .delete()
        .where(this.params);
    
    this.status = 204;
}

function* update(next) {
    yield next;
    
    yield this.knex(TODOS)
        .update(this.request.body)
        .where(this.params);
    
    this.body = yield this.knex(TODOS)
        .first()
        .where(this.params);
    
    this.status = 200;
}
