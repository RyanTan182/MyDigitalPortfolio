const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
	res.render('home') 
});

router.get('/about', (req, res) => {
	const title = 'About Me |';
	res.render('about_me/about', {title: title}) 
});


router.get('/works', (req, res) => {
	const title = 'My Works |';
	res.render('works/works', {title: title}) 
});

module.exports = router;
