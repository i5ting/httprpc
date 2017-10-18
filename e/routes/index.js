var express = require('express');
var router = express.Router();

const sleep = ms => new Promise(r => setTimeout(r, ms))

/* GET home page. */
router.get('/', function(req, res, next) {
  // deplay 2 second and then show view
  return sleep(2000).then(() => {
    res.render('index', { title: 'Express' });
  }).catch((err) => {
    // custom error page
  })
});

module.exports = router;
