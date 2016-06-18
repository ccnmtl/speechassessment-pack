/* global jQuery: true, console: true */

require('!file?name=[name].[ext]!../static/index.html');
require('!file?name=[name].[ext]!../static/img/ctl-logo.png');

// load and apply css
require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../static/css/common.css');

var jQuery = require('jquery');

jQuery(document).ready(function() {
    console.log('Hello World');
});
