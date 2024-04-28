const express = require('express');
const router = express.Router();
const BrandModel = require('../models/BrandModel');

router.get('/', async (req, res) => {
   let brandList = await BrandModel.find({});
   res.render('brand/index', { brandList });
})

//step 1: render "Add brand" form for user to input data
router.get('/add', async (req, res) => {
   var brands = await BrandModel.find({});
   res.render('brand/add', { brands });
})

//step 2: get input data from form and add data to database
router.post('/add', async (req, res) => {
   //get input data from form
   var brand = req.body;
   //add data to database
   await BrandModel.create(brand);
   //redirect to toy homepage
   res.redirect('/brand');
})

router.get('/delete/:id', async (req, res) => {
   await BrandModel.findByIdAndDelete(req.params.id);
   res.redirect('/brand');
})

router.get('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var brand = await BrandModel.findById(id);
   res.render('brand/edit', { brand });
})

router.post('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var brand = req.body;
   await BrandModel.findByIdAndUpdate(id, type);
   res.redirect('/brand');
})

module.exports = router;