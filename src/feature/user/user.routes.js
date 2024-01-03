
import express from "express"
import UserController from "./user.controller.js";

const userRoutes = express.Router();

const userController = new UserController()

userRoutes.post("/singin", userController.singIn)

userRoutes.post('/singup',userController.singUp);


export default userRoutes;


