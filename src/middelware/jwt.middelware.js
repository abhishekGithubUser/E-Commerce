import jwt from "jsonwebtoken"
const jwtAuth = (req, res, next)=>{
    //  1. Read the token 
    console.log(req.headers)
    const token = req.headers["authorization"];

    // 2. If no token return error 
    if(!token){
        res.status(401).send("Unauthories User")
    };

    // 3. if token is valid  
    try{

        const payload= jwt.verify(token,'Yrcc3kjoMrc7BIWNQln9egu5OUM5JL1K');

        console.log(payload);
        req.userID =payload.userId;
    }
    catch(error){
        //  1. return error  
        res.status(401).send("Unauthories User")
    }

    // 5. call next Middelware
   
    next();
}

export default jwtAuth;