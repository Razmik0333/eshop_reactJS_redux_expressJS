const fs = require('fs');
const realyze = require('../../config').realyze;
const path = require("path")
const functions = require('../../functions/functions');
const getTokensForQuery = functions.query;
const getAdminCurrentOrderData = functions.adminOrderCurrentData;

const fs_functions = require('../../functions/fs_functions')
const variables = require('../../variables/variables')
module.exports.adminOrdersList = async(req, res) => {
     //const id = req.params.id; //
     console.log('jhbfm');
     
     const cachesPathAdmin = variables.cachesAdmin.order;
     if (fs.existsSync(`${cachesPathAdmin}/caches_admin_order.json`)) {
          fs.readFile(`${cachesPathAdmin}/caches_admin_order.json`, 'utf-8',
          async function(err, data) {
               if (err) throw err;
               else {          
                    const [orderCounts] = await realyze("SELECT COUNT(id) AS count FROM orders ")
                    if (JSON.parse(data).length < orderCounts.count) {
                         const orders = await realyze("SELECT * FROM orders ");

                         fs_functions.writeCacheFile(
                              `${cachesPathAdmin}/caches_admin_order.json`,
                              orders
                         )
                         res.send(orders)
                    }else{
                         console.log('read');
                         
                         res.send(data);
                    }
               }
          }
          )
     }else{
          const orders = await realyze("SELECT * FROM orders ");
          fs_functions.writeCacheFile(
               `${cachesPathAdmin}/caches_admin_order.json`,
               orders
          )
          res.send(orders)
     }
}



module.exports.adminOrderById = async(req, res) => {
     const orderId = req.params.order_id; //
     const cachesPathAdmin =variables.cachesAdmin.order;
     if (fs.existsSync(`${cachesPathAdmin}/caches_admin_current_order.json`)) {
          fs.readFile(`${cachesPathAdmin}/caches_admin_current_order.json`, "utf-8",
          async function(err, data) {
               if (err) throw err;
               else {     
                         
                    if (+JSON.parse(data).id !== +orderId) {
                         const [orderById] = await realyze("SELECT * FROM orders WHERE id = ? ", [orderId]);
                         const orderByIdWithProducts = await getAdminCurrentOrderData(orderById);

                         fs_functions.writeCacheFile(
                              `${cachesPathAdmin}/caches_admin_current_order.json`,
                              orderByIdWithProducts
                         )
                         res.send(orderByIdWithProducts)
                    }else{
                         console.log('read');
                         
                         res.send(data);
                    }
               }
          })
     }else{
          const [orderById] = await realyze("SELECT * FROM orders WHERE id = ? ", [orderId]);
          const orderByIdWithProducts = await getAdminCurrentOrderData(orderById);
          fs_functions.writeCacheFile(
               `${cachesPathAdmin}/caches_admin_current_order.json`,
               orderByIdWithProducts
          )
          res.send(orderByIdWithProducts)
     }
    // res.send(orderByIdWithProducts);
}

module.exports.adminStatusUpdate = async (req, res) => {
     const orderId = req.params.order_id; //
     const statusIndex = req.body.user_status;
     const cachesPathAdmin =variables.cachesAdmin.order;

     console.log("🚀 ~ module.exports.adminStatusUpdate= ~ statusIndex:", statusIndex)
     await realyze("UPDATE `orders` SET user_status = ? WHERE id = ? ", [statusIndex, orderId]);
     const updatedOrder = await realyze("SELECT * FROM `orders` WHERE id = ?", [orderId]);
     const allOrders = await realyze("SELECT * FROM `orders` ");
     fs_functions.writeCacheFile(
          `${cachesPathAdmin}/caches_admin_order.json`,
          allOrders
     )
     res.send(updatedOrder);
}
module.exports.adminOrderDelete = async (req, res) => {
     const orderId = req.body.order_id;
     await realyze("DELETE FROM orders WHERE id = ? ", [orderId]);
     const ordersAfterDelete = await realyze("SELECT * FROM orders ");
     res.send(ordersAfterDelete);
}
module.exports.adminOrderSave = async (req, res) => {
     const cachesPath = variables.caches.order;
     //const pathArray = [`orders`, `filtered_products`,'large_discount'];
   //  pathArray.forEach(item => {
          fs.readdir(cachesPath + `orders`,async (err, files) => {
               if (err) throw err;
               console.log(files);
               
               for (const file of files) {
                    fs.unlink(path.join(cachesPath + `orders`, file), (err) => {
                              if (err) throw err;
                    });
               }
          });
          
   //  })
     res.send(JSON.stringify('saved'));
}
