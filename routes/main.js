const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
	const title = "Hi, I'm Ryan Tan!";
	res.render('home', {title: title}) 
});

router.get('/about', (req, res) => {
	const title = 'RYAN TAN';
	res.render('about_me/about', {title: title}) 
});


router.get('/works', (req, res) => {
	const title = 'RYAN TAN';
	res.render('works/works', {title: title}) 
});

module.exports = router;
