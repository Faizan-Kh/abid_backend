import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import Product from './routes/Product.js';
import Quotation from './routes/Quotation.js';

const app = express();
const apiKey = "mongodb+srv://abid:mohsin@cluster0.bkubxtp.mongodb.net/?retryWrites=true&w=majority";
mongoose .set('strictQuery', true);
mongoose.connect(apiKey, {
    useNewUrlParser:true,
    useUnifiedTopology:  true,
}).then(()=>console.log("connected to database")).catch(()=>console.log("not"));

app.listen(5000,()=> console.log("server is listening"));
app.use(cors());
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));
app.use("/AddProduct",Product);
app.use("/ViewApplicants",Product);
app.use('/AddQuotation',Quotation);
app.use("/viewQuotation",Quotation);

app.use('/' , Product);
