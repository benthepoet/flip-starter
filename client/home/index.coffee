m = require('mithril')
Buckets = require('./buckets')

renderBucket = (bucket) ->
    m('li', bucket.color)

view = ->
    m('div', [
        m('h1', 'Home')
        m('div', [
            m('button[type=button]', { onclick: Buckets.getList }, 'Load')
        ])
        m('ul', Buckets.list.map(renderBucket))
    ])

module.exports =
    view: view