let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET tickets page. */
router.get('/About-me', function(req, res, next) {
  res.render('About', { title: 'About Me'});
});

/* GET clients page. */
router.get('/Projects', function(req, res, next) {
  res.render('Projects', { title: 'Projects'});
});

/* GET services page. */
router.get('/skills', function(req, res, next) {
  res.render('skills', { title: 'Skills'});
});

/* GET users page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
});

module.exports = router;
