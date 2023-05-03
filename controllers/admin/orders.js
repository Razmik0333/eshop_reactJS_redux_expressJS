const realyze = require('../../config').realyze
const functions = require('../../functions/functions');
const getTokensForQuery = functions.query


module.exports.adminOrdersList = async(req, res) => {
     //const id = req.params.id; //
     const orders = await realyze("SELECT * FROM orders ")
     res.send(orders)
}

module.exports.getProductFromOrder = async(req, res) => {
     const orderId = req.params.order_id; //
     const [orderById] = await realyze("SELECT * FROM orders WHERE id = ? ", [orderId]);
     const currentOrder = JSON.parse(orderById.user_order);
     const productIds = Object.keys(currentOrder)
     const productCounts = Object.values(currentOrder)
     const tokens = getTokensForQuery(productIds)
     const productsList = await realyze(`SELECT * FROM products WHERE id IN (${tokens}) `, productIds)
     const productsWithQuantities = productsList.reduce((acc, curr,pos) => {
          acc.push({
               ...curr,
               quantity:productCounts[pos]
          });
          return acc;
     },[])
     res.send(productsWithQuantities)
}

module.exports.adminOrderById = async(req, res) => {
     const orderId = req.params.order_id; //
     const [orderById] = await realyze("SELECT * FROM orders WHERE id = ? ", [orderId]);
     res.send(orderById);
}

module.exports.adminStatusUpdate = async (req, res) => {
     const orderId = req.params.order_id; //
     const statusIndex = req.body.status;
     await realyze("UPDATE `orders` SET user_status = ? WHERE id = ? ", [statusIndex, orderId]);
}
module.exports.adminOrderDelete = async (req, res) => {
     const orderId = req.params.order_id;
     await realyze("DELETE FROM orders WHERE id = ? ", [orderId]);
     const ordersAfterDelete = await realyze("SELECT * FROM orders ");
     res.send(ordersAfterDelete);
}
