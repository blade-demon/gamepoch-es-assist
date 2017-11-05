var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/index2', function(req, res, next) {
    res.render('index2', { title: 'Express' });
});

router.get('/competitor', function(req, res, next) {
    res.render('competitor', { title: 'Express' });
});

router.get('/video', function(req, res, next) {
    res.render('video');
});

module.exports = router;