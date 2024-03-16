"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adminReviewListSelector = exports.adminUserListSelector = exports.adminOrderIsDeletedSelector = exports.adminOrderIdSelector = exports.adminCurrentOrderInfoSelector = exports.adminCurrentOrderSelector = exports.adminProductIsDeletedSelector = exports.adminProductSelector = exports.adminProductIdSelector = exports.adminProductsSelector = exports.adminTimeObjectProductSelector = exports.adminTimeObjectSelector = exports.adminOrderProductsSelector = exports.adminOrderSelector = exports.getViewedProductsDataSelector = exports.getViewedProductIdSelector = exports.getViewedProductsSelector = exports.getWishListDataSelector = exports.getWishListIdsSelector = exports.getRatingListSelector = exports.getReviewFilterSelector = exports.getReviewSortTypeSelector = exports.getReviewByUserId = exports.getReviewByProductIdAndUserId = exports.getReviewIdSelector = exports.getLatestReviewsSelector = exports.getReviewsByProductSelector = exports.getCurrentTabNameSelector = exports.isConfirmedSelector = exports.getEvaluateSelector = exports.getConfirmIdSelector = exports.getStatusIndex = exports.getProductsCounts = exports.getUserProducts = exports.getOrderIdDelete = exports.getUserOrders = exports.getProductsInCart = exports.getTotalPriceSelector = exports.getCartCountSelector = exports.getCartSelector = exports.getUserDataSelector = exports.getAvatartUrl = exports.getUserId = exports.getCurrentLanguageSelector = exports.getCurrentCurrencySelector = exports.idProductsFromStartSelector = exports.hotDealsTimerSelector = exports.popupItemIdSelector = exports.popupCloseSelector = exports.modalCloseSelector = exports.elementsCostsSelector = exports.costsValuesSelector = exports.countItemsOfPageSelector = exports.countElementsSelector = exports.currenciesSelector = exports.currentLanguageDataSelector = exports.mostestIndex = exports.languagesSelector = exports.hotDealsSelector = exports.sortTypeSelector = exports.showTypeSelector = exports.isFocusedSelector = exports.isSearchSelector = exports.getMostestProductSelector = exports.getEvaluateProductsSelector = exports.productReviewDataSelector = exports.maxDiscountDataSelector = exports.currentHintsData = exports.currentSearchData = exports.currentSearchSelector = exports.productStepCountsSelector = exports.allSoldedProductsSelector = exports.verySoldedProductsSelector = exports.currentProductSelector = exports.currentProductIdSelector = exports.currentCategorySelector = exports.currentCategoryIdSelector = exports.productsByCategoryLengthSelector = exports.productsSimilarSelector = exports.productsByCategorySelector = exports.recommendProductsSelector = exports.productsSelector = exports.categoriesSelector = void 0;

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

var productsSimilarSelector = function productsSimilarSelector(_ref5) {
  var ProductDuck = _ref5.ProductDuck;
  return ProductDuck.productsSimilar;
}; //


exports.productsSimilarSelector = productsSimilarSelector;

var productsByCategoryLengthSelector = function productsByCategoryLengthSelector(_ref6) {
  var ProductDuck = _ref6.ProductDuck;
  return ProductDuck.productsByCategoryLength;
}; //


exports.productsByCategoryLengthSelector = productsByCategoryLengthSelector;

var currentCategoryIdSelector = function currentCategoryIdSelector(_ref7) {
  var NavigationDuck = _ref7.NavigationDuck;
  return NavigationDuck.categoryID;
}; //


exports.currentCategoryIdSelector = currentCategoryIdSelector;

var currentCategorySelector = function currentCategorySelector(_ref8) {
  var NavigationDuck = _ref8.NavigationDuck;
  return NavigationDuck.currentCategory;
}; //


exports.currentCategorySelector = currentCategorySelector;

var currentProductIdSelector = function currentProductIdSelector(_ref9) {
  var ProductDuck = _ref9.ProductDuck;
  return ProductDuck.currentProductId;
}; //


exports.currentProductIdSelector = currentProductIdSelector;

var currentProductSelector = function currentProductSelector(_ref10) {
  var ProductDuck = _ref10.ProductDuck;
  return ProductDuck.currentProduct;
}; //


exports.currentProductSelector = currentProductSelector;

var verySoldedProductsSelector = function verySoldedProductsSelector(_ref11) {
  var ProductDuck = _ref11.ProductDuck;
  return ProductDuck.verySolded;
}; //


exports.verySoldedProductsSelector = verySoldedProductsSelector;

