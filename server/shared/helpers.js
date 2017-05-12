module.exports = {
    applyQuery: applyQuery
};

function applyQuery(chain, query) {
    let mutators = {
        fields: fields,
        filter: filter,
        limit: limit,
        offset: offset,
        sort: sort
    };

    query = Object.assign({}, query);

    for (let key in query) {
        if (query.hasOwnProperty(key)) {
            apply(query[key], key);
        }
    }
    
    return chain;

    function apply(value, key) {
        let mutator = mutators[key] || mutators.filter;
        
        try {
            value = JSON.parse(value);
        } catch (error) {
            value = value.split(',');
        }
        
        mutator(value, key);
    }
    
    function fields(value, key) {
        if (typeof value !== 'string' && !Array.isArray(value)) {
            throw new Error(`'${key}' must be a string or array.`)
        }
        
        chain.select(value);
    }

    function filter(value, key) {
        if (Array.isArray(value)) {
            chain.whereIn(key, value);
        }
        else {
            chain.where(key, value);
        }
    }

    function limit(value, key) {
        if (isNaN(value)) {
            throw new Error(`'${key}' must be a number.`);    
        }
        
        chain.limit(value);
    }

    function offset(value, key) {
        if (isNaN(value)) {
            throw new Error(`'${key}' must be a number.`);    
        }

        chain.offset(value);
    }

    function sort(value, key) {
        if (typeof value !== 'string' && !Array.isArray(value)) {
            throw new Error(`'${key}' must be a string or array.`)
        }
        
        if (!Array.isArray(value)) {
            value = [value];
        }
        
        for (let column of value) {
            let re = /^(-*)(\w+)$/g;
            let groups = re.exec(column);
            let direction = groups[1] === '-' ? 'desc' : 'asc';
            
            chain.orderBy(groups[2], direction); 
        }
    }
}