var router = require('koa-router')();

const BUCKETS = 'buckets';

router.prefix(`/${BUCKETS}`);

router
    .delete('/:id', remove)
    .get('/', query)
    .get('/:id', get)
    .post('/', create)
    .put('/:id', update);

module.exports = router.routes();

function* create(next) {
    yield next;
    
    var ids = yield this.knex(BUCKETS)
        .first()
        .insert(this.request.body);
    
    this.body = yield this.knex(BUCKETS)
        .first()
        .where('id', ids.pop());
    
    this.status = 201;
}

function* get(next) {
    yield next;
    
    this.body = yield this.knex(BUCKETS)
        .first()
        .where(this.params);
    
    this.status = 200;
}

function* query(next) {
    yield next;
    
    this.body = yield this.knex(BUCKETS)
        .select();
    
    this.status = 200;
}

function* remove(next) {
    yield next;
    
    yield this.knex(BUCKETS)
        .delete()
        .where(this.params);
    
    this.status = 204;
}

function* update(next) {
    yield next;
    
    yield this.knex(BUCKETS)
        .update(this.request.body)
        .where(this.params);
    
    this.body = yield this.knex(BUCKETS)
        .first()
        .where(this.params);
    
    this.status = 200;
}
