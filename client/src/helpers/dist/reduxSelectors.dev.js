"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adminCurrentReviewSelector = exports.adminReviewIdSelector = exports.adminReviewListSelector = exports.adminUserListSelector = exports.adminOrderIsDeletedSelector = exports.adminOrdersSaveSelector = exports.adminOrderIdSelector = exports.adminCurrentOrderInfoSelector = exports.adminCurrentOrderSelector = exports.adminProductIsDeletedSelector = exports.adminProductSavedSelector = exports.adminProductSelector = exports.adminProductIdSelector = exports.adminProductsSelector = exports.adminTimeObjectProductSelector = exports.adminTimeObjectSelector = exports.adminOrderProductsSelector = exports.adminOrderSelector = exports.getServicesSelector = exports.getViewedProductsDataSelector = exports.getViewedProductIdSelector = exports.getViewedProductsSelector = exports.getWishListDataSelector = exports.getWishListIdsSelector = exports.getRatingListSelector = exports.getCurrentReviewIdSelector = exports.getReviewFilterSelector = exports.getReviewSortTypeSelector = exports.getReviewByUserId = exports.getReviewByProductIdAndUserId = exports.getReviewIdSelector = exports.getLatestReviewsSelector = exports.getReviewsByProductSelector = exports.getCurrentTabNameSelector = exports.isConfirmedSelector = exports.getEvaluateSelector = exports.getConfirmIdSelector = exports.getStatusIndex = exports.getProductsCounts = exports.getUserProducts = exports.getOrderIdDelete = exports.getUserOrders = exports.getProductsInCart = exports.getTotalPriceSelector = exports.getCartCountSelector = exports.getCartSelector = exports.getEmailNoticeSelector = exports.getUserCacheClearSelector = exports.getUserDataSelector = exports.getAvatartUrl = exports.getUserId = exports.getCurrentLanguageSelector = exports.getCurrentCurrencySelector = exports.idProductsFromStartSelector = exports.hotDealsTimerSelector = exports.popupItemIdSelector = exports.popupCloseSelector = exports.modalReviewShowSelector = exports.modalCloseSelector = exports.elementsCostsSelector = exports.costsValuesSelector = exports.countItemsOfPageSelector = exports.countElementsSelector = exports.currenciesSelector = exports.currentLanguageDataSelector = exports.mostestIndex = exports.languagesSelector = exports.hotDealsSelector = exports.sortTypeSelector = exports.showTypeSelector = exports.isFocusedSelector = exports.isSearchSelector = exports.getMostestProductSelector = exports.getEvaluateProductsSelector = exports.productReviewDataSelector = exports.maxDiscountDataSelector = exports.currentHintsData = exports.currentSearchData = exports.currentSearchSelector = exports.productStepCountsSelector = exports.allSoldedProductsSelector = exports.verySoldedProductsSelector = exports.currentProductSelector = exports.currentProductIdSelector = exports.currentCategorySelector = exports.currentCategoryIdSelector = exports.productsByCategoryLengthSelector = exports.productsSimilarSelector = exports.productsByCategorySelector = exports.recommendProductsSelector = exports.productsSelector = exports.categoriesSelector = void 0;

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

var modalReviewShowSelector = function modalReviewShowSelector(_ref35) {
  var ConfigsDuck = _ref35.ConfigsDuck;
  return ConfigsDuck.reviewShow;
}; //


exports.modalReviewShowSelector = modalReviewShowSelector;

var popupCloseSelector = function popupCloseSelector(_ref36) {
  var ConfigsDuck = _ref36.ConfigsDuck;
  return ConfigsDuck.popupIsShow;
}; //


exports.popupCloseSelector = popupCloseSelector;

var popupItemIdSelector = function popupItemIdSelector(_ref37) {
  var ConfigsDuck = _ref37.ConfigsDuck;
  return ConfigsDuck.popupItemId;
}; //


exports.popupItemIdSelector = popupItemIdSelector;

var hotDealsTimerSelector = function hotDealsTimerSelector(_ref38) {
  var ConfigsDuck = _ref38.ConfigsDuck;
  return ConfigsDuck.hotDealsTimerSeconds;
}; //


exports.hotDealsTimerSelector = hotDealsTimerSelector;

var idProductsFromStartSelector = function idProductsFromStartSelector(_ref39) {
  var ConfigsDuck = _ref39.ConfigsDuck;
  return ConfigsDuck.idProductsFromStart;
}; //


exports.idProductsFromStartSelector = idProductsFromStartSelector;

