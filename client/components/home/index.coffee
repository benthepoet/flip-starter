m = require('mithril')
api = require('shared/api')

Todos = api('todos')

newTodo = {}

dataBind = (target, key) ->
    m.withAttr('value', (value) ->
        target[key] = value
    )

createTodo = ->
    Todos
        .create(newTodo)
        .then(Todos.getList)

oninit = ->
    Todos.getList()

renderTodo = (todo) ->
    m('li', todo.body)

view = ->
    m('div', [
        m('h1', 'Home')
        m('div', [
            m('form.pure-form', [
                m('input', { oninput: dataBind(newTodo, 'body') }),
                m('button.pure-button', { onclick: createTodo, type: 'button' }, 'Add')
            ])
        ])
        m('ul', Todos.list.map(renderTodo))
    ])

module.exports =
    oninit: oninit
    view: view