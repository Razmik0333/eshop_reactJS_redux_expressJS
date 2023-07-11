"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adminUserListSelector = exports.adminOrderIsDeletedSelector = exports.adminOrderIdSelector = exports.adminCurrentOrderInfoSelector = exports.adminCurrentOrderSelector = exports.adminProductIsDeletedSelector = exports.adminProductSelector = exports.adminProductIdSelector = exports.adminProductsSelector = exports.adminTimeObjectProductSelector = exports.adminTimeObjectSelector = exports.adminOrderProductsSelector = exports.adminOrderSelector = exports.getViewedProductsDataSelector = exports.getViewedProductsSelector = exports.getWishListDataSelector = exports.getWishListIdsSelector = exports.getReviewByProductIdAndUserId = exports.getReviewIdSelector = exports.getLatestReviewsSelector = exports.getReviewsByProductSelector = exports.getCurrentTabNameSelector = exports.getDeliveredOrdersByUserSelector = exports.isConfirmedSelector = exports.getEvaluateSelector = exports.getConfirmIdSelector = exports.getStatusIndex = exports.getProductsCounts = exports.getUserProducts = exports.getOrderIdDelete = exports.getUserOrders = exports.getProductsInCart = exports.getTotalPriceSelector = exports.getCartCountSelector = exports.getCartSelector = exports.getUserDataSelector = exports.getAvatartUrl = exports.getUserId = exports.getCurrentLanguageSelector = exports.getCurrentCurrencySelector = exports.idProductsFromStartSelector = exports.hotDealsTimerSelector = exports.popupItemIdSelector = exports.popupCloseSelector = exports.modalCloseSelector = exports.elementsCostsSelector = exports.costsValuesSelector = exports.countItemsOfPageSelector = exports.countElementsSelector = exports.currenciesSelector = exports.currentLanguageDataSelector = exports.languagesSelector = exports.hotDealsSelector = exports.sortTypeSelector = exports.showTypeSelector = exports.isFocusedSelector = exports.isSearchSelector = exports.getEvaluateProductsSelector = exports.productReviewDataSelector = exports.maxDiscountDataSelector = exports.currentHintsData = exports.currentSearchData = exports.currentSearchSelector = exports.productStepCountsSelector = exports.allVerySoldedProductsSelector = exports.verySoldedProductsSelector = exports.currentProductSelector = exports.currentProductIdSelector = exports.currentCategorySelector = exports.currentCategoryIdSelector = exports.productsByCategoryLengthSelector = exports.productsByCategorySelector = exports.recommendProductsSelector = exports.productsSelector = exports.categoriesSelector = void 0;

var categoriesSelector = function categoriesSelector(_ref) {
  var NavigationDuck = _ref.NavigationDuck;
  return NavigationDuck.categories;
}; //


exports.categoriesSelector = categoriesSelector;

var productsSelector = function productsSelector(_ref2) {
  var ProductDuck = _ref2.ProductDuck;
  return ProductDuck.products;
}; //


exports.productsSelector = productsSelector;

var recommendProductsSelector = function recommendProductsSelector(_ref3) {
  var ProductDuck = _ref3.ProductDuck;
  return ProductDuck.recommend;
}; //


exports.recommendProductsSelector = recommendProductsSelector;

var productsByCategorySelector = function productsByCategorySelector(_ref4) {
  var ProductDuck = _ref4.ProductDuck;
  return ProductDuck.productsByCategory;
}; //


exports.productsByCategorySelector = productsByCategorySelector;

var productsByCategoryLengthSelector = function productsByCategoryLengthSelector(_ref5) {
  var ProductDuck = _ref5.ProductDuck;
  return ProductDuck.productsByCategoryLength;
}; //


exports.productsByCategoryLengthSelector = productsByCategoryLengthSelector;

var currentCategoryIdSelector = function currentCategoryIdSelector(_ref6) {
  var NavigationDuck = _ref6.NavigationDuck;
  return NavigationDuck.categoryID;
}; //


exports.currentCategoryIdSelector = currentCategoryIdSelector;

var currentCategorySelector = function currentCategorySelector(_ref7) {
  var NavigationDuck = _ref7.NavigationDuck;
  return NavigationDuck.currentCategory;
}; //


exports.currentCategorySelector = currentCategorySelector;

