const fs = require('fs');
const realyze = require('../../config').realyze;

module.exports.reviewsList = async (req,res) => {
     const reviews = await realyze("SELECT * FROM reviews ");
     res.send(reviews)
}
