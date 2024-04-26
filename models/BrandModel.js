const mongoose = require('mongoose');
const BrandSchema = mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
         minLength: 3
      }
   }
);
const BrandModel = mongoose.model("brands", BrandSchema);
module.exports = BrandModel;