var currentProductIdSelector = function currentProductIdSelector(_ref8) {
  var ProductDuck = _ref8.ProductDuck;
  return ProductDuck.currentProductId;
}; //


exports.currentProductIdSelector = currentProductIdSelector;

var currentProductSelector = function currentProductSelector(_ref9) {
  var ProductDuck = _ref9.ProductDuck;
  return ProductDuck.currentProduct;
}; //


exports.currentProductSelector = currentProductSelector;

var verySoldedProductsSelector = function verySoldedProductsSelector(_ref10) {
  var ProductDuck = _ref10.ProductDuck;
  return ProductDuck.verySolded;
}; //


exports.verySoldedProductsSelector = verySoldedProductsSelector;

var allVerySoldedProductsSelector = function allVerySoldedProductsSelector(_ref11) {
  var ProductDuck = _ref11.ProductDuck;
  return ProductDuck.allVerySolded;
}; //


exports.allVerySoldedProductsSelector = allVerySoldedProductsSelector;

var productStepCountsSelector = function productStepCountsSelector(_ref12) {
  var ProductDuck = _ref12.ProductDuck;
  return ProductDuck.stepCounts;
}; //


exports.productStepCountsSelector = productStepCountsSelector;

var currentSearchSelector = function currentSearchSelector(_ref13) {
  var NavigationDuck = _ref13.NavigationDuck;
  return NavigationDuck.searchWord;
}; //


exports.currentSearchSelector = currentSearchSelector;

var currentSearchData = function currentSearchData(_ref14) {
  var ProductDuck = _ref14.ProductDuck;
  return ProductDuck.searchData;
}; //


exports.currentSearchData = currentSearchData;

var currentHintsData = function currentHintsData(_ref15) {
  var ProductDuck = _ref15.ProductDuck;
  return ProductDuck.hintsData;
}; //


exports.currentHintsData = currentHintsData;

var maxDiscountDataSelector = function maxDiscountDataSelector(_ref16) {
  var ProductDuck = _ref16.ProductDuck;
  return ProductDuck.maxDiscountData;
}; //


exports.maxDiscountDataSelector = maxDiscountDataSelector;

var productReviewDataSelector = function productReviewDataSelector(_ref17) {
  var ProductDuck = _ref17.ProductDuck;
  return ProductDuck.productReview;
}; //


exports.productReviewDataSelector = productReviewDataSelector;

var getEvaluateProductsSelector = function getEvaluateProductsSelector(_ref18) {
  var OrderDuck = _ref18.OrderDuck;
  return OrderDuck.evaluatedProducts;
}; //


exports.getEvaluateProductsSelector = getEvaluateProductsSelector;

var isSearchSelector = function isSearchSelector(_ref19) {
  var NavigationDuck = _ref19.NavigationDuck;
  return NavigationDuck.isSearch;
}; //


exports.isSearchSelector = isSearchSelector;

var isFocusedSelector = function isFocusedSelector(_ref20) {
  var NavigationDuck = _ref20.NavigationDuck;
  return NavigationDuck.isFocused;
}; //


exports.isFocusedSelector = isFocusedSelector;

var showTypeSelector = function showTypeSelector(_ref21) {
  var ConfigsDuck = _ref21.ConfigsDuck;
  return ConfigsDuck.showType;
}; //


exports.showTypeSelector = showTypeSelector;

var sortTypeSelector = function sortTypeSelector(_ref22) {
  var ConfigsDuck = _ref22.ConfigsDuck;
  return ConfigsDuck.sortType;
}; //


exports.sortTypeSelector = sortTypeSelector;

var hotDealsSelector = function hotDealsSelector(_ref23) {
  var ConfigsDuck = _ref23.ConfigsDuck;
  return ConfigsDuck.hotDealsId;
}; //


exports.hotDealsSelector = hotDealsSelector;

var languagesSelector = function languagesSelector(_ref24) {
  var ConfigsDuck = _ref24.ConfigsDuck;
  return ConfigsDuck.languages;
}; //


exports.languagesSelector = languagesSelector;

var currentLanguageDataSelector = function currentLanguageDataSelector(_ref25) {
  var ConfigsDuck = _ref25.ConfigsDuck;
  return ConfigsDuck.currentLanguageData;
}; //