var allSoldedProductsSelector = function allSoldedProductsSelector(_ref12) {
  var ProductDuck = _ref12.ProductDuck;
  return ProductDuck.allSolded;
}; //


exports.allSoldedProductsSelector = allSoldedProductsSelector;

var productStepCountsSelector = function productStepCountsSelector(_ref13) {
  var ProductDuck = _ref13.ProductDuck;
  return ProductDuck.stepCounts;
}; //


exports.productStepCountsSelector = productStepCountsSelector;

var currentSearchSelector = function currentSearchSelector(_ref14) {
  var NavigationDuck = _ref14.NavigationDuck;
  return NavigationDuck.searchWord;
}; //


exports.currentSearchSelector = currentSearchSelector;

var currentSearchData = function currentSearchData(_ref15) {
  var ProductDuck = _ref15.ProductDuck;
  return ProductDuck.searchData;
}; //


exports.currentSearchData = currentSearchData;

var currentHintsData = function currentHintsData(_ref16) {
  var ProductDuck = _ref16.ProductDuck;
  return ProductDuck.hintsData;
}; //


exports.currentHintsData = currentHintsData;

var maxDiscountDataSelector = function maxDiscountDataSelector(_ref17) {
  var ProductDuck = _ref17.ProductDuck;
  return ProductDuck.maxDiscountData;
}; //


exports.maxDiscountDataSelector = maxDiscountDataSelector;

var productReviewDataSelector = function productReviewDataSelector(_ref18) {
  var ProductDuck = _ref18.ProductDuck;
  return ProductDuck.productReview;
}; //


exports.productReviewDataSelector = productReviewDataSelector;

var getEvaluateProductsSelector = function getEvaluateProductsSelector(_ref19) {
  var OrderDuck = _ref19.OrderDuck;
  return OrderDuck.evaluatedProducts;
}; //


exports.getEvaluateProductsSelector = getEvaluateProductsSelector;

var getMostestProductSelector = function getMostestProductSelector(_ref20) {
  var ProductDuck = _ref20.ProductDuck;
  return ProductDuck.mostestProduct;
};

exports.getMostestProductSelector = getMostestProductSelector;

var isSearchSelector = function isSearchSelector(_ref21) {
  var NavigationDuck = _ref21.NavigationDuck;
  return NavigationDuck.isSearch;
}; //


exports.isSearchSelector = isSearchSelector;

var isFocusedSelector = function isFocusedSelector(_ref22) {
  var NavigationDuck = _ref22.NavigationDuck;
  return NavigationDuck.isFocused;
}; //


exports.isFocusedSelector = isFocusedSelector;

var showTypeSelector = function showTypeSelector(_ref23) {
  var ConfigsDuck = _ref23.ConfigsDuck;
  return ConfigsDuck.showType;
}; //


exports.showTypeSelector = showTypeSelector;

var sortTypeSelector = function sortTypeSelector(_ref24) {
  var ConfigsDuck = _ref24.ConfigsDuck;
  return ConfigsDuck.sortType;
}; //


exports.sortTypeSelector = sortTypeSelector;

var hotDealsSelector = function hotDealsSelector(_ref25) {
  var ConfigsDuck = _ref25.ConfigsDuck;
  return ConfigsDuck.hotDealsId;
}; //


exports.hotDealsSelector = hotDealsSelector;

var languagesSelector = function languagesSelector(_ref26) {
  var ConfigsDuck = _ref26.ConfigsDuck;
  return ConfigsDuck.languages;
}; //


exports.languagesSelector = languagesSelector;

var mostestIndex = function mostestIndex(_ref27) {
  var ConfigsDuck = _ref27.ConfigsDuck;
  return ConfigsDuck.mostestIndex;
}; //


exports.mostestIndex = mostestIndex;

var currentLanguageDataSelector = function currentLanguageDataSelector(_ref28) {
  var ConfigsDuck = _ref28.ConfigsDuck;
  return ConfigsDuck.currentLanguageData;
}; //


exports.currentLanguageDataSelector = currentLanguageDataSelector;

var currenciesSelector = function currenciesSelector(_ref29) {
  var ConfigsDuck = _ref29.ConfigsDuck;
  return ConfigsDuck.currencies;
}; //


exports.currenciesSelector = currenciesSelector;

var countElementsSelector = function countElementsSelector(_ref30) {
  var ConfigsDuck = _ref30.ConfigsDuck;
  return ConfigsDuck.countItems;
}; //


exports.countElementsSelector = countElementsSelector;

