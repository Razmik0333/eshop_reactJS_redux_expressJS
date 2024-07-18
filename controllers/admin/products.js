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
     const cachesPathAdmin = variables.cachesAdmin.product;
     const productId = req.body.product_id
     console.log("🚀 ~ file: products.js:11 ~ module.exports.delete ~ productId:", productId)
     await realyze("DELETE FROM products WHERE id = ? ", [productId]);
     const productsAfterDelete = await realyze("SELECT * FROM products ");
     fs_functions.writeCacheFile(
          `${cachesPathAdmin}/caches_admin_product.json`,
          productsAfterDelete
     )
     res.send(productsAfterDelete);
}
module.exports.getAdminProductById = async(req, res) => {
     const product_id = req.params.product_id;
     const [currentProduct] = await realyze("SELECT * FROM `products` WHERE id = ? ", [product_id])
     res.send(currentProduct);

}


module.exports.create = async(req, res) => {
     const body = req.body;
     console.log("🚀 ~ module.exports.create=async ~ body:", body)
      await realyze("INSERT INTO `products` (category, alias, arm_name, sub_category, descr, descr_en,descr_ru, cost, discount, is_recomended, availability, main, `1c_articul`, time_add) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?) ",
           [body.category, body.alias, body.arm_name,body.sub_category, body.descr, body.descr_en,body.descr_ru, body.cost, body.discount, body.is_recommended, body.availability, body.main, body['1c_articul'], Date.now()]);
    
          res.send(JSON.stringify('ok'));
     
}

module.exports.update = async(req, res) => {
     const body = req.body;
     const cachesPathAdmin = variables.cachesAdmin.product;

     await realyze("UPDATE `products` SET category = ?, alias= ?, arm_name=?, descr= ?,descr_en = ?,descr_ru = ?, cost= ?, discount= ?, is_recomended= ?, availability= ?, main= ?, `1c_articul`= ?, time_add= ? WHERE id = ?",
          [body.category, body.alias,  body.arm_name, body.descr,body.descr_en,body.descr_ru, body.cost, body.discount, body.is_recomended, body.availability,body.main, body[`1c_articul`], Date.now(), body.id])
     const updatedProduct = await realyze("SELECT * FROM products WHERE id = ? ", [body?.id]);
     const products = await realyze("SELECT * FROM products ");

     fs_functions.writeCacheFile(
          `${cachesPathAdmin}/caches_admin_product.json`,
          products
     )
     res.send(updatedProduct);

}
module.exports.save = async(req, res) => {
     const cachesPath = variables.caches.product;
     const pathArray = [`products`, `filtered_products/glass`,`filtered_products/wooden`,`filtered_products/topper`,'large_discount','similar','solded','mosest','recomended'];
     pathArray.forEach(item => {
          
          fs.readdir(cachesPath + item,async (err, files) => {
               if (err) throw err;
               for (const file of files) {
                    fs.unlink(path.join(cachesPath + item, file), (err) => {
                              if (err) throw err;
                    });
               }
          });

          
     })
     res.send(JSON.stringify('saved'));

}
module.exports.addProductsWithList = async(req, res) => {
     if (fs.existsSync(path.resolve() + "/upload/data/data.xlsx")) {
          
          const workbook = XLSX.readFile(path.resolve() + "/upload/data/data.xlsx");
          let worksheet = workbook.Sheets[workbook.SheetNames[0]];
          const lastFieldIndex = worksheet['!ref'].split(":")[1];
          const rows = +lastFieldIndex.slice(1, lastFieldIndex.length) +1
          for (let index = 2; index < rows; index++) {
               
               const category = worksheet[`B${index}`].v
               const alias = worksheet[`C${index}`].v;
               const arm_name = worksheet[`D${index}`].v;
               const sub_category = worksheet[`E${index}`].v;
               const descr = worksheet[`F${index}`].v;
               const descr_eng = worksheet[`G${index}`].v;
               const descr_rus = worksheet[`H${index}`].v;
               const title = worksheet[`I${index}`].v;
               const cost = worksheet[`J${index}`].v;
               const discount = worksheet[`K${index}`].v;
               const is_recommended = worksheet[`L${index}`].v;
               const availability = worksheet[`M${index}`].v;
               const main = worksheet[`N${index}`].v;
               const articul = worksheet[`O${index}`].v;
               await realyze("INSERT INTO `products` (category, alias, arm_name, sub_category, descr, descr_en, descr_ru, title, cost, discount, is_recomended, availability, main, `1c_articul`, time_add) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ",
               [category, alias,arm_name,sub_category, descr, descr_eng, descr_rus,title, cost, discount, is_recommended, availability, main,articul, Date.now()]);
          }
          // const [lastId] = await realyze("SELECT LAST_INSERT_ID() AS last_id FROM `products`"); 
          // console.log("🚀 ~ filename: ~ lastId:funcInsert", lastId)
          res.send(JSON.stringify(1))
     }else{
          res.send(JSON.stringify(0))
     }
}

module.exports.gallery = async (req, res) => {
     const body = req.body;
     //`performed_works`
     if(body.description.length > 0){
          await realyze("INSERT INTO `performed_works` (`description`, time_add) VALUES (?,?) ",
               [body.description,  Date.now()]);
          res.send(JSON.stringify('ok'));
     } else{
          res.send(JSON.stringify('bad'));
     }
}
