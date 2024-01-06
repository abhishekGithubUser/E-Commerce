
import express from "express"
import UserController from "./user.controller.js";

const userRoutes = express.Router();

const userController = new UserController()

userRoutes.post("/signin", userController.signIn)

userRoutes.post('/signup',userController.signUp);


export default userRoutes;


