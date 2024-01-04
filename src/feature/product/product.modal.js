import UserModel from "../user/user.modal.js"
export default class ProductModel{

    constructor(id, name, desc, price, imgUrl,category, sizes ){
        
        this.id=id;
        this.name=name;
        this.desc=desc;
        this.price=price;
        this.imgUrl=imgUrl;
        this.category=category;
        this.sizes=sizes;

    }

    static getAllProduct(){
        return products;
    }

    static addProduct(product){
        product.id=products.length + 1;
        products.push(product);
        return products;
    }

    static getOneProduct(id){
        return products.find((p)=> p.id == id );
    }

    static filter(minPrice, maxPrice, category) {
        const result = products.filter((product) => {
            return ((!minPrice || product.price >= minPrice) && (!maxPrice || product.price <= maxPrice) && (!category || product.category == category));
        });
    
        return result;
    }

    static updateProduct(product){
        let index = products.findIndex((p)=> p.id == product.id);
        if(index){
            products[index]=product;
            return true;
        }else{
            return false;
        }
       
    }



    static deleteProduct(id){
        let index = products.findIndex((p)=> p.id == id);
        if(index){
            products.splice(index,1);
            return true;
        }else{
            return false;
        }
       
    }

    static productRating(userId, productId, rating){

        // 1. validate user
        const userID=UserModel.getAll().find((u)=> u.id==userId);

        if(!userID){
            return "user Not found"
        }

        // 2. validate product 
        const product= products.find((p)=> p.id==productId);

        if(!product){
            return "Product not found "
        }

        // 3. check if any rating are not avleble then add rating array
        if(!product.rating){
            product.rating=[];
            product.rating.push({
                userID: userId,
                rating : rating
            })
        }else{
    //    4. check if user rating  already exist then update rating  
            const existingUserIndex=product.rating.findIndex((u)=> u.userID==userId);

            if(existingUserIndex !== -1 ){
                product.rating[existingUserIndex]={
                    userID: userId,
                    rating : rating
                }
            }else{
     //    5. if no existing rating then add new user rating
                product.rating.push({
                    userID: userId,
                    rating : rating
                })
            }
        }

    }
}
    


var products = [
    new ProductModel(1,"Product_1","this is the Product_1", 15.55, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXD4O07nqZ4mOhxDhErP9Y1yxrjlhob1bbA&usqp=CAU", "category1",["XL","XXL"] ),
    new ProductModel(2,"Product_2","this is the Product_2", 16.55, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3zRrfPRojkiRY51ivaRTZjxBJasTfP4JPRw&usqp=CAU", "category2",["S","M","L","XL","XXL"] ),
    new ProductModel(3,"Product_3","this is the Product_3", 13.55, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXD4O07nqZ4mOhxDhErP9Y1yxrjlhob1bbA&usqp=CAU", "category3",["S","M","XXL"] ),
    new ProductModel(4,"Product_4","this is the Product_4", 12.55, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-W6ziGGO-8yiMnM4IMC51NbyluBx-7JOI7A&usqp=CAU", "category4" )
]