const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
	const title = "Ryan Tan";
	res.render('home', {title: title}) 
});

router.get('/about', (req, res) => {
	const title = 'About Me | Ryan Tan';
	res.render('about_me/about', {title: "About Me | Ryan Tan"}) 
});


router.get('/works', (req, res) => {
	const title = 'My Works | Ryan Tan';
	res.render('works/works', {title: "My Works | Ryan Tan"}) 
});

module.exports = router;
