const realyze = require('../config').realyze;
const functions = require('../functions/functions');

//const getTokensForQuery = functions.query;
const getProductsFromOrdersList = functions.getProductsFromOrdersList
module.exports.ordersByUser = async (req, res) => {
     const userId = req.params.id;
     const orders = await realyze("SELECT * FROM orders WHERE user_id = ? ", [userId]);
     res.send(orders)
}
module.exports.allOrdersByUser = async (req, res) => {
     const userId = req.params.id;
     const ordersByUser = await realyze("SELECT id, user_order, user_status, user_price FROM orders WHERE user_id = ? ", [userId]);
     const resArray = await getProductsFromOrdersList(ordersByUser)
     res.send(JSON.stringify(resArray, undefined, 2));
}
module.exports.getProductsByOrder = async (req, res) => {
     const orderId = req.params.id;
     const order = await realyze(`SELECT * FROM orders WHERE id = ? `, [orderId]);
     const [resArray] = await getProductsFromOrdersList(order)
     res.send(resArray?.user_order)
}
module.exports.ordersByStatus = async (req, res) => {
     const userId = req.params.id;
     const status = req.body.status
     const orders = await realyze("SELECT * FROM orders WHERE user_id = ? AND user_status = ?", [userId, status]);
     const resArray = await getProductsFromOrdersList(orders)
     res.send(JSON.stringify(resArray, undefined, 2));
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

