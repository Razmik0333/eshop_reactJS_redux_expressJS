const fs = require('fs')
const fsPromises = require('fs/promises');
const path = require('path');
const functions = require('../functions/functions');
const fs_functions = require('../functions/fs_functions');
const realyze = require('../config').realyze;
const variables = require('../variables/variables');
const getReviewsFromProducts = functions.reviewsFromProducts;
const getReviewsByUser = functions.reviewsByUser;
const getReviewsByProduct = functions.reviewsByProduct;
const getRatingCounts = functions.ratingCounts;
const getSizeOfObject = functions.sizeOfObject;
module.exports.getReviewListByProductId = async (req, res) => {
     try {
          const productId = req.params.id;
          const cachesPath = variables.caches.review;

          
          if (fs.existsSync(`${cachesPath}/reviews/reviewsByProduct.json`)) {
               fs.readFile(`${cachesPath}/reviews/reviewsByProduct.json`, 'utf-8', 
               async function(err, data) {
                    if (err) throw err;
                    else {                                   
                         const [lastReviewByProductId] = await realyze("SELECT COUNT(id) AS count FROM reviews WHERE product_id = ? ", [productId])
                         if (JSON.parse(data).length === lastReviewByProductId.count) {
                              res.send(data);
                         }else{
                              const reviews = await realyze("SELECT * FROM reviews WHERE product_id = ?  ORDER BY id DESC ", [productId]);
                              const newReviews = await getReviewsByProduct(reviews);
                              fs_functions.writeCacheFile(
                                   `${cachesPath}/reviews/reviewsByProduct.json`,
                                   newReviews);
                              res.send(newReviews);  
                         }
                    }
               })
          } else {
               const reviews = await realyze("SELECT * FROM reviews WHERE product_id = ?  ORDER BY id DESC  ", [productId]);
               const newReviews = await getReviewsByProduct(reviews);
               fs_functions.writeCacheFile(
                    `${cachesPath}/reviews/reviewsByProduct.json`,
                    newReviews
               );
               
               res.send(newReviews);
          }
     } catch (error) {
          console.log(error);
     }
     
}
module.exports.reviewById = async (req, res) => {
     const userId = req.params.user_id;
     const productId = req.params.product_id;
     const reviews = await realyze("SELECT * FROM reviews WHERE user_id = ? AND product_id = ? ", [userId,productId]);
     res.send(reviews);
}
module.exports.ratingCounts = async (req, res) => {
     const productId = req.params.id;
     const cachesPath = variables.caches.review;
     if (fs.existsSync(`${cachesPath}/reviews/ratingByProduct.json`,)) {
          fs.readFile(`${cachesPath}/reviews/ratingByProduct.json`, 'utf-8',
          async function(err, data) {
               if (err) throw err;
               else {
                         const [lastReviewByProductId] = await realyze("SELECT MAX(id) AS max FROM reviews WHERE product_id = ?  ", [productId])
                         if (JSON.parse(data).length === lastReviewByProductId.max) {
                              console.log('read');
                              
                              const ratingCounts = getRatingCounts(JSON.parse(data));
                              res.send(ratingCounts);
                         }else{
                              const reviews = await realyze("SELECT id, rating FROM reviews WHERE product_id = ? ", [productId]);
                              fs_functions.writeCacheFile(
                                   `${cachesPath}/reviews/ratingByProduct.json`,
                                   reviews
                              );
                              const ratingCounts = getRatingCounts(reviews);
                              res.send(ratingCounts);
                         }
                    }                            
               
          })
     } else {
          const reviews = await realyze("SELECT id, rating FROM reviews WHERE product_id = ? ", [productId]);
          fs_functions.writeCacheFile(
               `${cachesPath}/reviews/ratingByProduct.json`,
               reviews
          );
          const ratingCounts = getRatingCounts(reviews);
          res.send(ratingCounts);
          
     }
}

