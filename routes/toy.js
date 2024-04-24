var express = require('express');
const ToyModel = require('../models/ToyModel');
const TypeModel = require('../models/TypeModel');
var router = express.Router();

//READ feature
//Importance: Must use "async" + await" keywords
router.get('/', async (req, res) => {
   //SQL: SELECT * FROM toys
   var type = await TypeModel.find({});
   var toyList = await ToyModel.find({}).populate('type');
   //console.log(toyList);
   res.render('toy/index', { toyList, type });
})

//DELETE feature
router.get('/delete/:id', async (req, res) => {
   //get id from url
   let id = req.params.id;
   //delete document in collection by id
   //SQL: DELETE FROM toys WHERE id = "id"
   await ToyModel.findByIdAndDelete(id);
   //console.log("Delete toy succeed !");
   //redirect to toy list page
   res.redirect('/toy');
})

router.get('/deleteall', async (req, res) => {
   //SQL: DELETE FROM toys
   //SQL: TRUNCATE TABLE toys
   await ToyModel.deleteMany();
   res.redirect('/toy');
})

//step 1: render "Add toy" form for user to input data
router.get('/add', async (req, res) => {
   var types = await TypeModel.find({});
   res.render('toy/add', { types });
})

//step 2: get input data from form and add data to database
router.post('/add', async (req, res) => {
   //get input data from form
   var toy = req.body;
   //add data to database
   await ToyModel.create(toy);
   //redirect to toy homepage
   res.redirect('/toy');
})

router.get('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var toy = await ToyModel.findById(id);
   res.render('toy/edit', { toy });
})

router.post('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var toy = req.body;
   await ToyModel.findByIdAndUpdate(id,toy);
   res.redirect('/toy');
})

//show toy detail
router.get('/detail/:id', async (req, res) => {
   let id = req.params.id;
   var toy = await ToyModel.findById(id).populate('type');
   //console.log(toy);
   res.render('toy/detail', { toy });
})

//show toy list (customer layout)(
router.get('/list', async (req, res) => {
   var toys = await ToyModel.find({});
   res.render('toy/list', { toys });
})

//search by toy's name
router.post('/search', async (req, res) => {
   let keyword = req.body.keyword;
   let toys = await ToyModel.find({ name: new RegExp(keyword, "i") });
   res.render('toy/index', { toyList : toys });
})

//sort by toy's price ascending
router.get('/sortprice/asc', async (req, res) => {
   let toyList = await ToyModel.find().sort({ price: 1 }).populate('type');
   res.render('toy/index', { toyList });
})



module.exports = router;
