const path = require('path')
const multer = require('multer');

const storage = multer.diskStorage({
     destination: function (req, file, cb) {
          cb(null, path.resolve() + '/uploads')
     },
     filename: function (req, file, cb) {
          const uniqueSuffix = Date.now() + '-' + file.originalname;
          cb(null, uniqueSuffix)
     }
})


const upload = multer({storage})


module.exports.uploadFile = upload
