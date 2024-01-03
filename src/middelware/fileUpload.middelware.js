import multer from 'multer'

const filestroage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "public/fileUpload/");
    },

    filename: (req, file, cb)=>{
        let name= Math.round(Math.random() * 1E9)
        cb(null, name + file.originalname);
    }
})

export const upload = multer({storage:filestroage})