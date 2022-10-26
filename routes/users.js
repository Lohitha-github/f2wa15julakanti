var express = require('express');
var router = express.Router();
times = 0
/* GET users listing. */
router.get('/', function(req, res, next) {
   var times = times+1
  res.send(`Users accesses are: ${times}`);
});

module.exports = router;
