const realyze = require('../config').realyze
const fsPromises = require('fs/promises');
module.exports.reviewList = async (req, res) => {
     const productId = req.params.id;
     console.log("🚀 ~ file: review.js:5 ~ module.exports.reviewList= ~ productId:", productId)
     const reviews = await realyze("SELECT * FROM reviews WHERE product_id = ? ", [productId]);
     try {
          const newReviews = await Promise.all(reviews.map(async(item) => {
               const url = `public/images/reviews/${item.user_id}/${item.order_id}/${item.product_id}`
               const files =  await fsPromises.readdir(url)
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
module.exports.updateReviewById = async (req, res) => {
     console.log(req.params);
     console.log(req.body);
     
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
               const files =  await fsPromises.readdir(url)
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
     console.log(req.params);
     console.log(req.body);
     const userId = req.body.user_id;

     const reviewId = req.params.review_id;
     // const productId = req.params.product_id;
     await realyze("DELETE  FROM reviews  WHERE id = ? ", [ reviewId])
     const reviews = await realyze("SELECT * FROM reviews WHERE user_id = ? ", [userId]);
     try {
          const modReviews = await Promise.all(reviews.map(async(item) => {
               const productId = item.product_id;
               const [productItem] = await realyze("SELECT * FROM products WHERE id = ?  ", [productId]);
               const url = `public/images/reviews/${item.user_id}/${item.order_id}/${item.product_id}`
               const files =  await fsPromises.readdir(url)
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
module.exports.reviewByUserId = async (req, res) => {
     
      const userId = req.params.user_id;
      const reviews = await realyze("SELECT * FROM reviews WHERE user_id = ?  ", [userId]);
      try {
          const modReviews = await Promise.all(reviews.map(async(item) => {
               const productId = item.product_id;
               const [productItem] = await realyze("SELECT * FROM products WHERE id = ?  ", [productId]);
               const url = `public/images/reviews/${item.user_id}/${item.order_id}/${item.product_id}`
               const files =  await fsPromises.readdir(url)
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
     // res.send(JSON.stringify(reviews));
}
module.exports.getLatestReviews = async(req, res) => {
     const reviews = await realyze("SELECT * FROM reviews ORDER BY time_add DESC LIMIT 3");
     res.send(reviews);
}
