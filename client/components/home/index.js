var m = require('mithril'),
    api = require('shared/api'),
    swiss = require('shared/swiss');

var Todos = api('todos');

module.exports = {
    oninit: Todos.getList,
    view: view
};

function createTodo() {
    Todos
        .create(Todos.draft)
        .then(Todos.getList);
}

function renderTodo(todo) {
    return m('li', todo.body);
}

function view() {
    return m('div.flex.three', [
        m('div'),
        m('div', [
            m('h1', 'Home'),
            m('div', [
                m('form', [
                    m('input.stack', { oninput: swiss.bindValue(Todos.draft, 'body'), value: Todos.draft.body }),
                    m('button.stack', { onclick: createTodo, type: 'button' }, 'Add')
                ])
            ]),
            m('ul', Todos.list.map(renderTodo))
        ]),
        m('div')
    ]);
}