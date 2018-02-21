var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var React = require('react');
var ReactDOM = require('react-dom');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.get('/', function(request, response) {
    response.render('index-tmpl', {
        pageID: 'index'
    });
});


module.exports = router;
