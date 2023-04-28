import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Home from './components/Home/Home';
import Header from './components/Base/Header/Header.jsx';
import Footer from './components/Base/Footer/Footer.jsx';
import HeaderDown from './components/Base/Header-Down/HeaderDown';
import Navigation from './components/Base/Navigation/Navigation';
import ProductDetails from './components/Products-details/ProductDetails';
import ProductPage from './components/ProductPage/ProductPage';
import Search from './components/Search/Search';
import Register from './components/Base/User/register/Register';
import Login from './components/Base/User/login/Login';
import Cart from './components/Cart/Cart';
import Buy from './components/Cart/Order/Buy';


//import Orders from ';


import Cabinet from './components/Base/User/cabinet/Cabinet';
import Admin from './components/Base/Admin/admin/Admin';
import AdminProducts from './components/Base/Admin/AdminProducts/AdminProducts';
import ProductForm from './components/Base/Admin/AdminProducts/ProductForm';
import AdminOrders from './components/Base/Admin/AdminOrders/AdminOrders/AdminOrders';
import OrderForm from './components/Base/Admin/AdminOrders/OrderForm/OrderForm';
import Wishlist from './components/Wishlist/Wishlist';
import ViewedProducts from './components/Home/ViewedProducts/ViewedProducts';
import Loader from './components/Base/Loader/Loader';

const Orders = lazy(() => import('./components/Orders/Orders/Orders'));
function App() {
  return (

      <div className="App">
        
        <Header />
        <HeaderDown />
        <Navigation />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
              path="/register" 
              element={<Register />} 
              />
              <Route
              path="/cabinet" 
              element={<Cabinet />} 
              />

              <Route
              path="/admin/product" 
              element={<AdminProducts />} 
              />
              <Route
              path="/admin/product/create/page" 
              element={<ProductForm />} 
              />
              <Route
              path="/admin/product/update/page" 
              element={<ProductForm />} 
              />
              <Route
              path="/admin/order/update/page" 
              element={<OrderForm />} 
              />
              <Route
              path="/admin/orders" 
              element={<AdminOrders />} 
              />
              <Route
              path="/admin" 
              element={<Admin />} 
              />
              <Route
              path="/login" 
              element={<Login />} 
              />
              <Route
              path="/category/:id" 
              element={<ProductDetails  />} 
              />
              <Route
              path="/cart" 
              element={<Cart  />} 
              />
              <Route
              path="/wishlist" 
              element={<Wishlist  />} 
              />
              <Route
              path="/buy" 
              element={<Buy  />} 
              />
              <Route
              path="/orders" 
              element={<Orders  />} 
              />
              <Route
              path="/product/:id/"
              element={<ProductPage />}
              />
              <Route
              path="/search/:str"
              element={<Search />}
              />
              <Route 
              path="/viewed" 
              element={<ViewedProducts />} 
              />
              <Route 
              path="/home" 
              element={<Home />} 
              />
              <Route 
              path="/" 
              element={<Home />} 
              />
            </Routes>
        </Suspense>
            
            
        <Footer />
      </div>
      
  );
}

export default App;
