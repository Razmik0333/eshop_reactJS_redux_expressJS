const realyze = require('../config').realyze;
const functions = require('../functions/functions')

const [
     getMaxSoldedProducts,
     getMaxSoldedProductIds
] = functions.solded

const getMostestProductData = functions.mostestProduct;
const getMostestMaxObject = functions.mostestMaxObject;
const getMiddleRating = functions.middleRating;
module.exports.productsByCategory = async (req, res) => {
     const params = req.params.id;
     if (typeof +params === 'number' && !isNaN(+params)) {
          const result = await realyze("SELECT * FROM `products` WHERE `category`= ?  ORDER BY id DESC LIMIT ?", [params, 12]);
          res.send(result);
     }else{
          res.send([]);
     }
}
module.exports.similarProducts = async (req, res) => {
     const catId = req.params.catid;
     const prodId = req.params.prodid;
     if (typeof +catId === 'number' && !isNaN(+catId)) {
          const result = await realyze("SELECT * FROM `products` WHERE `category`= ? AND `id` != ? ORDER BY id DESC LIMIT ?", [catId, prodId, 8]);
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
     result['url'] = `/images/products/${req.params.id}.jpg`;
     res.send(result);
}

module.exports.productsByIds = async (req, res) => {
     const ids = req.params.ids;
     const result = await realyze(`SELECT * FROM products WHERE id IN (${ids})`, [ids]);
     res.send(result);
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

module.exports.evaluateProducts = async( req, res) => {
     const {
          rating,
          review,
          user_name,
          product_id,
          user_id,
          order_id,
          user_email
     } = req.body;

     typeof product_id === "object" ? 
          product_id.forEach(async(item, pos) => {
               await realyze("INSERT INTO reviews (user_id,order_id, product_id, rating, review, user_name, user_email, time_add) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", 
               [user_id[0], order_id[0], item, rating[pos], review[pos], user_name, user_email, `${Math.floor(Date.now()/1000)}`]
               )
               
          }) :

          await realyze("INSERT INTO reviews (user_id,order_id, product_id, rating, review, user_name, user_email, time_add) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", 
               [user_id[0], order_id, product_id, rating, review, user_name, user_email, `${Math.floor(Date.now()/1000)}`]
               )



     
     await realyze("UPDATE `orders` SET `user_status` = ? WHERE id = ? ", [4, order_id[0]]);
     
     res.send(JSON.stringify('1'))
}
module.exports.productsRating = async( req, res) => {
     const productsIdsString = req.params.id;
     const productsIdsData = productsIdsString.trim("").split(',');
     productsIdsData.forEach(async(item, pos) => {
         const productItem =  await realyze("SELECT rating FROM reviews WHERE product_id = ? ", [item]);
          const current = getMiddleRating(productItem)
          await realyze("UPDATE products SET rating = ?  WHERE id = ? ", [current, item] )
     })
     res.send(JSON.stringify('1'))
}

module.exports.mostestRating = async (req, res) => {
     const mostestData = await realyze("SELECT product_id, rating FROM reviews WHERE rating = 5 ", []);
     const mostData = mostestData.reduce((acc, curr) => {
          if(!(curr.product_id in acc) ){
               acc[curr.product_id] = {
                    rating : curr.rating,
                    count : 1
               }
          }else {
               acc[curr.product_id] = {
                    ...acc[curr.product_id],
                    count : ++acc[curr.product_id].count
               }
          }
          return acc;
     },{});
     let max = 0;
     let maxObj = {}
     for (const key in mostData) {
          if (mostData[key].count > max) {
               max = mostData[key].count; 
               maxObj = {
                    product_id : key,
                    count: max,
                    rating: mostData[key].rating
               } 
          }
     }
     const [maxRated] = await realyze("SELECT * FROM products WHERE id = ? ", [maxObj.product_id])
     res.send(JSON.stringify(maxRated))
}

module.exports.mostestSale = async(req, res) => {
     const saleProducts = await realyze("SELECT user_order FROM orders WHERE user_status = 4 ", []);
     const productsCounts = getMostestProductData(saleProducts,"user_order")
    const maxObj = getMostestMaxObject(productsCounts);
     const [maxSaled] = await realyze("SELECT * FROM products WHERE id = ? ", [maxObj.product_id])
     res.send(JSON.stringify(maxSaled))
}

module.exports.mostestRecent = async(req, res) => {
     const [lastProductId] = await realyze("SELECT MAX(id) AS max FROM products ")
     const [recentAddedProduct] = await realyze("SELECT * FROM products WHERE id = ? ", [lastProductId.max])
     res.send(JSON.stringify(recentAddedProduct))
}


module.exports.mostestDesired = async(req, res) => {
     const cartsByUsers = await realyze("SELECT cart FROM user_interest");
     const filteredCart = cartsByUsers.filter(item => Boolean(item.cart) === true);
     const desiredProducts = getMostestProductData(filteredCart,"cart")
     const maxObj = getMostestMaxObject(desiredProducts);
     const [maxDesired] = await realyze("SELECT * FROM products WHERE id = ? ", [maxObj.product_id])
     
     res.send(JSON.stringify(maxDesired))
}


