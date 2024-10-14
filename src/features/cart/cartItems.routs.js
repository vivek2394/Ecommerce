import express from "express";
import CartItemsController from "./cartItems.controller.js";

const cartRouts= express.Router();
const cartController= new CartItemsController();

cartRouts.delete('/:id',cartController.delete);
cartRouts.post('/',cartController.add);
cartRouts.get('/',cartController.get);
export default cartRouts; 