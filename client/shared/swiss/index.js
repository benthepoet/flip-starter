var m = require('mithril');

module.exports = {
    bindValue: bindValue
};

function bindValue(target, key) {
    return m.withAttr('value', function (value) { target[key] = value; });
}
