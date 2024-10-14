// import express//
import express from 'express';
import ProductController from "./product.controller.js";
import { upload } from "../../middlewares/fileupload.middleware.js";


const productController=new ProductController();
// initalize express routs//
 const productRouts = express.Router();


 productRouts.post('/rate',productController.rateProduct);
 productRouts.get('/filter',productController.filterProduct);
 productRouts.get('/',productController.getAllProducts);
 productRouts.post('/',upload.single('imageUrl'),productController.addProduct);
 productRouts.get('/:id',productController.getOneProduct);

export default productRouts;