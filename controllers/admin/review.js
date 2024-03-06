module.exports.getReviewsList = async (req,res) => {

     const reviews = await realyze("SELECT * FROM reviews ORDER BY rating DESC LIMIT 3");
     console.log("🚀 ~ module.exports.getRatedReviews= ~ reviews:", reviews)
     res.send(reviews)
}
