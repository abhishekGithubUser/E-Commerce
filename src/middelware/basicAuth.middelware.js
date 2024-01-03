import UserModel from "../feature/user/user.modal.js";

const basicAuth=(req, res, next)=>{

    // 1.Check Autherization Header is Empty 

    const authHeader = req.headers["authorization"];

    if(!authHeader){
        res.status(401).send("No Authorization Detail found")
    }
    console.log(authHeader)


    // 2. Extrect Credential[Basic "asdfghjkljhgfdfghjklfghjkjhgf"]
    const basic64Credential = authHeader.replace('Basic',"")
    console.log(basic64Credential);

    // 3. decode credential

    const decodeCreds = Buffer.from(basic64Credential,"base64").toString("utf-8");

    console.log(decodeCreds)// [username:password]
    const creds=decodeCreds.split(':');

    const user = UserModel.getAll().find((u)=> u.email==creds[0] && u.password==creds[1]);

    if(user){
        next()
    }else{
        res.status(401).send("Incorrect Credential");
    }


}


export default basicAuth;