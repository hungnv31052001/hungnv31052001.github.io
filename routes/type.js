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


module.exports = router;