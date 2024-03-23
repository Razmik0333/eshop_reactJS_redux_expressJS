const fs = require('fs');
const realyze = require('../../config').realyze;
const fs_functions = require('../../functions/fs_functions');
const variables = require('../../variables/variables');

module.exports.productsList = async(req, res) => {
     //const id = req.params.id; //
     const cachesPathAdmin = variables.cachesAdmin.product;
     if (fs.existsSync(`${cachesPathAdmin}/caches_admin_product.json`)) {
          fs.readFile(`${cachesPathAdmin}/caches_admin_product.json`, 'utf-8',
          async function(err, data) {
               if (err) throw err;
               else {          
                    const [productCounts] = await realyze("SELECT COUNT(id) AS count FROM products ")
                    if (JSON.parse(data).length < productCounts.count) {
                         const products = await realyze("SELECT * FROM products ");
                         fs_functions.writeCacheFile(
                              `${cachesPathAdmin}/caches_admin_product.json`,
                              products
                         )
                         res.send(products);
                    }else{
                         console.log('read');
                         res.send(data);
                    }
               }
          }
          )
     }else{
          const products = await realyze("SELECT * FROM products ");
          fs_functions.writeCacheFile(
               `${cachesPathAdmin}/caches_admin_product.json`,
               products
          )
          res.send(products)

     }
}
module.exports.delete = async (req, res) => {
     const productId = req.body.product_id
     console.log("🚀 ~ file: products.js:11 ~ module.exports.delete ~ productId:", productId)
     await realyze("DELETE FROM products WHERE id = ? ", [productId]);
     const productsAfterDelete = await realyze("SELECT * FROM products ");
     res.send(productsAfterDelete);
}
module.exports.getAdminProductById = async(req, res) => {
     const product_id = req.params.product_id;
     const [currentProduct] = await realyze("SELECT * FROM `products` WHERE id = ? ", [product_id])
     res.send(currentProduct);

}

module.exports.create = async(req, res) => {
     const body = req.body;
     await realyze("INSERT INTO `products` (category, alias, arm_name, descr, cost, discount, is_recomended, availability, main, `1c_articul`, time_add) VALUES (?,?,?,?,?,?,?,?,?,?,?) ",
          [body.category, body.alias,body.arm_name, body.descr, body.cost, body.discount, body.is_recommended, body.availability, body.main, body['1c_articul'], Date.now()]);
     res.send(JSON.stringify('ok'));
     
}

module.exports.update = async(req, res) => {
     const body = req.body;
     await realyze("UPDATE `products` SET category = ?, alias= ?, arm_name=?, descr= ?, cost= ?, discount= ?, is_recomended= ?, availability= ?, main= ?, `1c_articul`= ?, time_add= ? WHERE id = ?",
          [body.category, body.alias,  body.arm_name, body.descr, body.cost, body.discount, body.is_recomended, body.availability,body.main, body[`1c_articul`], Date.now(), body.id])
     const updatedProduct = await realyze("SELECT * FROM products WHERE id = ? ", [body?.id])
     res.send(updatedProduct)
}
module.exports.addProductsWithList = async(req, res) => {
     
     console.log(req.body);
     
}
