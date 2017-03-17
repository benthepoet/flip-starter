var m = require('mithril'),
    css = require('./index.css'),
    Home = require('./home');

m.route(document.body, '/', {
    '/': Home
});