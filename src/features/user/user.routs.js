// import express//
import express from "express";
import UserController from "./user.controller.js";

const userController = new UserController();
// initalize express routs//
const userRouts = express.Router();
userRouts.post("/signup", userController.signUp);
userRouts.post("/signin", userController.signIn);

export default userRouts;
