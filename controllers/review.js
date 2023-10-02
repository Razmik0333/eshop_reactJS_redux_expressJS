const fs = require('fs')
const fsPromises = require('fs/promises');
const realyze = require('../config').realyze;
const path = require('path')
module.exports.reviewList = async (req, res) => {
     const productId = req.params.id;
     const reviews = await realyze("SELECT * FROM reviews WHERE product_id = ? ", [productId]);
     try {
          const urlReview = path.resolve() + `/public/images/reviews`;

          const newReviews = await Promise.all(reviews.map(async(item) => {
               
               const url = `${urlReview}/${item.user_id}/${item.order_id}/${item.product_id}`;
               const files = fs.existsSync(url) ? await fsPromises.readdir(url) : []
               return await {
                    ...item,
                    pictures: files,
               }
          }))

          
          res.send(newReviews)
          
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
     const reviews = await realyze("SELECT id, rating FROM reviews WHERE product_id = ? ", [productId]);
     const ratingCounts = reviews.reduce((acc, curr) => {
          if (!(curr.rating in acc)) {
               acc[curr.rating] = {
                    count : 1
               }
          }else{
               acc[curr.rating] = {
                    count : +acc[curr.rating].count + 1
               }
          }
          return acc
     },{})
     res.send(ratingCounts);
}

module.exports.updateReviewById = async (req, res) => {
     const reviewId = req.params.review_id;
     const review = req.body.review_value;
     const rating = req.body.rating;
     const userId = req.body.user_id;
     // const productId = req.params.product_id;
     await realyze("UPDATE reviews SET review = ?, rating = ?  WHERE id = ? ", [ review, rating,reviewId])
     const reviews = await realyze("SELECT * FROM reviews WHERE user_id = ? ", [userId]);
     try {
          const modReviews = await Promise.all(reviews.map(async(item) => {
               const productId = item.product_id;
               const [productItem] = await realyze("SELECT * FROM products WHERE id = ?  ", [productId]);
               const url = `public/images/reviews/${item.user_id}/${item.order_id}/${item.product_id}`
               const files = fs.existsSync(url) ? await fsPromises.readdir(url) : []

               return await {
                    ...item,
                    product: productItem,
                    pictures: files,
               }
          }))
          res.send(modReviews)
          
     } catch (error) {
          console.log(error);
          
     }
     //res.send(reviews);
}
module.exports.deleteReviewById = async (req, res) => {
     const userId = req.body.user_id;

     const reviewId = req.params.review_id;
     await realyze("DELETE  FROM reviews  WHERE id = ? ", [ reviewId])
     const reviews = await realyze("SELECT * FROM reviews WHERE user_id = ? ", [userId]);
     try {
          const modReviews = await Promise.all(reviews.map(async(item) => {
               const productId = item.product_id;
               const [productItem] = await realyze("SELECT * FROM products WHERE id = ?  ", [productId]);
               const url = `public/images/reviews/${item.user_id}/${item.order_id}/${item.product_id}`
               const files = fs.existsSync(url) ? await fsPromises.readdir(url) : []
               return await {
                    ...item,
                    product: productItem,
                    pictures: files,
               }
          }))
          res.send(modReviews)
          
     } catch (error) {
          console.log(error);
     }
}
module.exports.reviewByUserId = async (req, res) => {
     
      const userId = req.params.user_id;
      const reviews = await realyze("SELECT * FROM reviews WHERE user_id = ?  ", [userId]);
      try {
          const modReviews = await Promise.all(reviews.map(async(item) => {
               const productId = item.product_id;
               const [productItem] = await realyze("SELECT * FROM products WHERE id = ?  ", [productId]);
               const url = `public/images/reviews/${item.user_id}/${item.order_id}/${item.product_id}`
               const files = fs.existsSync(url) ? await fsPromises.readdir(url) : []
               return await {
                    ...item,
                    product: productItem,
                    pictures: files,
               }
          }))
          res.send(modReviews)
          
     } catch (error) {
          console.log(error);
          
     }
}
module.exports.getLatestReviews = async(req, res) => {
     const reviews = await realyze("SELECT * FROM reviews ORDER BY time_add DESC LIMIT 9");    
     try {
          const modReviews = await Promise.all(reviews.map(async(item) => {
               const avatarUrl = `public/images/users/${item.user_id}`;
               const productUrl = `public/images/reviews/${item.user_id}/${item.order_id}/${item.product_id}`;
               const productId = item.product_id;

               const [productItem] = await realyze("SELECT * FROM products WHERE id = ?  ", [productId]);
              // const files = fs.existsSync(url) ? await fsPromises.readdir(url) : []

               const avatarFiles = fs.existsSync(avatarUrl) ?  await fsPromises.readdir(avatarUrl) : [];
               const productPictures = fs.existsSync(productUrl) ? await fsPromises.readdir(productUrl) 
               :[];
               return await {
                    ...item,
                    product: productItem,
                    productPictures: productPictures,
                    avatarPicture: avatarFiles[0],
               }
          }))
          res.send(modReviews)
          
     } catch (error) {
          console.log(error);
     }
     //res.send(reviews);
}

module.exports.getRatedReviews = async (req,res) => {

     const reviews = await realyze("SELECT * FROM reviews ORDER BY rating DESC LIMIT 3");
     console.log("🚀 ~ file: review.js:135 ~ module.exports.getRatedReviews= ~ reviews:", reviews)
     res.send(reviews)
}
