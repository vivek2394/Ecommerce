import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";

export default class UserController {
  signUp(req, res) {
    const { name, email, password, type } = req.body;
    const user = UserModel.signUp(name, email, password, type);
    res.send(user);
  }

  signIn(req, res) {
    const { email, password } = req.body;
    const result = UserModel.signIn(email, password);
    if (!result) {
      return res.status(400).send("Invalid Creds");
    } else {
      // creat token//

      const token = jwt.sign(
        // payload //
        {
          userId: result.id,
          email: result.email,
        },
        //secret key
        "dQL6fNy1gK",
        {
          expiresIn: "1h",
        }
      );
      return res.status(200).send(token);
    }
  }
}
