const main = require('express');
const router = main.Router();
const global = require('../pages/global');
// const menu = require('../pages/menu');



//home page
router.get('/', (req, res, next)=>{
    res.render('home', global);
});

//blog page
router.get('/blog', (req, res, next)=>{
    res.render('blog', global);
});

module.exports = router;