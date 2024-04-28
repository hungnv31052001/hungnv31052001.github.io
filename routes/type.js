const express = require('express');
const router = express.Router();
const TypeModel = require('../models/TypeModel');

router.get('/', async (req, res) => {
   let typeList = await TypeModel.find({});
   res.render('type/index', { typeList });
})

//step 1: render "Add type" form for user to input data
router.get('/add', async (req, res) => {
   var types = await TypeModel.find({});
   res.render('type/add', { types });
})

//step 2: get input data from form and add data to database
router.post('/add', async (req, res) => {
   //get input data from form
   var type = req.body;
   //add data to database
   await TypeModel.create(type);
   //redirect to toy homepage
   res.redirect('/type');
})

router.get('/delete/:id', async (req, res) => {
   await TypeModel.findByIdAndDelete(req.params.id);
   res.redirect('/type');
})

router.get('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var type = await TypeModel.findById(id);
   res.render('type/edit', { type });
})

router.post('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var type = req.body;
   await TypeModel.findByIdAndUpdate(id, type);
   res.redirect('/type');
})

module.exports = router;