const realyze = require('../config').realyze
const fsPromises = require('fs/promises');
module.exports.reviewList = async (req, res) => {
     const productId = req.params.id;
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
module.exports.getLatestReviews = async(req, res) => {
     const reviews = await realyze("SELECT * FROM reviews ORDER BY time_add DESC LIMIT 3");
     res.send(reviews);
}
