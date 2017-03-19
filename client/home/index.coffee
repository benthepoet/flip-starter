m = require('mithril')
api = require('../api')

Todos = api('todos')

newTodo = {}

createTodo = ->
    Todos.create()

oninit = ->
    Todos.getList()

renderTodo = (todo) ->
    m('li', todo.body)

view = ->
    m('div', [
        m('h1', 'Home')
        m('div', [
            m('form.pure-form', [
                m('input'),
                m('button.pure-button', { onclick: createTodo, type: 'button' }, 'Add')
            ])
        ])
        m('ul', Todos.list.map(renderTodo))
    ])

module.exports =
    oninit: oninit
    view: view