// manage Router path of product controller

import express, { Router } from 'express'
import ProductController from './product.controller.js';
import { upload } from '../../middelware/fileUpload.middelware.js';

// Intialize Express router
export  const productRouter= express.Router();

// create the product controller object
const productController = new ProductController();

// All the path the controller methode
productRouter.post('/rate',productController.rateProduct)
productRouter.get("/",productController.getAllProduct)
productRouter.post("/",upload.single("imgUrl") ,productController.addProduct)

productRouter.get("/:id",productController.getOneProduct)
productRouter.put("/:id",productController.updateProduct)
productRouter.delete("/:id",productController.deleteProduct)

// qurray parameter
// http://localhost:3200/api/products//filter?minprice=10&maxprice=20&categrey=catgery1
productRouter.get("/filter", productController.filterProduct);

