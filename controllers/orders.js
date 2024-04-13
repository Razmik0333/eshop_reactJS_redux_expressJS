const realyze = require('../config').realyze;
const fs = require('fs');
const path = require('path');
const functions = require('../functions/functions');
const fs_functions = require('../functions/fs_functions');
const variables = require('../variables/variables');
//const getTokensForQuery = functions.query;
const getProductsFromOrdersList = functions.getProductsFromOrdersList
module.exports.ordersByUser = async (req, res) => {
     
     const userId = req.params.id;
     const orders = await realyze("SELECT * FROM orders WHERE user_id = ? ", [userId]);
     res.send(orders)
}
module.exports.allOrdersByUser = async (req, res) => {
     try {
          const cachesPath = variables.caches.order;
          const userId = req.params.id;          
          if (!fs.existsSync(`${cachesPath}/orders/${userId}`)) {
               fs.mkdir(`${cachesPath}/orders/${userId}`,{recursive: true}, (err) => {
                    if (err) throw err
               });
          }
               if (fs.existsSync(`${cachesPath}/orders/${userId}/all-orders.json`)) {
                    fs.readFile(`${cachesPath}/orders/${userId}/all-orders.json`,'utf8',
                    async function(err, data) {
                         if (err) throw err;
                         else {          
                              const [orderCountByStatus] = await realyze("SELECT COUNT(id) AS count FROM orders WHERE user_id = ? ", [userId])
                              
                              
                              if (JSON.parse(data).length < orderCountByStatus.count) {
     
                                   const orders = await realyze("SELECT id, user_order, user_status, user_price FROM orders WHERE user_id = ? ", [userId]);
                                   const resArray = await getProductsFromOrdersList(orders);
                                   fs_functions.writeCacheFile(
                                        `${cachesPath}/orders/${userId}/all-orders.json`,
                                        resArray
                                   )
                                   res.send(resArray);
                              }else{
                                   res.send(data);
                              }
                         }
                    }
                    )
               } else {
                    const ordersByUser = await realyze("SELECT id, user_order, user_status, user_price, time_add FROM orders WHERE user_id = ? ", [userId]);
                    const resArray = await getProductsFromOrdersList(ordersByUser);
               
                    fs_functions.writeCacheFile(
                         `${cachesPath}/orders/${userId}/all-orders.json`,
                         resArray
                    )
                    res.send(JSON.stringify(resArray, undefined, 2));
                    
               }
          
          
     } catch (err) {
          throw err;
     }
}
//
module.exports.getProductsByOrder = async (req, res) => {
     const orderId = req.params.id;
     const order = await realyze(`SELECT * FROM orders WHERE id = ? `, [orderId]);
     const [resArray] = await getProductsFromOrdersList(order)
     res.send(resArray?.user_order)
}

module.exports.ordersByStatus = async (req, res) => {

     try {
          const userId = req.params.id;
          const status = req.body.status;
          const statusTypeObj = functions.statusIndex(status)
          const cachesPath = variables.caches.order;
          if (!fs.existsSync(`${cachesPath}/orders/${userId}`)) {
               fs.mkdir(`${cachesPath}/orders/${userId}`,{recursive: true}, (err) => {
                    if (err) throw err
               });
          }
          if (fs.existsSync(`${cachesPath}/orders/${userId}/${statusTypeObj.status}.json`)) {
               fs.readFile(`${cachesPath}/orders/${userId}/${statusTypeObj.status}.json`, 'utf-8',
               async function(err, data) {
                    if (err) throw err;
                    else {   
                         const [orderCountByStatus] = await realyze("SELECT COUNT(id) AS count FROM orders WHERE user_id = ? AND user_status = ? ORDER BY id DESC", [userId,status])                        
                         if (JSON.parse(data).length === orderCountByStatus.count) {
                              res.send(data);
                         }else{
                              const orders = await realyze("SELECT id, user_order, user_status, user_price FROM orders WHERE user_id = ? AND user_status = ? ORDER BY id DESC", [userId, status]);
                              const resArray = await getProductsFromOrdersList(orders);
                              fs_functions.writeCacheFile(
                                   `${cachesPath}/orders/${userId}/${statusTypeObj.status}.json`,
                                   resArray
                              )
                              res.send(resArray);
                         }
                    }
               })
          } else {
               const orders = await realyze("SELECT * FROM orders WHERE user_id = ? AND user_status = ? ORDER BY id DESC", [userId, status]);
               const resArray = await getProductsFromOrdersList(orders);
               fs_functions.writeCacheFile(
                    `${cachesPath}/orders/${userId}/${statusTypeObj.status}.json`,
                    resArray
               )
               res.send(JSON.stringify(resArray, undefined, 2));
          }

          
     } catch (err) {
          throw err;
     }

}
//
module.exports.allSoldedProducts = async (req, res) => {
     const orders = await realyze("SELECT user_order FROM orders WHERE user_status = ?", [4]);
     const parsedData = orders.map(item => JSON.parse(item?.user_order));
     const countsData = parsedData.reduce((acc, curr) => {
          for (const key in curr) {
               if(!(key in acc)){
                    acc[key] = 1
               }else{
                    acc[key] = +acc[key] + 1
               }
          }
          return acc;
     }, {});
     
     res.send(JSON.stringify(countsData, undefined, 2))
}
module.exports.updateStatus = async (req, res) => {
     const id = req.params.id;
     const status = req.body.status;
     const userId = req.body.userId;
     await realyze("UPDATE orders SET user_status = ? WHERE id = ?", [status, id]);
     const orders = await realyze("SELECT * FROM orders WHERE user_id = ? AND user_status = ?", [userId, status]);
     const resArray = await getProductsFromOrdersList(orders)
     res.send(JSON.stringify(resArray, undefined, 2));
}
module.exports.deleteOrder = async(req, res) => {
     const order_id = req.body.order_id;
     const user_id = req.body.user_id;
      await realyze("DELETE FROM  orders WHERE id = ?", [order_id]);
      const orders = await realyze("SELECT * FROM orders WHERE user_id = ? AND user_status = ?", [user_id, 3]);
      const resArray = await getProductsFromOrdersList(orders)
      res.send(JSON.stringify(resArray, undefined, 2));
}

