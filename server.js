import express from "express"
import {productRouter } from "./src/feature/product/product.routes.js";
import bodyParser from "body-parser";
import userRoutes from "./src/feature/user/user.routes.js";
import basicAuth from "./src/middelware/basicAuth.middelware.js";
import jwtAuth from "./src/middelware/jwt.middelware.js";
import cardRoutes from "./src/feature/card/card.routes.js";


// Create the server
const server = express();

server.use(bodyParser.json())

server.use(express.static('public'))
// creat the product router
server.use("/api/products",jwtAuth, productRouter)
server.use('/api/user',userRoutes )
server.use("/api/card",jwtAuth,cardRoutes);



// server are listen on port no 3200
server.listen(3200, ()=> {
    console.log("Server is listen at port 3200");
})