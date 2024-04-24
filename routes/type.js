const express = require('express');
const router = express.Router();
const TypeModel = require('../models/TypeModel');

router.get('/', async (req, res) => {
   let typeList = await TypeModel.find({});
   res.render('type/index', { typeList });
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