//declare mongoose
var mongoose = require('mongoose');
//declare schema (table design/structure)
var ToySchema = mongoose.Schema(
   {
      name: String,
      type: String, 
      brand: String,  
      yearManufacture: Number,      //interger
      price: Number,         //double
      illustration: String,
      // type - many toys
      type: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'types'
      },
      brand: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'brands'
      }
   }
);
//declare model (to be used in routes - controllers)
var ToyModel = mongoose.model("toys", ToySchema);  //toys: collection name

//export module
module.exports = ToyModel;