var countItemsOfPageSelector = function countItemsOfPageSelector(_ref31) {
  var ConfigsDuck = _ref31.ConfigsDuck;
  return ConfigsDuck.countItemsOfPage;
}; //


exports.countItemsOfPageSelector = countItemsOfPageSelector;

var costsValuesSelector = function costsValuesSelector(_ref32) {
  var ConfigsDuck = _ref32.ConfigsDuck;
  return ConfigsDuck.costInterval;
}; //


exports.costsValuesSelector = costsValuesSelector;

var elementsCostsSelector = function elementsCostsSelector(_ref33) {
  var ProductDuck = _ref33.ProductDuck;
  return ProductDuck.costItems;
}; //


exports.elementsCostsSelector = elementsCostsSelector;

var modalCloseSelector = function modalCloseSelector(_ref34) {
  var ConfigsDuck = _ref34.ConfigsDuck;
  return ConfigsDuck.modalIsClose;
}; //


exports.modalCloseSelector = modalCloseSelector;

var popupCloseSelector = function popupCloseSelector(_ref35) {
  var ConfigsDuck = _ref35.ConfigsDuck;
  return ConfigsDuck.popupIsShow;
}; //


exports.popupCloseSelector = popupCloseSelector;

var popupItemIdSelector = function popupItemIdSelector(_ref36) {
  var ConfigsDuck = _ref36.ConfigsDuck;
  return ConfigsDuck.popupItemId;
}; //


exports.popupItemIdSelector = popupItemIdSelector;

var hotDealsTimerSelector = function hotDealsTimerSelector(_ref37) {
  var ConfigsDuck = _ref37.ConfigsDuck;
  return ConfigsDuck.hotDealsTimerSeconds;
}; //


exports.hotDealsTimerSelector = hotDealsTimerSelector;

var idProductsFromStartSelector = function idProductsFromStartSelector(_ref38) {
  var ConfigsDuck = _ref38.ConfigsDuck;
  return ConfigsDuck.idProductsFromStart;
}; //


exports.idProductsFromStartSelector = idProductsFromStartSelector;

var getCurrentCurrencySelector = function getCurrentCurrencySelector(_ref39) {
  var ConfigsDuck = _ref39.ConfigsDuck;
  return ConfigsDuck.currentCurrency;
}; //


exports.getCurrentCurrencySelector = getCurrentCurrencySelector;

var getCurrentLanguageSelector = function getCurrentLanguageSelector(_ref40) {
  var ConfigsDuck = _ref40.ConfigsDuck;
  return ConfigsDuck.currentLanguage;
}; //


exports.getCurrentLanguageSelector = getCurrentLanguageSelector;

var getUserId = function getUserId(_ref41) {
  var UserDuck = _ref41.UserDuck;
  return UserDuck.userId;
}; //


exports.getUserId = getUserId;

var getAvatartUrl = function getAvatartUrl(_ref42) {
  var UserDuck = _ref42.UserDuck;
  return UserDuck.avatarURL;
}; //


exports.getAvatartUrl = getAvatartUrl;

var getUserDataSelector = function getUserDataSelector(_ref43) {
  var UserDuck = _ref43.UserDuck;
  return UserDuck.userData;
}; //


exports.getUserDataSelector = getUserDataSelector;

var getCartSelector = function getCartSelector(_ref44) {
  var CartDuck = _ref44.CartDuck;
  return CartDuck.cartData;
}; //


exports.getCartSelector = getCartSelector;

var getCartCountSelector = function getCartCountSelector(_ref45) {
  var CartDuck = _ref45.CartDuck;
  return CartDuck.countItems;
}; //


exports.getCartCountSelector = getCartCountSelector;

var getTotalPriceSelector = function getTotalPriceSelector(_ref46) {
  var CartDuck = _ref46.CartDuck;
  return CartDuck.totalPrice;
}; //


exports.getTotalPriceSelector = getTotalPriceSelector;

var getProductsInCart = function getProductsInCart(_ref47) {
  var ProductDuck = _ref47.ProductDuck;
  return ProductDuck.cartProducts;
}; //


exports.getProductsInCart = getProductsInCart;

var getUserOrders = function getUserOrders(_ref48) {
  var OrderDuck = _ref48.OrderDuck;
  return OrderDuck.ordersData;
}; //


exports.getUserOrders = getUserOrders;

var getOrderIdDelete = function getOrderIdDelete(_ref49) {
  var OrderDuck = _ref49.OrderDuck;
  return OrderDuck.orderIdForDelete;
}; //


