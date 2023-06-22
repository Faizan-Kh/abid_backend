import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
const QuotationStructure = mongoose.Schema({
    
    firstName:String,
    lastName:String,
    email: String,
    companyName: String,
    phoneNumber:Number,
    address: String,
    ProductName: String,
    quantity: Number,
    province: String,
   
      


});
// autoIncrement
autoIncrement.initialize(mongoose.connection);
QuotationStructure.plugin(autoIncrement.plugin,'Quoatation');

const QuotationModel = mongoose.model('Quoatation',QuotationStructure );
export default QuotationModel;