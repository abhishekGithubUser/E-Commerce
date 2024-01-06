import express from "express"
import swagger from "swagger-ui-express"
import bodyParser from "body-parser";
import cors from 'cors'
import {productRouter } from "./src/feature/product/product.routes.js";
import userRoutes from "./src/feature/user/user.routes.js";
import basicAuth from "./src/middelware/basicAuth.middelware.js";
import jwtAuth from "./src/middelware/jwt.middelware.js";
import cardRoutes from "./src/feature/card/card.routes.js";
import apiDocs from './swagger.json' assert { type:"json"};
import logMiddelware from "./src/middelware/logger,middelware.js";


// Create the server
const server = express();

server.use(bodyParser.json())

server.use(express.static('public'))

// cors option 
var corsOption={
    origin:"http://localhost:5500"
}
// CORS Policy configretion
server.use(cors(corsOption));

/* server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5500');
    res.header("Access-Control-Allow-Headers", "*");
    // res.header("Access-Control-Allow-Methods", "*");

    // return OK from preflight request
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }

    next();
});
*/

// Each and every request log in the file 
server.use(logMiddelware);
// creat the product router
server.use("/api-docs", swagger.serve , swagger.setup(apiDocs))
server.use("/api/products",jwtAuth, productRouter)
server.use('/api/user',userRoutes )
server.use("/api/card",jwtAuth,cardRoutes);




// if user send the worng url path 
server.use((req, res)=>{
    res.status(404).send("Api not Found | Plese check the api documention for more api information localhost:3200/api-docs ")
})



// server are listen on port no 3200
server.listen(3200, ()=> {
    console.log("Server is listen at port 3200");
})