exports.getOrderIdDelete = getOrderIdDelete;

var getUserProducts = function getUserProducts(_ref50) {
  var OrderDuck = _ref50.OrderDuck;
  return OrderDuck.orderProducts;
}; //


exports.getUserProducts = getUserProducts;

var getProductsCounts = function getProductsCounts(_ref51) {
  var OrderDuck = _ref51.OrderDuck;
  return OrderDuck.productsCounts;
}; //


exports.getProductsCounts = getProductsCounts;

var getStatusIndex = function getStatusIndex(_ref52) {
  var OrderDuck = _ref52.OrderDuck;
  return OrderDuck.currentStatus;
}; //


exports.getStatusIndex = getStatusIndex;

var getConfirmIdSelector = function getConfirmIdSelector(_ref53) {
  var OrderDuck = _ref53.OrderDuck;
  return OrderDuck.orderConfirmId;
}; //


exports.getConfirmIdSelector = getConfirmIdSelector;

var getEvaluateSelector = function getEvaluateSelector(_ref54) {
  var OrderDuck = _ref54.OrderDuck;
  return OrderDuck.orderId;
}; //


exports.getEvaluateSelector = getEvaluateSelector;

var isConfirmedSelector = function isConfirmedSelector(_ref55) {
  var OrderDuck = _ref55.OrderDuck;
  return OrderDuck.isConfirmed;
}; //
// export const getDeliveredOrdersByUserSelector = ({ OrderDuck }) => OrderDuck.deliveredOrders; //


exports.isConfirmedSelector = isConfirmedSelector;

var getCurrentTabNameSelector = function getCurrentTabNameSelector(_ref56) {
  var ReviewDuck = _ref56.ReviewDuck;
  return ReviewDuck.tabName;
}; //


exports.getCurrentTabNameSelector = getCurrentTabNameSelector;

var getReviewsByProductSelector = function getReviewsByProductSelector(_ref57) {
  var ReviewDuck = _ref57.ReviewDuck;
  return ReviewDuck.reviewsByProduct;
}; //


exports.getReviewsByProductSelector = getReviewsByProductSelector;

var getLatestReviewsSelector = function getLatestReviewsSelector(_ref58) {
  var ReviewDuck = _ref58.ReviewDuck;
  return ReviewDuck.latestReviews;
}; //


exports.getLatestReviewsSelector = getLatestReviewsSelector;

var getReviewIdSelector = function getReviewIdSelector(_ref59) {
  var ReviewDuck = _ref59.ReviewDuck;
  return ReviewDuck.reviewId;
}; //


exports.getReviewIdSelector = getReviewIdSelector;

var getReviewByProductIdAndUserId = function getReviewByProductIdAndUserId(_ref60) {
  var ReviewDuck = _ref60.ReviewDuck;
  return ReviewDuck.reviewByUserAndProduct;
}; //


exports.getReviewByProductIdAndUserId = getReviewByProductIdAndUserId;

var getReviewByUserId = function getReviewByUserId(_ref61) {
  var ReviewDuck = _ref61.ReviewDuck;
  return ReviewDuck.reviewsByUser;
}; //


exports.getReviewByUserId = getReviewByUserId;

var getReviewSortTypeSelector = function getReviewSortTypeSelector(_ref62) {
  var ReviewDuck = _ref62.ReviewDuck;
  return ReviewDuck.reviewSortType;
}; //


exports.getReviewSortTypeSelector = getReviewSortTypeSelector;

var getReviewFilterSelector = function getReviewFilterSelector(_ref63) {
  var ReviewDuck = _ref63.ReviewDuck;
  return ReviewDuck.isFilter;
}; //


exports.getReviewFilterSelector = getReviewFilterSelector;

var getRatingListSelector = function getRatingListSelector(_ref64) {
  var ReviewDuck = _ref64.ReviewDuck;
  return ReviewDuck.ratingList;
}; //


exports.getRatingListSelector = getRatingListSelector;

var getWishListIdsSelector = function getWishListIdsSelector(_ref65) {
  var WishListDuck = _ref65.WishListDuck;
  return WishListDuck.wishList;
}; //


exports.getWishListIdsSelector = getWishListIdsSelector;

var getWishListDataSelector = function getWishListDataSelector(_ref66) {
  var WishListDuck = _ref66.WishListDuck;
  return WishListDuck.wishListData;
}; //


exports.getWishListDataSelector = getWishListDataSelector;

var getViewedProductsSelector = function getViewedProductsSelector(_ref67) {
  var ProductDuck = _ref67.ProductDuck;
  return ProductDuck.viewedProducts;
}; //


