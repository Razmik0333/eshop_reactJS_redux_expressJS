const path = require('path')
const multer = require('multer');
const realyze = require('./config').realyze;

const storage = multer.diskStorage({
     destination: function (req, file, cb) {   
          if (file.mimetype === "image/jpeg") {
               cb(null, path.resolve() + '/public/images/products');
          }else{
               cb(null, path.resolve() + '/upload/data')
          }
     },
     filename: async (req, file, cb) => {
          if (file.mimetype === "image/jpeg") {
               console.log(file.originalname.split("."));
               
               const [picturesMaxId] = await realyze("SELECT MAX(id) AS id FROM `products`")
               const pictId = +picturesMaxId.id +  +file.originalname.split(".")[0];
               const uniqueSuffix = `${pictId}.jpg`//Date.now() + '-' + file.originalname;
               cb(null, uniqueSuffix)
               
          }else{
               const uniqueSuffix = `data.xlsx`//Date.now() + '-' + file.originalname;
               
               cb(null, uniqueSuffix)
          }
     }
})

const upload = multer({storage})


module.exports.uploadFile = upload