var getCurrentCurrencySelector = function getCurrentCurrencySelector(_ref40) {
  var ConfigsDuck = _ref40.ConfigsDuck;
  return ConfigsDuck.currentCurrency;
}; //


exports.getCurrentCurrencySelector = getCurrentCurrencySelector;

var getCurrentLanguageSelector = function getCurrentLanguageSelector(_ref41) {
  var ConfigsDuck = _ref41.ConfigsDuck;
  return ConfigsDuck.currentLanguage;
}; //


exports.getCurrentLanguageSelector = getCurrentLanguageSelector;

var getUserId = function getUserId(_ref42) {
  var UserDuck = _ref42.UserDuck;
  return UserDuck.userId;
}; //


exports.getUserId = getUserId;

var getAvatartUrl = function getAvatartUrl(_ref43) {
  var UserDuck = _ref43.UserDuck;
  return UserDuck.avatarURL;
}; //


exports.getAvatartUrl = getAvatartUrl;

var getUserDataSelector = function getUserDataSelector(_ref44) {
  var UserDuck = _ref44.UserDuck;
  return UserDuck.userData;
}; //


exports.getUserDataSelector = getUserDataSelector;

var getUserCacheClearSelector = function getUserCacheClearSelector(_ref45) {
  var UserDuck = _ref45.UserDuck;
  return UserDuck.isCleared;
}; //


exports.getUserCacheClearSelector = getUserCacheClearSelector;

var getEmailNoticeSelector = function getEmailNoticeSelector(_ref46) {
  var UserDuck = _ref46.UserDuck;
  return UserDuck.emailSubscribe;
}; //


exports.getEmailNoticeSelector = getEmailNoticeSelector;

var getCartSelector = function getCartSelector(_ref47) {
  var CartDuck = _ref47.CartDuck;
  return CartDuck.cartData;
}; //


exports.getCartSelector = getCartSelector;

var getCartCountSelector = function getCartCountSelector(_ref48) {
  var CartDuck = _ref48.CartDuck;
  return CartDuck.countItems;
}; //


exports.getCartCountSelector = getCartCountSelector;

var getTotalPriceSelector = function getTotalPriceSelector(_ref49) {
  var CartDuck = _ref49.CartDuck;
  return CartDuck.totalPrice;
}; //


exports.getTotalPriceSelector = getTotalPriceSelector;

var getProductsInCart = function getProductsInCart(_ref50) {
  var ProductDuck = _ref50.ProductDuck;
  return ProductDuck.cartProducts;
}; //


exports.getProductsInCart = getProductsInCart;

var getUserOrders = function getUserOrders(_ref51) {
  var OrderDuck = _ref51.OrderDuck;
  return OrderDuck.ordersData;
}; //


exports.getUserOrders = getUserOrders;

var getOrderIdDelete = function getOrderIdDelete(_ref52) {
  var OrderDuck = _ref52.OrderDuck;
  return OrderDuck.orderIdForDelete;
}; //


exports.getOrderIdDelete = getOrderIdDelete;

var getUserProducts = function getUserProducts(_ref53) {
  var OrderDuck = _ref53.OrderDuck;
  return OrderDuck.orderProducts;
}; //


exports.getUserProducts = getUserProducts;

var getProductsCounts = function getProductsCounts(_ref54) {
  var OrderDuck = _ref54.OrderDuck;
  return OrderDuck.productsCounts;
}; //


exports.getProductsCounts = getProductsCounts;

var getStatusIndex = function getStatusIndex(_ref55) {
  var OrderDuck = _ref55.OrderDuck;
  return OrderDuck.currentStatus;
}; //


exports.getStatusIndex = getStatusIndex;

var getConfirmIdSelector = function getConfirmIdSelector(_ref56) {
  var OrderDuck = _ref56.OrderDuck;
  return OrderDuck.orderConfirmId;
}; //


exports.getConfirmIdSelector = getConfirmIdSelector;

var getEvaluateSelector = function getEvaluateSelector(_ref57) {
  var OrderDuck = _ref57.OrderDuck;
  return OrderDuck.orderId;
}; //


exports.getEvaluateSelector = getEvaluateSelector;

var isConfirmedSelector = function isConfirmedSelector(_ref58) {
  var OrderDuck = _ref58.OrderDuck;
  return OrderDuck.isConfirmed;
}; //
// export const getDeliveredOrdersByUserSelector = ({ OrderDuck }) => OrderDuck.deliveredOrders; //


exports.isConfirmedSelector = isConfirmedSelector;

