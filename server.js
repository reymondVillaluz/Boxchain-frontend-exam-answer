var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
var app = express();

var api  = require('./server/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'dist')));  


app.get('*'),(req,res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
}


var port = process.env.PORT || '3000'
var router = express.Router();

app.use('/', router);

router.route('/users')
.get(function(req, res){
        var users = require('./server/data/users.json');
        res.json(users);
    });
    
router.route('/uconfig')
.get(function(req, res){
        var users = require('./server/config/users.json');
        res.json(users);
    });

router.route('/products')
    .get(function(req,res){
        var products  = require('./server/data/products');
        res.json(products);
    });

router.route('/pconfig')
    .get(function(req,res){
        var products_config  = require('./server/config/products');
        res.json(products_config);
    });

router.route('/mainview')
    .get(function(req,res){
        var mainview = require('./server/data/mainview');
        res.json(mainview);
    });

app.use('/api', router)
app.listen(port);

console.log('express started successfully');