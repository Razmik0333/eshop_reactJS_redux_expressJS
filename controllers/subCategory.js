const fs = require('fs')
const path = require('path');
const realyze = require('../config').realyze;
const fs_functions = require('../functions/fs_functions');
const variables = require('../variables/variables');
const functions = require('../functions/functions');
const cachesPath = variables.caches.category;    
const getSubCategoriesWithCount = functions.subCategoriesWithCount;

module.exports.subCategories = async (req, res) => {
     const catId = req.params.catId;
     const result = await realyze("SELECT * FROM `subcategory` WHERE `category`= ? ", [catId]);
     const subCategoryWithCounts = await getSubCategoriesWithCount(result, catId)
     console.log("🚀 ~ module.exports.subCategories= ~ result:", result)
     
     res.send(subCategoryWithCounts);
}
module.exports.productsBySubCategories = async (req, res) => {
     
     const category = req.params.category;
     const sub_category = req.params.sub_category;
     const result = await realyze("SELECT * FROM `products` WHERE `category`= ? AND sub_category = ? ", [category, sub_category]);
     res.send(result);
}
