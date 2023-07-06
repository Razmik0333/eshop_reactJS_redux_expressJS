const fs = require('fs');
const path = require('path')
const multer = require('multer');

const reviewPath = path.resolve() + `/public/images/reviews/`;
const storage = multer.diskStorage({
     destination: async (req, file, cb) => {

          const userId = typeof req.body.user_id === "string" ? req.body.user_id
          : req.body.user_id[0]
          const orderId = typeof req.body.order_id === "string" ? req.body.order_id
          : req.body.order_id[0];
          try {
               if(!fs.existsSync(reviewPath + `${userId}`)){
                    fs.mkdirSync(reviewPath + `${userId}`);
               }
               if(!fs.existsSync(reviewPath + `${userId}/${orderId}`)){
                    fs.mkdirSync(reviewPath + `${userId}/${orderId}`);
               }
               if(!fs.existsSync(reviewPath + `${userId}/${orderId}/${file.fieldname}`)){
                    fs.mkdirSync(reviewPath + `${userId}/${orderId}/${file.fieldname}`)
               }  
               cb(null, reviewPath + `${userId}/${orderId}/${file.fieldname}`)
           } catch (e) {
                console.log(e);
             
           }
     },
     filename: async (req, file, cb) => {       
          const uniqueSuffix = `review_${file.fieldname}_${Date.now()}.jpg`;
          cb(null, uniqueSuffix);
     }
})

const uploadForReview = multer({storage});



module.exports.uploadForReview = uploadForReview

