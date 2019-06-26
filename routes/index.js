var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {

  request({
    uri: 'http://api2/hello/abcd',
    headers: {
       /* propagate the dev space routing header */
       'azds-route-as': req.headers['azds-route-as']
    }
 }, function (error, response, body) {
    res.render('index', { title:body });
 });

});

module.exports = router;
