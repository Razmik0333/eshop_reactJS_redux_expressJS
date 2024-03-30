const path = require('path')
const multer = require('multer');
const realyze = require('./config').realyze

const storage = multer.diskStorage({
     destination: function (req, file, cb) {
          cb(null, path.resolve() + '/public/images/products')
     },
     filename: async (req, file, cb) => {
          const [id] = await realyze("SELECT MAX(id) FROM `products`")
          const uniqueSuffix = `${Object.values(id)[0] + 1}.jpg`//Date.now() + '-' + file.originalname;
          cb(null, uniqueSuffix)
     }
})

const upload = multer({storage})


module.exports.uploadFile = upload
