const path = require('path')
const multer = require('multer');
const realyze = require('./config').realyze

const storage = multer.diskStorage({
     destination: function (req, file, cb) {
          cb(null, path.resolve() + '/public/images/gallery')
     },
     filename: async (req, file, cb) => {
          //const [id] = await realyze("SELECT MAX(id) FROM `products`")
          const [max] = await realyze("SELECT MAX(id) AS id FROM `performed_works`")
          const currentName = max?.id || 1;
          const uniqueSuffix = `${+currentName + 1}.jpg`//Date.now() + '-' + file.originalname;
          cb(null, uniqueSuffix)
     }
})

const upload = multer({storage})


module.exports.uploadForGallery = upload
