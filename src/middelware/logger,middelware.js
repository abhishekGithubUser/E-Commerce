
import fs from "fs";

const fsPromis = fs.promises;

async function log(logData) {

    try {
        logData =`\n ${ new Date().toString()}  ${logData}`;
        await fsPromis.appendFile('log.txt',logData);
        
    } catch (error) {
        console.log(error)
    }
}


 const logMiddelware = async (req, res, next)=>{
    // 1. Log req body
    const logData = `${req.url}- ${JSON.stringify(req.body)}`
    await log(logData);

    next();

 }

 export default logMiddelware;