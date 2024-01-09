
import fs from "fs";
import wiston from 'winston'


// Using Wisten lib   

const logger= wiston.createLogger({
    level:'info',
    format: wiston.format.json(),
    defaultMeta: { service: 'request logger' },
    transports:[
        new wiston.transports.File({filename:'log.txt'})
    ]
})





/*
const fsPromis = fs.promises;

async function log(logData) {

    try {
        logData =`\n ${ new Date().toString()}  ${logData}`;
        await fsPromis.appendFile('log.txt',logData);
        
    } catch (error) {
        console.log(error)
    }
}
*/

 const logMiddelware = async (req, res, next)=>{
    // 1. Log req body
    const logData = `${req.url}- ${JSON.stringify(req.body)}`
    logger.info(logData);

    next();

 }

 export default logMiddelware;