//declare mongoose
var mongoose = require('mongoose');
//declare schema (table design/structure)
var ToySchema = mongoose.Schema(
   {
      no: Number,
      name: String,
      type: String,   
      yearManufacture: Number,      //interger
      price: Number,         //double
      illustration: String,
      // type - many toys
      type: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'types'
      }
   }
);
//declare model (to be used in routes - controllers)
var ToyModel = mongoose.model("toys", ToySchema);  //toys: collection name

//export module
module.exports = ToyModel;

