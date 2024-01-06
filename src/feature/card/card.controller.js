
import CardModel from "./card.model.js";

export default class CardController{

    add(req, res){
        const {productId, quantity, size}=req.query
        const userID = req.userID;
        console.log(userID,productId,quantity,size)
        const result =CardModel.add(userID,parseInt(productId),parseInt(quantity),size);
        res.status(201).send(result);
    }

    getItem(req, res){
        const items= CardModel.getAll(req.userID);
        if(items){
            res.status(200).send(items)
        }else{
            res.status(400).send("No user data found");
        }
    }

    delete(req, res){
        
        const userID = req.userID;
        const cardItemId = req.params.id;
        const error = CardModel.delete(cardItemId,userID);
        if(error){
            res.status(400).send(error)
        }else{
            res.status(200).send("Item was deleted")
        }
    
        
    }
}