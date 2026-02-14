import multer from 'multer'
import path from 'path'

 
const storage=multer.diskStorage({
 
    //Correcting the code ---> 
      destination: function (req, file, callback) {
    callback(null, 'uploads/') // <-- create this folder in your backend directory
  }, ///code ended here


    filename:function(req,file,callback){
        callback(null,file.originalname)
    }
})

const upload = multer({storage})

export default upload