exports.getViewedProductsSelector = getViewedProductsSelector;

var getViewedProductIdSelector = function getViewedProductIdSelector(_ref68) {
  var ConfigsDuck = _ref68.ConfigsDuck;
  return ConfigsDuck.viewedProductId;
}; //


exports.getViewedProductIdSelector = getViewedProductIdSelector;

var getViewedProductsDataSelector = function getViewedProductsDataSelector(_ref69) {
  var ProductDuck = _ref69.ProductDuck;
  return ProductDuck.viewedProductsData;
}; //
//admins block//


exports.getViewedProductsDataSelector = getViewedProductsDataSelector;

var adminOrderSelector = function adminOrderSelector(_ref70) {
  var AdminOrderDuck = _ref70.AdminOrderDuck;
  return AdminOrderDuck.ordersList;
}; //


exports.adminOrderSelector = adminOrderSelector;

var adminOrderProductsSelector = function adminOrderProductsSelector(_ref71) {
  var AdminOrderDuck = _ref71.AdminOrderDuck;
  return AdminOrderDuck.currentOrderProducts;
}; //


exports.adminOrderProductsSelector = adminOrderProductsSelector;

var adminTimeObjectSelector = function adminTimeObjectSelector(_ref72) {
  var AdminOrderDuck = _ref72.AdminOrderDuck;
  return AdminOrderDuck.timeObj;
}; //


exports.adminTimeObjectSelector = adminTimeObjectSelector;

var adminTimeObjectProductSelector = function adminTimeObjectProductSelector(_ref73) {
  var AdminProductDuck = _ref73.AdminProductDuck;
  return AdminProductDuck.timeObj;
}; //


exports.adminTimeObjectProductSelector = adminTimeObjectProductSelector;

var adminProductsSelector = function adminProductsSelector(_ref74) {
  var AdminProductDuck = _ref74.AdminProductDuck;
  return AdminProductDuck.productsList;
}; //


exports.adminProductsSelector = adminProductsSelector;

var adminProductIdSelector = function adminProductIdSelector(_ref75) {
  var AdminProductDuck = _ref75.AdminProductDuck;
  return AdminProductDuck.currentProductId;
}; //


exports.adminProductIdSelector = adminProductIdSelector;

var adminProductSelector = function adminProductSelector(_ref76) {
  var AdminProductDuck = _ref76.AdminProductDuck;
  return AdminProductDuck.currentProduct;
}; //


exports.adminProductSelector = adminProductSelector;

var adminProductIsDeletedSelector = function adminProductIsDeletedSelector(_ref77) {
  var AdminProductDuck = _ref77.AdminProductDuck;
  return AdminProductDuck.isDeleted;
}; //


exports.adminProductIsDeletedSelector = adminProductIsDeletedSelector;

var adminCurrentOrderSelector = function adminCurrentOrderSelector(_ref78) {
  var AdminOrderDuck = _ref78.AdminOrderDuck;
  return AdminOrderDuck.currentOrder;
}; //


exports.adminCurrentOrderSelector = adminCurrentOrderSelector;

var adminCurrentOrderInfoSelector = function adminCurrentOrderInfoSelector(_ref79) {
  var AdminOrderDuck = _ref79.AdminOrderDuck;
  return AdminOrderDuck.currentOrderInfo;
}; //


exports.adminCurrentOrderInfoSelector = adminCurrentOrderInfoSelector;

var adminOrderIdSelector = function adminOrderIdSelector(_ref80) {
  var AdminOrderDuck = _ref80.AdminOrderDuck;
  return AdminOrderDuck.currentOrderId;
}; //


exports.adminOrderIdSelector = adminOrderIdSelector;

var adminOrderIsDeletedSelector = function adminOrderIsDeletedSelector(_ref81) {
  var AdminOrderDuck = _ref81.AdminOrderDuck;
  return AdminOrderDuck.isDeleted;
}; //


exports.adminOrderIsDeletedSelector = adminOrderIsDeletedSelector;

var adminUserListSelector = function adminUserListSelector(_ref82) {
  var AdminUserDuck = _ref82.AdminUserDuck;
  return AdminUserDuck.usersList;
}; //


exports.adminUserListSelector = adminUserListSelector;

var adminReviewListSelector = function adminReviewListSelector(_ref83) {
  var AdminReviewDuck = _ref83.AdminReviewDuck;
  return AdminReviewDuck.reviewList;
}; //


exports.adminReviewListSelector = adminReviewListSelector;