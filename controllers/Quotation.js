import QuotationModel from "../models/Quotation.js";
export const createQuotation  = async ( req, res ) => {
    console.log("posting..." + req.body.Name);
    
    const user = req.body;
    
    
    
    
    
    const newQuotation = new QuotationModel(user);
    try {
        await newQuotation.save();
        res.json(newProduct);
    } catch (error) {
        console.log("not saved data");
    }
    
    };

    export const getQuotation = async( req, res ) => {
        try {
            const Quotation = await QuotationModel.find({});
            res.json(Quotation);
            
        } catch (error) {
            console.log("nor found any data");
        }
        };