const realyze = require('../../config').realyze



module.exports.subCategoriesList = async(req, res) => {
     const catId = req.params.id;
     const subCategoriesList = await realyze("SELECT * FROM subcategory WHERE category = ? ", [catId] )
     res.send(subCategoriesList);
}
