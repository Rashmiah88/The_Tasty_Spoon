const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET menu page. */
router.get('/menu', (req, res) => {
  res.render('menu', { title: 'Menu' });
});

/* GET about page. */
router.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

/* GET contact page. */
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
