

import multer from "multer";

const storage = multer.diskStorage({//diskStorage-->It tells Multer where and how to save the uploaded file.
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
    }
  })
  
export const upload = multer({ 
    storage, 
})