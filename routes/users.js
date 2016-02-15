var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var List;
var listSchema = new mongoose.Schema({
  listItem: String
});


List = mongoose.model('List', listSchema);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/new', function(req, res, next) {
  List.create(req.body, function(err, newListItem){

    res.send('worked');
  })
});
router.get('/getAll', function(req, res, next) {
  List.find({}, function(err, wholeList){

    res.send(wholeList);
  })
});
router.post('/delete', function(req, res, next) {
  var theId = req.body._id
  List.findByIdAndRemove(theId, function(err, finished){

    res.send('finished');
  })
});
router.post('/edit', function(req, res, next) {
  var theId = req.body._id
  var listEdit = req.body.listItem
  List.findByIdAndUpdate(theId,{ $set: { listItem: listEdit }} function(err, finished){

    res.send('finished');
  })
});

module.exports = router;
