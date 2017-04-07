var m = require('mithril');

module.exports = function (resource) {
    var Model = {
        
        draft: {},
        list: [],
        
        create: function (data) {
            var params = {
                data: data,
                method: 'POST',
                url: '/v1/' + resource
            };
                
            return m.request(params);
        },
                
        getList: function () {
            var params = {
                method: 'GET',
                url: '/v1/' + resource
            };

            var setData = function (data) {
                Model.list  = data;
            };
            
            return m.request(params)
                .then(setData);
        }
    };            
    
    return Model;
};