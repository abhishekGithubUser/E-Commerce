import UserModel from "./user.modal.js";
import  jwt  from "jsonwebtoken";

export default class UserController{

    signUp(req,res){
        const { name, email, password, types}=req.body;
        const user=UserModel.signUp(name, email,password,types);
        res.status(201).send(user);
    }

    signIn(req, res){
        const result = UserModel.signIn(req.body.email, req.body.password);

        if(result){
            // creat a token JWT 
            const token = jwt.sign({
                userId:result.id,
                email:result.email
            },"Yrcc3kjoMrc7BIWNQln9egu5OUM5JL1K",
            {
                expiresIn:"1h"
            })
            res.status(200).send(token);
        }else{
            res.status(400).send("Incorrect Crediential")
        }
    }
}