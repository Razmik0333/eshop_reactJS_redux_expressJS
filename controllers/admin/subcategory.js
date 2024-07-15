const realyze = require('../../config').realyze



module.exports.allSubCategoriesList = async(req, res) => {
     
     const subCategoriesList = await realyze("SELECT * FROM subcategory" )
     console.log("🚀 ~ module.exports.allSubCategoriesList=async ~ subCategoriesList:", subCategoriesList)
     res.send(subCategoriesList);
}

module.exports.subCategoriesListByCategory = async(req, res) => {
     const catId = req.params.id;
     const subCategoriesList = await realyze("SELECT * FROM subcategory WHERE category = ? ", [catId] )
     res.send(subCategoriesList);
}
module.exports.currentSubCategory = async(req, res) => {
     const subCatId = req.params.id;
     const [currentSubCategory] = await realyze("SELECT * FROM subcategory WHERE id = ? ", [subCatId])
     res.send(currentSubCategory);
}
module.exports.create = async(req, res) => {
     const body = req.body;
     const categoryId = body.category;
     const [maxIdByCategory] = await realyze("SELECT MAX(sub_category) as max FROM `subcategory` WHERE category = ?  ", [categoryId]) 
     await realyze("INSERT INTO `subcategory` (category,sub_category,arm_name, rus_name,eng_name, alias) VALUES (?,?,?,?,?,?) ",
           [categoryId, maxIdByCategory.max + 1,body.arm_name, body.rus_name,body.eng_name,body.alias]);
     const [maxSubCatId] = await realyze("SELECT MAX(id) AS max FROM subcategory ");
     const [currentSubCategory] = await realyze("SELECT * FROM subcategory WHERE id = ? ", [maxSubCatId.max])
     res.send(currentSubCategory)
}

module.exports.update = async(req, res) => {
     const body = req.body;
     await realyze("UPDATE `subcategory` SET `alias` = ?, `arm_name` = ?, `rus_name` = ?, `eng_name` = ?  WHERE `id` = ? ", [body.alias, body.arm_name, body.rus_name,body.eng_name, body.id ]);
     const [updatedSubCategory] = await realyze("SELECT * FROM subcategory WHERE id = ? ", [body?.id]);
     res.send(updatedSubCategory)
}
module.exports.delete = async(req, res) => {
     const subCategoryId = req.body.sub_category_id
     await realyze("DELETE FROM subcategory WHERE id = ?", [subCategoryId]);
     const subCategoriesAfterDelete = await realyze("SELECT * FROM subcategory ");
     console.log("🚀 ~ module.exports.delete ~ subCategoriesAfterDelete:", subCategoriesAfterDelete)

     res.send(subCategoriesAfterDelete);
}
