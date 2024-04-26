const express = require('express');
const router = express.Router();
const BrandModel = require('../models/BrandModel');

router.get('/', async (req, res) => {
   let brandList = await BrandModel.find({});
   res.render('brand/index', { brandList });
})

// //step 1: render "Add toy" form for user to input data
// router.get('/add', async (req, res) => {
//    var brands = await BrandModel.find({});
//    res.render('brand/add', { brands });
// })

// //step 2: get input data from form and add data to database
// router.post('/add', async (req, res) => {
//    //get input data from form
//    var brand = req.body;
//    //add data to database
//    await BrandModel.create(type);
//    //redirect to toy homepage
//    res.redirect('/brand');
// })
module.exports = router;