var getCurrentTabNameSelector = function getCurrentTabNameSelector(_ref59) {
  var ReviewDuck = _ref59.ReviewDuck;
  return ReviewDuck.tabName;
}; //


exports.getCurrentTabNameSelector = getCurrentTabNameSelector;

var getReviewsByProductSelector = function getReviewsByProductSelector(_ref60) {
  var ReviewDuck = _ref60.ReviewDuck;
  return ReviewDuck.reviewsByProduct;
}; //


exports.getReviewsByProductSelector = getReviewsByProductSelector;

var getLatestReviewsSelector = function getLatestReviewsSelector(_ref61) {
  var ReviewDuck = _ref61.ReviewDuck;
  return ReviewDuck.latestReviews;
}; //


exports.getLatestReviewsSelector = getLatestReviewsSelector;

var getReviewIdSelector = function getReviewIdSelector(_ref62) {
  var ReviewDuck = _ref62.ReviewDuck;
  return ReviewDuck.reviewId;
}; //


exports.getReviewIdSelector = getReviewIdSelector;

var getReviewByProductIdAndUserId = function getReviewByProductIdAndUserId(_ref63) {
  var ReviewDuck = _ref63.ReviewDuck;
  return ReviewDuck.reviewByUserAndProduct;
}; //


exports.getReviewByProductIdAndUserId = getReviewByProductIdAndUserId;

var getReviewByUserId = function getReviewByUserId(_ref64) {
  var ReviewDuck = _ref64.ReviewDuck;
  return ReviewDuck.reviewsByUser;
}; //


exports.getReviewByUserId = getReviewByUserId;

var getReviewSortTypeSelector = function getReviewSortTypeSelector(_ref65) {
  var ReviewDuck = _ref65.ReviewDuck;
  return ReviewDuck.reviewSortType;
}; //


exports.getReviewSortTypeSelector = getReviewSortTypeSelector;

var getReviewFilterSelector = function getReviewFilterSelector(_ref66) {
  var ReviewDuck = _ref66.ReviewDuck;
  return ReviewDuck.isFilter;
}; //


exports.getReviewFilterSelector = getReviewFilterSelector;

var getCurrentReviewIdSelector = function getCurrentReviewIdSelector(_ref67) {
  var ReviewDuck = _ref67.ReviewDuck;
  return ReviewDuck.currentReviewId;
}; //


exports.getCurrentReviewIdSelector = getCurrentReviewIdSelector;

var getRatingListSelector = function getRatingListSelector(_ref68) {
  var ReviewDuck = _ref68.ReviewDuck;
  return ReviewDuck.ratingList;
}; //


exports.getRatingListSelector = getRatingListSelector;

var getWishListIdsSelector = function getWishListIdsSelector(_ref69) {
  var WishListDuck = _ref69.WishListDuck;
  return WishListDuck.wishList;
}; //


exports.getWishListIdsSelector = getWishListIdsSelector;

var getWishListDataSelector = function getWishListDataSelector(_ref70) {
  var WishListDuck = _ref70.WishListDuck;
  return WishListDuck.wishListData;
}; //


exports.getWishListDataSelector = getWishListDataSelector;

var getViewedProductsSelector = function getViewedProductsSelector(_ref71) {
  var ProductDuck = _ref71.ProductDuck;
  return ProductDuck.viewedProducts;
}; //


exports.getViewedProductsSelector = getViewedProductsSelector;

var getViewedProductIdSelector = function getViewedProductIdSelector(_ref72) {
  var ConfigsDuck = _ref72.ConfigsDuck;
  return ConfigsDuck.viewedProductId;
}; //


exports.getViewedProductIdSelector = getViewedProductIdSelector;

var getViewedProductsDataSelector = function getViewedProductsDataSelector(_ref73) {
  var ProductDuck = _ref73.ProductDuck;
  return ProductDuck.viewedProductsData;
}; //


exports.getViewedProductsDataSelector = getViewedProductsDataSelector;

var getServicesSelector = function getServicesSelector(_ref74) {
  var ProductDuck = _ref74.ProductDuck;
  return ProductDuck.services;
}; //admins block//


exports.getServicesSelector = getServicesSelector;

var adminOrderSelector = function adminOrderSelector(_ref75) {
  var AdminOrderDuck = _ref75.AdminOrderDuck;
  return AdminOrderDuck.ordersList;
}; //


exports.adminOrderSelector = adminOrderSelector;

var adminOrderProductsSelector = function adminOrderProductsSelector(_ref76) {
  var AdminOrderDuck = _ref76.AdminOrderDuck;
  return AdminOrderDuck.currentOrderProducts;
}; //