module.exports.updateReviewById = async (req, res) => {
     try {
          const reviewId = req.params.review_id;
          const review = req.body.review_value;
          const rating = req.body.rating;
          const userId = req.body.user_id;
          // const productId = req.params.product_id;
          const cachesPath = variables.caches.review;
          await realyze("UPDATE reviews SET review = ?, rating = ?  WHERE id = ? ", [ review, rating,reviewId])
          const reviews = await realyze("SELECT * FROM reviews WHERE user_id = ? ORDER BY id DESC ", [userId]);
          const modReviews = await getReviewsByUser(reviews);
          fs_functions.writeCacheFile(
               `${cachesPath}/reviews/reviewsByUser.json`,
               modReviews
          );
          res.send(modReviews)
     } catch (error) {
          console.log(error);
          
     }
     //res.send(reviews);
}
module.exports.deleteReviewById = async (req, res) => {
     try {
          const userId = req.body.user_id;
          const cachesPath = variables.caches.review;
          const reviewId = req.params.review_id;
          await realyze("DELETE  FROM reviews  WHERE id = ? ", [reviewId])
          const reviews = await realyze("SELECT * FROM reviews WHERE user_id = ? ORDER BY id DESC ", [userId]);

          const modReviews = await getReviewsByUser(reviews);
          fs_functions.writeCacheFile(
               `${cachesPath}/reviews/reviewsByUser.json`,
               modReviews
          );
          res.send(modReviews)
          
     } catch (error) {
          console.log(error);
     }
}
module.exports.reviewByUserId = async (req, res) => {
     
     try {
          const cachesPath = variables.caches.review;
          const userId = req.params.user_id;
          if (fs.existsSync(`${cachesPath}/reviews/reviewsByUser.json`)) {
               fs.readFile(`${cachesPath}/reviews/reviewsByUser.json`, 'utf-8',
               async function(err, data) {
                    if (err) throw err;
                    else {
                         if(JSON.parse(data).length === 0) res.send([]);  
                         else{
                              const [lastReviewId] = await realyze("SELECT MAX(id) AS max FROM reviews WHERE user_id = ?", [userId]);
                              if (JSON.parse(data)[0].id < lastReviewId.max) {
                                   const reviews = await realyze("SELECT * FROM reviews WHERE user_id = ? ORDER BY id DESC  ", [userId]);
                                   const modReviews = await getReviewsByUser(reviews);
     
                                   fs_functions.writeCacheFile(
                                        `${cachesPath}/reviews/reviewsByUser.json`,
                                        modReviews
                                   );
                                   res.send(modReviews)
     
                              }else{
                                   res.send(data);
                              }
                         }                            
                    }
               })
          } else {
               const reviews = await realyze("SELECT * FROM reviews WHERE user_id = ? ORDER BY id DESC  ", [userId]);
               const modReviews = await getReviewsByUser(reviews);
               fs_functions.writeCacheFile(
                    `${cachesPath}/reviews/reviewsByUser.json`,
                    modReviews
               );
               res.send(modReviews)
          }
     } catch (error) {
          console.log(error);
     }
}
module.exports.getLatestReviews = async(req, res) => {
     try {
          const cachesPath = variables.caches.review;          
          if (fs.existsSync(`${cachesPath}/reviews/latest.json`)) {
               fs.readFile(`${cachesPath}/reviews/latest.json`, 'utf-8',
               async function(err, data) {
                    if (err) throw err;
                    else {                                   
                         const [lastReviewId] = await realyze("SELECT MAX(id) AS max FROM reviews ")
                         if (JSON.parse(data)[0].id < lastReviewId.max) {
                              const reviews = await realyze("SELECT * FROM reviews ORDER BY time_add DESC LIMIT 9");    
                              const modReviews = await getReviewsFromProducts(reviews);
                             
                              fs_functions.writeCacheFile(
                                   `${cachesPath}/reviews/latest.json`,
                                   modReviews);
                              res.send(modReviews);  
                         }else{
                              res.send(data);
                         }
                    }
               })
          } else {
               const reviews = await realyze("SELECT * FROM reviews ORDER BY time_add DESC LIMIT 9");    
               const modReviews = await getReviewsFromProducts(reviews)
               fs_functions.writeCacheFile(
                    `${cachesPath}/reviews/latest.json`,
                    modReviews
               );
               res.send(modReviews);
          }
     } catch (error) {
          console.log(error);
     }
}

module.exports.getRatedReviews = async (req,res) => {

     const reviews = await realyze("SELECT * FROM reviews ORDER BY rating DESC LIMIT 3");
     res.send(reviews)
}
