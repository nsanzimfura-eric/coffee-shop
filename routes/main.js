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
//getting reservation info
router.post('/order', (req, res, next)=>{
    const orderData = req.body;
    console.log( "here is the data:  ", orderData);
//  res.send(orderData);
 res.json(orderData);

})

module.exports = router;