exports.currentLanguageDataSelector = currentLanguageDataSelector;

var currenciesSelector = function currenciesSelector(_ref26) {
  var ConfigsDuck = _ref26.ConfigsDuck;
  return ConfigsDuck.currencies;
}; //


exports.currenciesSelector = currenciesSelector;

var countElementsSelector = function countElementsSelector(_ref27) {
  var ConfigsDuck = _ref27.ConfigsDuck;
  return ConfigsDuck.countItems;
}; //


exports.countElementsSelector = countElementsSelector;

var countItemsOfPageSelector = function countItemsOfPageSelector(_ref28) {
  var ConfigsDuck = _ref28.ConfigsDuck;
  return ConfigsDuck.countItemsOfPage;
}; //


exports.countItemsOfPageSelector = countItemsOfPageSelector;

var costsValuesSelector = function costsValuesSelector(_ref29) {
  var ConfigsDuck = _ref29.ConfigsDuck;
  return ConfigsDuck.costInterval;
}; //


exports.costsValuesSelector = costsValuesSelector;

var elementsCostsSelector = function elementsCostsSelector(_ref30) {
  var ProductDuck = _ref30.ProductDuck;
  return ProductDuck.costItems;
}; //


exports.elementsCostsSelector = elementsCostsSelector;

var modalCloseSelector = function modalCloseSelector(_ref31) {
  var ConfigsDuck = _ref31.ConfigsDuck;
  return ConfigsDuck.modalIsClose;
}; //


exports.modalCloseSelector = modalCloseSelector;

var popupCloseSelector = function popupCloseSelector(_ref32) {
  var ConfigsDuck = _ref32.ConfigsDuck;
  return ConfigsDuck.popupIsShow;
}; //


exports.popupCloseSelector = popupCloseSelector;

var popupItemIdSelector = function popupItemIdSelector(_ref33) {
  var ConfigsDuck = _ref33.ConfigsDuck;
  return ConfigsDuck.popupItemId;
}; //


exports.popupItemIdSelector = popupItemIdSelector;

var hotDealsTimerSelector = function hotDealsTimerSelector(_ref34) {
  var ConfigsDuck = _ref34.ConfigsDuck;
  return ConfigsDuck.hotDealsTimerSeconds;
}; //


exports.hotDealsTimerSelector = hotDealsTimerSelector;

var idProductsFromStartSelector = function idProductsFromStartSelector(_ref35) {
  var ConfigsDuck = _ref35.ConfigsDuck;
  return ConfigsDuck.idProductsFromStart;
}; //


exports.idProductsFromStartSelector = idProductsFromStartSelector;

var getCurrentCurrencySelector = function getCurrentCurrencySelector(_ref36) {
  var ConfigsDuck = _ref36.ConfigsDuck;
  return ConfigsDuck.currentCurrency;
}; //


exports.getCurrentCurrencySelector = getCurrentCurrencySelector;

var getCurrentLanguageSelector = function getCurrentLanguageSelector(_ref37) {
  var ConfigsDuck = _ref37.ConfigsDuck;
  return ConfigsDuck.currentLanguage;
}; //


exports.getCurrentLanguageSelector = getCurrentLanguageSelector;

var getUserId = function getUserId(_ref38) {
  var UserDuck = _ref38.UserDuck;
  return UserDuck.userId;
}; //


exports.getUserId = getUserId;

var getAvatartUrl = function getAvatartUrl(_ref39) {
  var UserDuck = _ref39.UserDuck;
  return UserDuck.avatarURL;
}; //


exports.getAvatartUrl = getAvatartUrl;

var getUserDataSelector = function getUserDataSelector(_ref40) {
  var UserDuck = _ref40.UserDuck;
  return UserDuck.userData;
}; //


exports.getUserDataSelector = getUserDataSelector;

var getCartSelector = function getCartSelector(_ref41) {
  var CartDuck = _ref41.CartDuck;
  return CartDuck.cartData;
}; //


exports.getCartSelector = getCartSelector;

var getCartCountSelector = function getCartCountSelector(_ref42) {
  var CartDuck = _ref42.CartDuck;
  return CartDuck.countItems;
}; //


exports.getCartCountSelector = getCartCountSelector;

