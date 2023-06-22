import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
const ProductStructure = mongoose.Schema({
    
       ProductName: String,
       ProductPrice: String,
       MadeIn:String,
       Url: String,
       ProductType:String,

   
      


});
// autoIncrement
autoIncrement.initialize(mongoose.connection);
ProductStructure.plugin(autoIncrement.plugin,'Product');

const ProductModel = mongoose.model('Product',ProductStructure );
export default ProductModel;