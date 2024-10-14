import CartItemsModel from "./cartItems.model.js";
export default class CartItemsController {
  add(req, res) {
    const userId = req.userId;
    const { productId, quantity } = req.query;
    const item = CartItemsModel.add(productId, userId, quantity);
    console.log(item);
    res.status(200).send("Cart is Updated");
  }

  get(req, res) {
    const userId = req.userId;
    const item = CartItemsModel.get(userId);
    res.status(200).send(item);
  }

  delete(req, res) {
    const userId = req.userId;
    const cartItemId = req.params.id;
    const error = CartItemsModel.delete(userId, cartItemId);

    if (error) {
      return res.status(400).send(error);
    } else {
      return res.status(200).send("Cart item deleted");
    }
  }
}
