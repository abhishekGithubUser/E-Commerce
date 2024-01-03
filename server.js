import express from "express"
import {productRouter } from "./src/feature/product/product.router.js";
import bodyParser from "body-parser";
import userRoutes from "./src/feature/user/user.routes.js";



// Create the server
const server = express();

server.use(bodyParser.json())

server.use(express.static('public'))
// creat the product router
server.use("/api/products", productRouter)
server.use('/api/user',userRoutes )



// server are listen on port no 3200
server.listen(3200, ()=> {
    console.log("Server is listen at port 3200");
})