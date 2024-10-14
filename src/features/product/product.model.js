import UserModel from "../user/user.model.js";

export default class ProductModel {
  constructor(id, name, desc, price, imageUrl, catagry, sizes) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.imageUrl = imageUrl;
    this.catagry = catagry;
    this.sizes = sizes;
  }
  static getAll() {
    return products;
  }
  static add(productObj) {
    productObj.id = products.length + 1;
    products.push(productObj);
    return productObj;
  }
  static get(id) {
    const product = products.find((prod) => prod.id == id);
    return product;
  }
  static filter(minPrice, maxPrice) {
    const result = products.filter((prod) => {
      return prod.price >= minPrice && prod.price <= maxPrice;
    });

    return result;
  }
  static rateProduct(userId, productId, rating) {
    const user = UserModel.getAll().find((user) => user.id == userId);

    if (!user) {
      return "User not found";
    }
    const product = products.find((prod) => prod.id == productId);

    if (!product) {
      return "Product not found";
    }

    if (!product.rating) {
      product.rating =[];
      product.rating.push({
        userId: userId,
        rating: rating,
      });
    } else {
      product.rating.push({
        userId: userId,
        rating: rating,
      });
    }
    console.log(product);
  }
}
var products = [
  new ProductModel(
    1,
    "Product 1",
    "Description For Product 1",
    19.6,
    "",
    "catagey 1",
    ["M", "L"]
  ),
  new ProductModel(
    2,
    "Product 2",
    "Description For Product 2",
    56,

    "",
    "catagey 2",
    ["M", "L"]
  ),
  new ProductModel(
    3,
    "Product 3",
    "Description For Product",
    36,
    "",
    "catagry 3",
    ["M", "L", "XL"]
  ),
];
