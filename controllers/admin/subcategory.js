const realyze = require('../../config').realyze



module.exports.allSubCategoriesList = async(req, res) => {
     const subCategoriesList = await realyze("SELECT * FROM subcategory" )
     res.send(subCategoriesList);
}

module.exports.subCategoriesListByCategory = async(req, res) => {
     const catId = req.params.id;
     const subCategoriesList = await realyze("SELECT * FROM subcategory WHERE category = ? ", [catId] )
     res.send(subCategoriesList);
}
