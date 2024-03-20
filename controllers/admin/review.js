const fs = require('fs');
const realyze = require('../../config').realyze;
const functions = require('../../functions/functions');
const fs_functions = require('../../functions/fs_functions');
const variables = require('../../variables/variables');

const getReviewsByProduct = functions.reviewsByProduct;

module.exports.reviewsList = async (req,res) => {
     const cachesPathAdmin = variables.cachesAdmin.review;

     try {
          if (fs.existsSync(`${cachesPathAdmin}/caches_admin_reviews.json`)) {
               fs.readFile(`${cachesPathAdmin}/caches_admin_reviews.json`,"utf8",
               async function(err, data) {
                    if (err) throw err;
                    else {          
                         const [reviewCounts] = await realyze("SELECT COUNT(id) AS count FROM reviews ")
                         if (JSON.parse(data).length < reviewCounts.count) {
                              const reviews = await realyze("SELECT * FROM reviews ");
                              fs_functions.writeCacheFile(
                                   `${cachesPathAdmin}/caches_admin_reviews.json`,
                                   reviews
                              )
                              res.send(reviews);
                         }else{
                              console.log('read');
                              res.send(data);
                         }
                    }
               }
               
               
               )
          } else {
               const reviews = await realyze("SELECT * FROM reviews ");
               fs_functions.writeCacheFile(
                    `${cachesPathAdmin}/caches_admin_reviews.json`,
                    reviews
               )
               res.send(reviews);
          }
     } catch (err) {
          throw err;

     }
     
}
module.exports.reviewsId = async (req,res) => {
     const reviewId = req.params.review_id;
     const [reviewById] = await realyze("SELECT * FROM reviews WHERE id = ? ", [reviewId]);
     res.send(reviewById)
}
module.exports.reply = async (req,res) => {
     const cachesPath = variables.caches.review;

     const reply = req.body.reply;
     const review_id = req.params.review_id;
     await realyze ("UPDATE `reviews` SET `reply` = ?, `reply_time` = ? WHERE id = ? ", [reply, Date.now(), review_id])
     const [reviewById] = await realyze("SELECT * FROM reviews WHERE id = ? ", [review_id]);
     const reviews = await realyze("SELECT * FROM reviews WHERE product_id = ?  ORDER BY id DESC ", [reviewById?.product_id]);
     const newReviews = await getReviewsByProduct(reviews);
     fs_functions.writeCacheFile(
          `${cachesPath}/reviews/reviewsByProduct.json`,
          newReviews);
     res.send(reviewById)
}
