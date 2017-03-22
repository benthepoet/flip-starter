m = require('mithril')

module.exports = (resource) ->
    Model = 
        draft: {}
        list: []
        create: (data) ->
            params =
                data: data
                method: 'POST'
                url: "v1/#{resource}"
                
            m.request(params)
                
        getList: ->
            params =
                method: 'GET'
                url: "/v1/#{resource}"
                
            setData = (data) ->
                Model.list  = data
            
            m.request(params)
                .then(setData)
                
    return Model