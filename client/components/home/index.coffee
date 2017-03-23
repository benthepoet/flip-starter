m = require('mithril')
api = require('shared/api')
swiss = require('shared/swiss')

Todos = api('todos')

createTodo = ->
    Todos
        .create(Todos.draft)
        .then(Todos.getList)

renderTodo = (todo) ->
    m('li', todo.body)

view = ->
    m('div', [
        m('h1', 'Home')
        m('div', [
            m('form.pure-form', [
                m('input', { oninput: swiss.bindValue(Todos.draft, 'body'), value: Todos.draft.body })
                m('button.pure-button', { onclick: createTodo, type: 'button' }, 'Add')
            ])
        ])
        m('ul', Todos.list.map(renderTodo))
    ])

module.exports =
    oninit: Todos.getList
    view: view