import ProductModel from "../models/Product.js";


export const getProduct = async( req, res ) => {
try {
    const Products = await ProductModel.find({});
    res.json(Products);
    
} catch (error) {
    console.log("nor found any data");
}
};


// export const getProduct = async (req, res) => {
//     try {
//       const products = await ProductModel.find({}); // Retrieve products from the database
  
//       res.json(products); // Send the products as the response in JSON format
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({ message: 'Failed to fetch product data' });
//     }
//   };









export const createProduct  = async ( req, res ) => {
console.log("posting..." + req.body.ProductType);

const Admin = req.body;





const newProduct = new ProductModel(Admin);
try {
    await newProduct.save();
    res.json(newProduct);
} catch (error) {
    console.log("not saved data");
}

};
