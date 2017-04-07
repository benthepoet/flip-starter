var m = require('mithril'),
    css = require('./index.css'),
    Home = require('./components/home');

m.route(document.body, '/', {
    '/': Home
});