exports.adminOrderProductsSelector = adminOrderProductsSelector;

var adminTimeObjectSelector = function adminTimeObjectSelector(_ref77) {
  var AdminOrderDuck = _ref77.AdminOrderDuck;
  return AdminOrderDuck.timeObj;
}; //


exports.adminTimeObjectSelector = adminTimeObjectSelector;

var adminTimeObjectProductSelector = function adminTimeObjectProductSelector(_ref78) {
  var AdminProductDuck = _ref78.AdminProductDuck;
  return AdminProductDuck.timeObj;
}; //


exports.adminTimeObjectProductSelector = adminTimeObjectProductSelector;

var adminProductsSelector = function adminProductsSelector(_ref79) {
  var AdminProductDuck = _ref79.AdminProductDuck;
  return AdminProductDuck.productsList;
}; //


exports.adminProductsSelector = adminProductsSelector;

var adminProductIdSelector = function adminProductIdSelector(_ref80) {
  var AdminProductDuck = _ref80.AdminProductDuck;
  return AdminProductDuck.currentProductId;
}; //


exports.adminProductIdSelector = adminProductIdSelector;

var adminProductSelector = function adminProductSelector(_ref81) {
  var AdminProductDuck = _ref81.AdminProductDuck;
  return AdminProductDuck.currentProduct;
}; //


exports.adminProductSelector = adminProductSelector;

var adminProductSavedSelector = function adminProductSavedSelector(_ref82) {
  var AdminProductDuck = _ref82.AdminProductDuck;
  return AdminProductDuck.isSaved;
}; //


exports.adminProductSavedSelector = adminProductSavedSelector;

var adminProductIsDeletedSelector = function adminProductIsDeletedSelector(_ref83) {
  var AdminProductDuck = _ref83.AdminProductDuck;
  return AdminProductDuck.isDeleted;
}; //


exports.adminProductIsDeletedSelector = adminProductIsDeletedSelector;

var adminCurrentOrderSelector = function adminCurrentOrderSelector(_ref84) {
  var AdminOrderDuck = _ref84.AdminOrderDuck;
  return AdminOrderDuck.currentOrder;
}; //


exports.adminCurrentOrderSelector = adminCurrentOrderSelector;

var adminCurrentOrderInfoSelector = function adminCurrentOrderInfoSelector(_ref85) {
  var AdminOrderDuck = _ref85.AdminOrderDuck;
  return AdminOrderDuck.currentOrderInfo;
}; //


exports.adminCurrentOrderInfoSelector = adminCurrentOrderInfoSelector;

var adminOrderIdSelector = function adminOrderIdSelector(_ref86) {
  var AdminOrderDuck = _ref86.AdminOrderDuck;
  return AdminOrderDuck.currentOrderId;
}; //


exports.adminOrderIdSelector = adminOrderIdSelector;

var adminOrdersSaveSelector = function adminOrdersSaveSelector(_ref87) {
  var AdminOrderDuck = _ref87.AdminOrderDuck;
  return AdminOrderDuck.isSaved;
}; //


exports.adminOrdersSaveSelector = adminOrdersSaveSelector;

var adminOrderIsDeletedSelector = function adminOrderIsDeletedSelector(_ref88) {
  var AdminOrderDuck = _ref88.AdminOrderDuck;
  return AdminOrderDuck.isDeleted;
}; //


exports.adminOrderIsDeletedSelector = adminOrderIsDeletedSelector;

var adminUserListSelector = function adminUserListSelector(_ref89) {
  var AdminUserDuck = _ref89.AdminUserDuck;
  return AdminUserDuck.usersList;
}; //


exports.adminUserListSelector = adminUserListSelector;

var adminReviewListSelector = function adminReviewListSelector(_ref90) {
  var AdminReviewDuck = _ref90.AdminReviewDuck;
  return AdminReviewDuck.reviewList;
}; //


exports.adminReviewListSelector = adminReviewListSelector;

var adminReviewIdSelector = function adminReviewIdSelector(_ref91) {
  var AdminReviewDuck = _ref91.AdminReviewDuck;
  return AdminReviewDuck.currentReviewId;
}; //


exports.adminReviewIdSelector = adminReviewIdSelector;

var adminCurrentReviewSelector = function adminCurrentReviewSelector(_ref92) {
  var AdminReviewDuck = _ref92.AdminReviewDuck;
  return AdminReviewDuck.currentReview;
}; //


exports.adminCurrentReviewSelector = adminCurrentReviewSelector;