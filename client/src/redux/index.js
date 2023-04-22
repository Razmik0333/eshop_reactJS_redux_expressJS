import { combineReducers } from 'redux';
import ConfigsDuck from './ducks/configsDuck';
import NavigationDuck from './ducks/navigationDuck';
import ProductDuck from './ducks/productDuck';
import CartDuck from './ducks/cartDuck';
import UserDuck from './ducks/userDuck';
import OrderDuck from './ducks/orderDuck';
import AdminOrderDuck from './ducks/adminOrderDuck';
import AdminProductDuck from './ducks/adminProductDuck';
import AdminUserDuck from './ducks/adminUserDuck';
import ReviewDuck from './ducks/reviewDuck';
import WishListDuck from './ducks/wishListDuck';

const rootReducer = combineReducers({
  NavigationDuck,
  ProductDuck,
  ConfigsDuck,
  CartDuck,
  OrderDuck,
  UserDuck,
  AdminOrderDuck,
  AdminProductDuck,
  AdminUserDuck,
  ReviewDuck,
  WishListDuck
});

export default rootReducer;
