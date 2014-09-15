
/**
 * Module dependencies.
 */

var express = require('express');
var app = express();
var router;
var port = process.env.PORT | 4000;

// all environments
app.use(bodyParser());

router = express.Router();  // get instance of express router

// add middleware to router
router.use(function(req, res, next) {
    // logging, stats, etc. here
    // add optional authentication
    next();
});

router.get('/', function(req, res) {
    res.json({message: 'server is up and running'});
}); 

/**
 *
 * additional routes
 *
 */

// Post route
router.route('/user')

    .post(function(req, res) {
        res.json({
            "data": {
                "user": "Some User",
                "someData": "Some Data"
            }
        });
    });


// Get route
router.route('/version')

    .get(function(req, res) {
        res.json({
            "version": 1
        });
    });

app.use('/api', router);

app.listen(port);
console.log('Running on port: ' + port);
