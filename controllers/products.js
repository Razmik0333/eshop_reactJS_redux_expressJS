const fs = require('fs');
const path = require('path')
const realyze = require('../config').realyze;
const functions = require('../functions/functions')

const [
     getMaxSoldedProducts,
     getMaxSoldedProductIds
] = functions.solded
module.exports.productsByCategory = async (req, res) => {
     const params = req.params.id;
     if (typeof +params === 'number' && !isNaN(+params)) {
          const result = await realyze("SELECT * FROM `products` WHERE `category`= ?  ORDER BY id DESC LIMIT ?", [params, 12]);
          res.send(result);
     }else{
          res.send([]);
     }
}
module.exports.productsByLargeDiscount = async (req, res) => {
     const result = await realyze("SELECT MAX(discount) AS max FROM `products` ");
     const max = result[0]?.max;
     const discountedProducts = await realyze("SELECT * FROM `products` WHERE discount = ? ORDER BY id DESC LIMIT ?", [max, 3])
     res.send(discountedProducts);
}
module.exports.recommendedProducts = async (req, res) => {
     const result = await realyze("SELECT * FROM `products` WHERE `is_recomended` = ? ORDER BY id DESC LIMIT ?", [1, 5]);
     res.send(result);
}
module.exports.filteredProducts = async (req, res) => {
     const result = await realyze("SELECT * FROM `products` WHERE `category` = ? ORDER BY id DESC ", [req.params.id, 8]);
     res.send(result);
}
module.exports.productById = async (req, res) => {
     const [result] = await realyze("SELECT * FROM `products` WHERE `id` = ? ", [req.params.id]);
     result['url'] = `/images/${req.params.id}.jpg`;
     res.send(result);
     

}
module.exports.productsByIds = async (req, res) => {
     const ids = req.params.ids;
     const result = await realyze(`SELECT * FROM products WHERE id IN (${ids})`, [ids]);
     res.send(result)
}

module.exports.productsBetweenCosts = async (req, res) => {
     const category = req.query.category;
     const start = req.query.start;
     const final = req.query.final;
     const result = await realyze("SELECT * FROM products WHERE category = ? AND cost >= ? AND cost < ? ", [category,start, final]);
     res.send(result)
}
module.exports.search = async (req, res) => {
     const search = req.query.search;
     const searched = await realyze("SELECT * FROM products WHERE main LIKE ?", [`%${search}%`]);
     res.send(searched)
}
module.exports.hintAdd = async (req, res) => {
     const userId = req.body.user_id;
     const hint = req.params.hint;
     console.log("🚀 ~ file: products.js:60 ~ module.exports.hintAdd= ~ userId:", userId)
     if (userId) {
          const [currentSearched] = await realyze("SELECT search_items FROM user_interest WHERE user_id = ? ", [userId])
          const search_items = currentSearched.search_items;
          const newHint = `${search_items}|${hint}`;
          !search_items.includes(hint) &&
          await realyze("UPDATE `user_interest` SET `search_items` = ? WHERE `user_id`= ? ", [newHint,userId]);
          res.send(JSON.stringify(hint))
     }
     
}
module.exports.hint = async (req, res) => {
     const userId = req.body.user_id;
     
     if (userId) {
          const [currentSearched] = await realyze("SELECT search_items FROM user_interest WHERE user_id = ? ", [userId])
          const search_items = currentSearched.search_items;
         const hintArr = search_items
                              .split("|")
                              .map((item, pos) => {
                                   return {
                                   'id' : pos,
                                   'descr' : item,
                                   }
                              })
                              .sort((a, b) =>  b.id - a.id)
                              return res.send(hintArr)
     }
     return  res.send([])


}
module.exports.sold = async (req, res) => {
     const user_orders = await realyze(`SELECT user_order FROM orders `);
     const productObj = getMaxSoldedProducts(user_orders);
     const productIds = getMaxSoldedProductIds(productObj);
     const result = await realyze(`SELECT * FROM products WHERE id IN (? , ? , ?, ?)`, productIds);
     res.send(result)
}
