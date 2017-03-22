m = require('mithril')

binder = (target, key) ->
    m.withAttr('value', (value) -> target[key] = value)

module.exports = 
    binder: binder