import ProductModel from "./product.modal.js";


export default class ProductController {
  
        getAllProduct(req, res) {
        const product = ProductModel.getAllProduct();
        res.status(200).send(product);
    }

        addProduct(req, res) {
            const { name, price, sizes } = req.body;
            const newProduct = {
            name,
            price: parseFloat(price),
            sizes: sizes.split(',') ,
            imgUrl: "fileUpload/" + req.file.filename,
            };

            const creatRecord = ProductModel.addProduct(newProduct);
            res.status(201).send(creatRecord);
    }

        rateProduct(req, res) {
            const userID= req.query.userId;
            const productID= req.query.productId;
            const rating = req.query.rating;
            console.log(userID,productID,rating)
            const error = ProductModel.productRating(userID,productID,rating);
            if(error){
                res.status(400).send(error)
            }else{
                res.status(200).send("Rating was summited")
            }
    }

        getOneProduct(req, res) {
            const id = req.params.id;
            const foundProduct = ProductModel.getOneProduct(id);
            if(!foundProduct){
                res.status(404).send("Product not found");
            }else{
            res.status(200).send(foundProduct);
            }
    }

   

    updateProduct(req, res) {
        const foundProduct = ProductModel.updateProduct(req.body);
        if(foundProduct){
            res.status(200).send("Product was updated Successfully");
        }else{
            res.status(404).send("Product not found");
        }
    }

    deleteProduct(req, res ){
        const id = req.params.id;
        const deleted=ProductModel.deleteProduct(id);
        if(deleted){
            res.status(200).send("Product was Delete Successfully");
        }else{
            res.status(404).send("Product not found");
        }
    }

    

// http://localhost:3200/api/products/fillter?minPrice=10&maxPrice=20&category=category1

filterProduct(req, res) {
    
    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;
    const category = req.query.category;
    console.log(minPrice, maxPrice, category);
    const filteredProduct = ProductModel.filter(minPrice, maxPrice, category);
    if(filteredProduct.length == 0){
        res.status(404).send("No such product found")
    }else{

        res.status(200).send(filteredProduct);
    }
}

}
