const express = require('express');
const session = require('express-session');
const cors = require('cors');


const categoryRoutes = require('./routes/category')
const cartRoutes = require('./routes/cart')
const productRoutes = require('./routes/products')
const ordersRoutes = require('./routes/orders')
const reviewRoutes = require('./routes/review')
const userRoutes = require('./routes/user')
const wishListRoutes = require('./routes/wishlist')
const configsRoutes = require('./routes/configs')
const adminOrders = require('./routes/admin/orders')
const adminProducts = require('./routes/admin/products')
const adminCategories = require('./routes/admin/category')
const adminUsers = require('./routes/admin/users')
const adminReviews = require('./routes/admin/review')


const app = express();


const PORT = process.env.PORT || 3001;

//middleware

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'));
app.use(session({secret:'niufewfukewkfgekfgekfgkefgewf', cookie: { maxAge:60000 }}))
app.use(cors({origin:"http://localhost:3000"}));

//routes



app.use('/api', categoryRoutes);
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
app.use('/api', adminUsers);
app.use('/api', adminReviews);



app.listen(PORT, (err) => {      
      if (err) console.log("Error in server setup")
     console.log(`server has started in port ${PORT}`);
});






