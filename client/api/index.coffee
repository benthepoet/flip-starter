m = require('mithril')

module.exports = (resource) ->
    Model = 
        list: []
        getList: ->
            params =
                method: 'GET'
                url: "/v1/#{resource}"
                
            setData = (data) ->
                Model.list  = data
            
            m.request params
                .then setData
                
    return Model