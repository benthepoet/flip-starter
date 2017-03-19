var m = require('mithril');

var Buckets = {
    list: [],
    getList: getList
};

module.exports = Buckets;

function getList() {
    return m.request({
        method: 'GET',
        url: '/v1/buckets'
    })
    .then(function(result) {
        Buckets.list = result.data
    })
}