var express = require('express');
var router = express.Router();

// var List.mongoose.model

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/new', function(req, res, next) {
  listItem.create(req.body, function(err, newListItem))
  res.send('worked');
});

module.exports = router;
