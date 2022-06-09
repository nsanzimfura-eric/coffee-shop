const main = require('express');
const router = main.Router();


router.get('/', (req, res, next)=>{
    const dataTitle={
        title: "Coffee House Home",
        description: "Welcome home again! We want  you to stay  happy and fresh. Hope you enjoyed our premium coffee from all over the world! Thank you for joing the  masters!! You are now among us!",
        Newsletter: "Subscribe us to get every new style or kind of coffee we got from new countries. We know you will love it!"
    }
    res.render('home', dataTitle);
    // res.send('coffee shop web being done!!');
});



module.exports = router;