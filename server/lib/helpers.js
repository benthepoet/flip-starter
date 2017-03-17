function applyQuery(chain, query) {
    let mutators = {
        fields: fields,
        filter: filter,
        limit: limit,
        offset: offset,
        sort: sort
    };

    for (let key of query) {
        apply(query[key], key);
    }

    function apply(value, key) {
        let mutator = mutators[key] || mutators.filter;
        
        try {
            value = JSON.parse(value);
        } catch (error) {
            throw new Error(`'${key}' is not valid JSON.`);
        }
        
        mutator(value, key);
    }
    
    function fields(value, key) {
        if (typeof value !== 'string' || !Array.isArray(value)) {
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
        if (typeof value !== 'string' || !Array.isArray(value)) {
            throw new Error(`'${key}' must be a string or array.`)
        }
    }
}