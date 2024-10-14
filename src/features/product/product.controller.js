import ProductModel from "./product.model.js";
export default class ProductController {
  getAllProducts(req, res) {
    const products = ProductModel.getAll();
    res.status(200).send(products);
  }

  addProduct(req, res) {
    console.log(req.body);
    const { name, price, desc, catagry, sizes } = req.body;
    const prod = {
      name,
      price: parseFloat(price),
      sizes: sizes.split(","),
      catagry,
      //imageUrl:"/upload/"+req.file.filename,
    };
    const createdProduct = ProductModel.add(prod);
    res.status(200).send(createdProduct);
  }

  getOneProduct(req, res) {
    const id = req.params.id;
    const product = ProductModel.get(id);
    if (!product) {
      res.status(404).send("Product Not Found");
    } else {
      return res.status(200).send(product);
    }
  }

  rateProduct(req, res) {
   const userId=req.query.userId;
   const productId=req.query.productId;
   const rating=req.query.rating;
   const data=ProductModel.rateProduct(userId,productId,rating);

   if(data){
    return res.status(400).send(data);
   }
   else{
    res.status(200).send("Rating Added Successfully");
   }
  }
  
  filterProduct(req, res) {
    const minPrice=req.query.minPrice;
    const maxPrice=req.query.maxPrice;
    const filterprod=ProductModel.filter(minPrice,maxPrice);
    res.status(200).send(filterprod);
  }
}