var getTotalPriceSelector = function getTotalPriceSelector(_ref43) {
  var CartDuck = _ref43.CartDuck;
  return CartDuck.totalPrice;
}; //


exports.getTotalPriceSelector = getTotalPriceSelector;

var getProductsInCart = function getProductsInCart(_ref44) {
  var ProductDuck = _ref44.ProductDuck;
  return ProductDuck.cartProducts;
}; //


exports.getProductsInCart = getProductsInCart;

var getUserOrders = function getUserOrders(_ref45) {
  var OrderDuck = _ref45.OrderDuck;
  return OrderDuck.ordersData;
}; //


exports.getUserOrders = getUserOrders;

var getOrderIdDelete = function getOrderIdDelete(_ref46) {
  var OrderDuck = _ref46.OrderDuck;
  return OrderDuck.orderIdForDelete;
}; //


exports.getOrderIdDelete = getOrderIdDelete;

var getUserProducts = function getUserProducts(_ref47) {
  var OrderDuck = _ref47.OrderDuck;
  return OrderDuck.orderProducts;
}; //


exports.getUserProducts = getUserProducts;

var getProductsCounts = function getProductsCounts(_ref48) {
  var OrderDuck = _ref48.OrderDuck;
  return OrderDuck.productsCounts;
}; //


exports.getProductsCounts = getProductsCounts;

var getStatusIndex = function getStatusIndex(_ref49) {
  var OrderDuck = _ref49.OrderDuck;
  return OrderDuck.currentStatus;
}; //


exports.getStatusIndex = getStatusIndex;

var getConfirmIdSelector = function getConfirmIdSelector(_ref50) {
  var OrderDuck = _ref50.OrderDuck;
  return OrderDuck.orderConfirmId;
}; //


exports.getConfirmIdSelector = getConfirmIdSelector;

var getEvaluateSelector = function getEvaluateSelector(_ref51) {
  var OrderDuck = _ref51.OrderDuck;
  return OrderDuck.orderId;
}; //


exports.getEvaluateSelector = getEvaluateSelector;

var isConfirmedSelector = function isConfirmedSelector(_ref52) {
  var OrderDuck = _ref52.OrderDuck;
  return OrderDuck.isConfirmed;
}; //


exports.isConfirmedSelector = isConfirmedSelector;

var getDeliveredOrdersByUserSelector = function getDeliveredOrdersByUserSelector(_ref53) {
  var OrderDuck = _ref53.OrderDuck;
  return OrderDuck.deliveredOrders;
}; //


exports.getDeliveredOrdersByUserSelector = getDeliveredOrdersByUserSelector;

var getCurrentTabNameSelector = function getCurrentTabNameSelector(_ref54) {
  var ReviewDuck = _ref54.ReviewDuck;
  return ReviewDuck.tabName;
}; //


exports.getCurrentTabNameSelector = getCurrentTabNameSelector;

var getReviewsByProductSelector = function getReviewsByProductSelector(_ref55) {
  var ReviewDuck = _ref55.ReviewDuck;
  return ReviewDuck.reviewsByProduct;
}; //


exports.getReviewsByProductSelector = getReviewsByProductSelector;

var getLatestReviewsSelector = function getLatestReviewsSelector(_ref56) {
  var ReviewDuck = _ref56.ReviewDuck;
  return ReviewDuck.latestReviews;
}; //


exports.getLatestReviewsSelector = getLatestReviewsSelector;

var getReviewIdSelector = function getReviewIdSelector(_ref57) {
  var ReviewDuck = _ref57.ReviewDuck;
  return ReviewDuck.reviewId;
}; //


exports.getReviewIdSelector = getReviewIdSelector;

var getReviewByProductIdAndUserId = function getReviewByProductIdAndUserId(_ref58) {
  var ReviewDuck = _ref58.ReviewDuck;
  return ReviewDuck.reviewByUserAndProduct;
}; //


exports.getReviewByProductIdAndUserId = getReviewByProductIdAndUserId;

var getWishListIdsSelector = function getWishListIdsSelector(_ref59) {
  var WishListDuck = _ref59.WishListDuck;
  return WishListDuck.wishList;
}; //


exports.getWishListIdsSelector = getWishListIdsSelector;

var getWishListDataSelector = function getWishListDataSelector(_ref60) {
  var WishListDuck = _ref60.WishListDuck;
  return WishListDuck.wishListData;
}; //


