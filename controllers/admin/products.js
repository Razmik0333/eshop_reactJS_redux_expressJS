const fs = require('fs');
const realyze = require('../../config').realyze;
const fs_functions = require('../../functions/fs_functions');
const variables = require('../../variables/variables');
const path = require("path");
const XLSX = require('xlsx');


//
module.exports.productsList = async(req, res) => {

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

     console.log(path.resolve() + "/data/data.xlsx")
     if (fs.existsSync(path.resolve() + "/upload/data/data.xlsx")) {
          
          const workbook = XLSX.readFile(path.resolve() + "/upload/data/data.xlsx");
          let worksheet = workbook.Sheets[workbook.SheetNames[0]];
      
          for (let index = 2; index <= 7; index++) {
               const category = worksheet[`B${index}`].v
               const alias = worksheet[`C${index}`].v;
               const arm_name = worksheet[`D${index}`].v;
               const descr = worksheet[`E${index}`].v;
               const title = worksheet[`F${index}`].v;
               const cost = worksheet[`G${index}`].v;
               const discount = worksheet[`H${index}`].v;
               const is_recommended = worksheet[`J${index}`].v;
               const availability = worksheet[`K${index}`].v;
               const main = worksheet[`L${index}`].v;
               const articul = worksheet[`M${index}`].v;
               await realyze("INSERT INTO `products` (category, alias, arm_name, descr,title, cost, discount, is_recomended, availability, main, `1c_articul`, time_add) VALUES (?,?,?,?,?,?,?,?,?,?,?,?) ",
               [category, alias,arm_name, descr,title, cost, discount, is_recommended, availability, main,articul, Date.now()]);
          }
          res.send(JSON.stringify(1))
     }else{
          res.send(JSON.stringify(0))
     }
     
}
