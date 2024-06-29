import { combineReducers } from 'redux';
import ConfigsDuck from './ducks/configsDuck';
import NavigationDuck from './ducks/navigationDuck';
import ProductDuck from './ducks/productDuck';
import CartDuck from './ducks/cartDuck';
import UserDuck from './ducks/userDuck';
import OrderDuck from './ducks/orderDuck';
import AdminOrderDuck from './ducks/adminOrderDuck';
import AdminCategoryDuck from './ducks/adminCategoryDuck';
import AdminSubCategoryDuck from './ducks/adminSubCategoryDuck';
import AdminReviewDuck from './ducks/adminReviewDuck';
import AdminProductDuck from './ducks/adminProductDuck';
import AdminUserDuck from './ducks/adminUserDuck';
import ReviewDuck from './ducks/reviewDuck';
import WishListDuck from './ducks/wishListDuck';
import SubCategoryDuck from './ducks/subCategoryDuck';

const rootReducer = combineReducers({
  NavigationDuck,
  SubCategoryDuck,
  ProductDuck,
  ConfigsDuck,
  CartDuck,
  OrderDuck,
  UserDuck,
  AdminOrderDuck,
  AdminProductDuck,
  AdminCategoryDuck,
  AdminSubCategoryDuck,
  AdminUserDuck,
  AdminReviewDuck,
  ReviewDuck,
  WishListDuck
});

export default rootReducer;
