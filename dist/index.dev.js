"use strict";

var express = require('express');

var session = require('express-session');

var cors = require('cors');

var categoryRoutes = require('./routes/category');

var subCategoryRoutes = require('./routes/subCategory');

var cartRoutes = require('./routes/cart');

var productRoutes = require('./routes/products');

var ordersRoutes = require('./routes/orders');

var reviewRoutes = require('./routes/review');

var userRoutes = require('./routes/user');

var wishListRoutes = require('./routes/wishlist');

var configsRoutes = require('./routes/configs');

var adminOrders = require('./routes/admin/orders');

var adminProducts = require('./routes/admin/products');

var adminCategories = require('./routes/admin/category');

var adminSubCategories = require('./routes/admin/subcategory');

var adminUsers = require('./routes/admin/users');

var adminReviews = require('./routes/admin/review');

var app = express();
var PORT = process.env.PORT || 3001; //middleware

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(express["static"]('public'));
app.use(session({
  secret: 'niufewfukewkfgekfgekfgkefgewf',
  cookie: {
    maxAge: 60000
  }
}));
app.use(cors({
  origin: "http://localhost:3000"
})); //routes

app.use('/api', categoryRoutes);
app.use('/api', subCategoryRoutes);
app.use('/api', cartRoutes);
app.use('/api', productRoutes);
app.use('/api', ordersRoutes);
app.use('/api', reviewRoutes);
app.use('/api', userRoutes);
app.use('/api', wishListRoutes);
app.use('/api', configsRoutes);
app.use('/api', adminOrders);
app.use('/api', adminProducts);
app.use('/api', adminCategories);
app.use('/api', adminSubCategories);
app.use('/api', adminUsers);
app.use('/api', adminReviews);
app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("server has started in port ".concat(PORT));
});