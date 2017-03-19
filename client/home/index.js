var m = require('mithril'),
    Buckets = require('./buckets');

module.exports = {
    view: view
};

function view() {
    return m('div', [
        m('h1', 'Home'),
        m('div', [
            m('button[type=button]', { onclick: Buckets.getList }, 'Load')
        ]),
        m('ul', Buckets.list.map(function (x) { return m('li', x); }))
    ]);
}