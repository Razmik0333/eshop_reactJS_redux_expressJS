const realyze = require('../config').realyze

module.exports.reviewList = async (req, res) => {
     const productId = req.params.id;
     const reviews = await realyze("SELECT * FROM reviews WHERE product_id = ? ", [productId]);
     res.send(reviews)
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