exports.getWishListDataSelector = getWishListDataSelector;

var getViewedProductsSelector = function getViewedProductsSelector(_ref61) {
  var ProductDuck = _ref61.ProductDuck;
  return ProductDuck.viewedProducts;
}; //


exports.getViewedProductsSelector = getViewedProductsSelector;

var getViewedProductsDataSelector = function getViewedProductsDataSelector(_ref62) {
  var ProductDuck = _ref62.ProductDuck;
  return ProductDuck.viewedProductsData;
}; //
//admins block//


exports.getViewedProductsDataSelector = getViewedProductsDataSelector;

var adminOrderSelector = function adminOrderSelector(_ref63) {
  var AdminOrderDuck = _ref63.AdminOrderDuck;
  return AdminOrderDuck.ordersList;
}; //


exports.adminOrderSelector = adminOrderSelector;

var adminOrderProductsSelector = function adminOrderProductsSelector(_ref64) {
  var AdminOrderDuck = _ref64.AdminOrderDuck;
  return AdminOrderDuck.currentOrderProducts;
}; //


exports.adminOrderProductsSelector = adminOrderProductsSelector;

var adminTimeObjectSelector = function adminTimeObjectSelector(_ref65) {
  var AdminOrderDuck = _ref65.AdminOrderDuck;
  return AdminOrderDuck.timeObj;
}; //


exports.adminTimeObjectSelector = adminTimeObjectSelector;

var adminTimeObjectProductSelector = function adminTimeObjectProductSelector(_ref66) {
  var AdminProductDuck = _ref66.AdminProductDuck;
  return AdminProductDuck.timeObj;
}; //


exports.adminTimeObjectProductSelector = adminTimeObjectProductSelector;

var adminProductsSelector = function adminProductsSelector(_ref67) {
  var AdminProductDuck = _ref67.AdminProductDuck;
  return AdminProductDuck.productsList;
}; //


exports.adminProductsSelector = adminProductsSelector;

var adminProductIdSelector = function adminProductIdSelector(_ref68) {
  var AdminProductDuck = _ref68.AdminProductDuck;
  return AdminProductDuck.currentProductId;
}; //


exports.adminProductIdSelector = adminProductIdSelector;

var adminProductSelector = function adminProductSelector(_ref69) {
  var AdminProductDuck = _ref69.AdminProductDuck;
  return AdminProductDuck.currentProduct;
}; //


exports.adminProductSelector = adminProductSelector;

var adminProductIsDeletedSelector = function adminProductIsDeletedSelector(_ref70) {
  var AdminProductDuck = _ref70.AdminProductDuck;
  return AdminProductDuck.isDeleted;
}; //


exports.adminProductIsDeletedSelector = adminProductIsDeletedSelector;

var adminCurrentOrderSelector = function adminCurrentOrderSelector(_ref71) {
  var AdminOrderDuck = _ref71.AdminOrderDuck;
  return AdminOrderDuck.currentOrder;
}; //


exports.adminCurrentOrderSelector = adminCurrentOrderSelector;

var adminCurrentOrderInfoSelector = function adminCurrentOrderInfoSelector(_ref72) {
  var AdminOrderDuck = _ref72.AdminOrderDuck;
  return AdminOrderDuck.currentOrderInfo;
}; //


exports.adminCurrentOrderInfoSelector = adminCurrentOrderInfoSelector;

var adminOrderIdSelector = function adminOrderIdSelector(_ref73) {
  var AdminOrderDuck = _ref73.AdminOrderDuck;
  return AdminOrderDuck.currentOrderId;
}; //


exports.adminOrderIdSelector = adminOrderIdSelector;

var adminOrderIsDeletedSelector = function adminOrderIsDeletedSelector(_ref74) {
  var AdminOrderDuck = _ref74.AdminOrderDuck;
  return AdminOrderDuck.isDeleted;
}; //


exports.adminOrderIsDeletedSelector = adminOrderIsDeletedSelector;

var adminUserListSelector = function adminUserListSelector(_ref75) {
  var AdminUserDuck = _ref75.AdminUserDuck;
  return AdminUserDuck.usersList;
}; //


exports.adminUserListSelector = adminUserListSelector;