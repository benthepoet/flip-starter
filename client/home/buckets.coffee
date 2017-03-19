m = require('mithril')

Buckets = 
    list: []
    
    getList: ->
        params = 
            method: 'GET'
            url: '/v1/buckets'
            
        setData = (data) ->
            Buckets.list  = data
        
        m.request params
            .then setData

module.exports = Buckets