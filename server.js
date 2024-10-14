// import express//
import express from "express";
import bodyParser from "body-parser";
// import product rout//
import productRouts from "./src/features/product/product.routs.js";
import userRouts from "./src/features/user/user.routs.js";
import basicAuth from "./src/middlewares/bacicAuth.middleware.js";
import jwtAuth from "./src/middlewares/jwt.middleware.js";
import carRouts from "./src/features/cart/cartItems.routs.js";
import cartRouts from "./src/features/cart/cartItems.routs.js";
const server = express();
server.use(bodyParser.json());

server.use("/api/product",jwtAuth,productRouts);
server.use("/api/cartItems",jwtAuth,cartRouts);
server.use("/api/user",userRouts);
server.get("/", (req, res) => {
  res.send("welcome to E-commerce");
});

server.listen("4000", () => {
  console.log("server is running on 4000");
});
