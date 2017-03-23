m = require('mithril')

bindValue = (target, key) ->
    m.withAttr('value', (value) -> target[key] = value)

module.exports = 
    bindValue: bindValue