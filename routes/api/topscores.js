var express = require('express');
var router = express.Router();
var topscoresCtrl = require('../../controllers/topscores');

/*---------- Protected Routes ----------*/

// TODO: Protect this route with custom middleware
router.get('/', topscoresCtrl.index);


module.exports = router;