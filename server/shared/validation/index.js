const CheckIt = require('checkit');

let rules = {};

module.exports = {
    validate: validate
};

function validate(model, body) {
    if (!rules[model]) {
        try {
            rules[model] = require(`./${model}`);
        } catch (error) {
            rules[model] = {};
        }
    }
    
    let checkIt = new CheckIt(rules[model]);
    
    return checkIt.run(body);
}