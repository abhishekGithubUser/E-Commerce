
import UserModel from "../user/user.modal.js";
import ProductModel from "../product/product.modal.js";

export default class CardModel{

    constructor( userID, productID,quantity, size,id){
        this.id=id;
        this.userID=userID;
        this.productID=productID;
        this.quantity=quantity;
        this.size=size;
    }

    static add(userID, productID,quantity,size){
        const checkUserId= UserModel.getAll().find((u)=> u.id==userID);
        if(!checkUserId){
            return "User not Found "
        }
        const checkProductId= ProductModel.getAllProduct().find((p)=> p.id==productID);
        if(!checkProductId){
            return "Product not Found "
        }

        const existItemIndex = cardItem.findIndex((c)=> c.userID==userID && c.productID == productID);
       console.log(existItemIndex);
        if(existItemIndex !== -1){
            const id = cardItem[existItemIndex].id;
            cardItem[existItemIndex]= {
                id:id,
                userID:userID,
                productID:productID,
                quantity:quantity,
                size:size

            } 
            return cardItem[existItemIndex];
        }else{
            let id = cardItem.length + 1;
            const item = new CardModel( userID,productID,quantity,size,id);
            cardItem.push(item);
            return item;
        }
       
    }

    static getAll(id){
        return cardItem.filter((c)=> c.userID==id);
    }

    static delete(cardItemId, userID){
        const cardItemIndex = cardItem.findIndex((i)=> i.id == cardItemId && i.userID==userID);
        console.log(cardItemIndex)
        console.log(cardItemId, userID)
        if(cardItemIndex == -1){
            return "item not found "
        }else{
            cardItem.splice(cardItemIndex,1);
            
        }
    }

}

var cardItem=[
    new CardModel(2,3,1,"M",1)
];