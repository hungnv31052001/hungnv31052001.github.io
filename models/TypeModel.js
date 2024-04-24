const mongoose = require('mongoose');
const TypeSchema = mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
         minLength: 3
      },
      quantity: {
         type: Number
      }
   }
);
const TypeModel = mongoose.model("types", TypeSchema);
module.exports = TypeModel;

