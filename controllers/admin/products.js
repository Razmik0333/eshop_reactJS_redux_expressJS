const realyze = require('../../config').realyze


module.exports.productsList = async(req, res) => {
     //const id = req.params.id; //
     const products = await realyze("SELECT * FROM products ")
     res.send(products)
}
module.exports.delete = async (req, res) => {
     const productId = req.params.product_id
     await realyze("DELETE FROM products WHERE id = ? ", [productId]);
     const productsAfterDelete = await realyze("SELECT * FROM products ");
     res.send(productsAfterDelete);
}
module.exports.getAdminProductById = async(req, res) => {
     const product_id = req.params.product_id;
     const [currentProduct] = await realyze("SELECT * FROM `products` WHERE id = ? ", [product_id])
     console.log("🚀 ~ file: products.js:19 ~ module.exports.getAdminProductById=async ~ currentProduct:", currentProduct)
     res.send(currentProduct);

}

module.exports.create = async(req, res) => {
     const body = req.body;
     await realyze("INSERT INTO `products` (category, alias, descr, cost, discount, is_recomended, availability, main, `1c_articul`, time_add) VALUES (?,?,?,?,?,?,?,?,?,?) ",
          [body.category, body.alias, body.descr, body.cost, body.discount, body.is_recomended, body.availability,body.main, body[`1c_articul`], body.time_add])

     res.redirect('/hye');
     
}
module.exports.update = async(req, res) => {
     const body = req.body;
     await realyze("UPDATE `products` SET category = ?, alias= ?, descr= ?, cost= ?, discount= ?, is_recomended= ?, availability= ?, main= ?, `1c_articul`= ?, time_add= ?",
          [body.category, body.alias, body.descr, body.cost, body.discount, body.is_recomended, body.availability,body.main, body[`1c_articul`], body.time_add])
     res.redirect('/hye');
     
}
