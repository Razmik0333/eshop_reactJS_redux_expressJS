"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adminTimeObjectSelector = exports.adminOrderProductsSelector = exports.adminOrderSelector = exports.adminCategoriesSavedSelector = exports.adminCategoriesListSelector = exports.adminCurrentCategorySelector = exports.adminCurrentCategoryIdSelector = exports.adminCategoryIdSelector = exports.adminCurrentSubCategorySelector = exports.adminAllSubCategoriesListSelector = exports.adminSubCategoryIdSelector = exports.adminSubCategoriesByCatIdSelector = exports.getIsSmallSizeSelector = exports.getSubCatForSmallSizeSelector = exports.getFilteredProductsSelector = exports.getServicesSelector = exports.getViewedProductsDataSelector = exports.navigationBurgerMenuStateSelector = exports.getBestSellerCircleIdSelector = exports.getSimilarCircleIdSelector = exports.getViewedProductIdSelector = exports.getSubCategoryParamsSelector = exports.getSubCategoryDataSelector = exports.getGallerySelector = exports.getViewedProductsSelector = exports.getWishListDataSelector = exports.getWishListIdsSelector = exports.getRatingListSelector = exports.getCurrentReviewIdSelector = exports.getReviewFilterSelector = exports.getReviewSortTypeSelector = exports.getReviewByUserId = exports.getReviewByProductIdAndUserId = exports.getReviewIdSelector = exports.getLatestReviewsSelector = exports.getReviewsByProductSelector = exports.getCurrentTabNameSelector = exports.isConfirmedSelector = exports.getEvaluateSelector = exports.getConfirmIdSelector = exports.getStatusIndex = exports.getProductsCounts = exports.getUserProducts = exports.getOrderIdDelete = exports.getUserOrders = exports.getProductsInCart = exports.getTotalPriceSelector = exports.getCartCountSelector = exports.getCartSelector = exports.getEmailNoticeSelector = exports.getUserCacheClearSelector = exports.getUserDataSelector = exports.getAvatartUrl = exports.getUserId = exports.getCurrentLanguageSelector = exports.getCurrentCurrencySelector = exports.idProductsFromStartSelector = exports.hotDealsTimerSelector = exports.popupItemIdSelector = exports.popupHotDealsCloseSelector = exports.popupCloseSelector = exports.modalReviewShowSelector = exports.modalCloseSelector = exports.elementsCostsSelector = exports.costsValuesSelector = exports.countItemsOfPageSelector = exports.countElementsSelector = exports.currenciesSelector = exports.currentSubCategorySelector = exports.currentSubCategoryIdSelector = exports.currentLanguageDataSelector = exports.mostestIndex = exports.languagesSelector = exports.hotDealsSelector = exports.sortTypeSelector = exports.showTypeSelector = exports.subCategoriesSelector = exports.isFocusedSelector = exports.isSearchSelector = exports.getMostestProductSelector = exports.getEvaluateProductsSelector = exports.productReviewDataSelector = exports.maxDiscountDataSelector = exports.currentHintsData = exports.currentSearchData = exports.currentSearchSelector = exports.productStepCountsSelector = exports.allSoldedProductsSelector = exports.verySoldedProductsSelector = exports.currentProductSelector = exports.currentProductIdSelector = exports.currentCategoryForSearchSelector = exports.currentCategorySelector = exports.currentCategoryIdSelector = exports.productsByCategoryLengthSelector = exports.productsSimilarSelector = exports.productsByCategorySelector = exports.recommendProductsSelector = exports.productsSelector = exports.categoriesSelector = void 0;
exports.adminCurrentReviewSelector = exports.adminReviewIdSelector = exports.adminReviewListSelector = exports.adminUserListSelector = exports.adminOrderIsDeletedSelector = exports.adminOrdersSaveSelector = exports.adminOrderIdSelector = exports.adminCurrentOrderInfoSelector = exports.adminCurrentOrderSelector = exports.adminGalleryIsAddSelector = exports.adminProductIsDeletedSelector = exports.adminProductSavedSelector = exports.adminProductSelector = exports.adminProductIdSelector = exports.adminProductsSelector = exports.adminTimeObjectProductSelector = void 0;

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

var currentCategoryForSearchSelector = function currentCategoryForSearchSelector(_ref9) {
  var NavigationDuck = _ref9.NavigationDuck;
  return NavigationDuck.currentCategoryForSearch;
}; //


exports.currentCategoryForSearchSelector = currentCategoryForSearchSelector;

var currentProductIdSelector = function currentProductIdSelector(_ref10) {
  var ProductDuck = _ref10.ProductDuck;
  return ProductDuck.currentProductId;
}; //


exports.currentProductIdSelector = currentProductIdSelector;

var currentProductSelector = function currentProductSelector(_ref11) {
  var ProductDuck = _ref11.ProductDuck;
  return ProductDuck.currentProduct;
}; //


exports.currentProductSelector = currentProductSelector;

var verySoldedProductsSelector = function verySoldedProductsSelector(_ref12) {
  var ProductDuck = _ref12.ProductDuck;
  return ProductDuck.verySolded;
}; //


exports.verySoldedProductsSelector = verySoldedProductsSelector;

var allSoldedProductsSelector = function allSoldedProductsSelector(_ref13) {
  var ProductDuck = _ref13.ProductDuck;
  return ProductDuck.allSolded;
}; //


exports.allSoldedProductsSelector = allSoldedProductsSelector;

var productStepCountsSelector = function productStepCountsSelector(_ref14) {
  var ProductDuck = _ref14.ProductDuck;
  return ProductDuck.stepCounts;
}; //


exports.productStepCountsSelector = productStepCountsSelector;

var currentSearchSelector = function currentSearchSelector(_ref15) {
  var NavigationDuck = _ref15.NavigationDuck;
  return NavigationDuck.searchWord;
}; //


exports.currentSearchSelector = currentSearchSelector;

var currentSearchData = function currentSearchData(_ref16) {
  var ProductDuck = _ref16.ProductDuck;
  return ProductDuck.searchData;
}; //


exports.currentSearchData = currentSearchData;

var currentHintsData = function currentHintsData(_ref17) {
  var ProductDuck = _ref17.ProductDuck;
  return ProductDuck.hintsData;
}; //


exports.currentHintsData = currentHintsData;

var maxDiscountDataSelector = function maxDiscountDataSelector(_ref18) {
  var ProductDuck = _ref18.ProductDuck;
  return ProductDuck.maxDiscountData;
}; //


exports.maxDiscountDataSelector = maxDiscountDataSelector;

var productReviewDataSelector = function productReviewDataSelector(_ref19) {
  var ProductDuck = _ref19.ProductDuck;
  return ProductDuck.productReview;
}; //


exports.productReviewDataSelector = productReviewDataSelector;

var getEvaluateProductsSelector = function getEvaluateProductsSelector(_ref20) {
  var OrderDuck = _ref20.OrderDuck;
  return OrderDuck.evaluatedProducts;
}; //


exports.getEvaluateProductsSelector = getEvaluateProductsSelector;

var getMostestProductSelector = function getMostestProductSelector(_ref21) {
  var ProductDuck = _ref21.ProductDuck;
  return ProductDuck.mostestProduct;
};

exports.getMostestProductSelector = getMostestProductSelector;

var isSearchSelector = function isSearchSelector(_ref22) {
  var NavigationDuck = _ref22.NavigationDuck;
  return NavigationDuck.isSearch;
}; //


exports.isSearchSelector = isSearchSelector;

var isFocusedSelector = function isFocusedSelector(_ref23) {
  var NavigationDuck = _ref23.NavigationDuck;
  return NavigationDuck.isFocused;
}; //


exports.isFocusedSelector = isFocusedSelector;

var subCategoriesSelector = function subCategoriesSelector(_ref24) {
  var SubCategoryDuck = _ref24.SubCategoryDuck;
  return SubCategoryDuck.subCategories;
}; //


exports.subCategoriesSelector = subCategoriesSelector;

var showTypeSelector = function showTypeSelector(_ref25) {
  var ConfigsDuck = _ref25.ConfigsDuck;
  return ConfigsDuck.showType;
}; //


exports.showTypeSelector = showTypeSelector;

var sortTypeSelector = function sortTypeSelector(_ref26) {
  var ConfigsDuck = _ref26.ConfigsDuck;
  return ConfigsDuck.sortType;
}; //


exports.sortTypeSelector = sortTypeSelector;

var hotDealsSelector = function hotDealsSelector(_ref27) {
  var ConfigsDuck = _ref27.ConfigsDuck;
  return ConfigsDuck.hotDealsId;
}; //


exports.hotDealsSelector = hotDealsSelector;

var languagesSelector = function languagesSelector(_ref28) {
  var ConfigsDuck = _ref28.ConfigsDuck;
  return ConfigsDuck.languages;
}; //


exports.languagesSelector = languagesSelector;

var mostestIndex = function mostestIndex(_ref29) {
  var ConfigsDuck = _ref29.ConfigsDuck;
  return ConfigsDuck.mostestIndex;
}; //


exports.mostestIndex = mostestIndex;

var currentLanguageDataSelector = function currentLanguageDataSelector(_ref30) {
  var ConfigsDuck = _ref30.ConfigsDuck;
  return ConfigsDuck.currentLanguageData;
}; //


exports.currentLanguageDataSelector = currentLanguageDataSelector;

var currentSubCategoryIdSelector = function currentSubCategoryIdSelector(_ref31) {
  var ConfigsDuck = _ref31.ConfigsDuck;
  return ConfigsDuck.subCatId;
}; //


exports.currentSubCategoryIdSelector = currentSubCategoryIdSelector;

var currentSubCategorySelector = function currentSubCategorySelector(_ref32) {
  var ConfigsDuck = _ref32.ConfigsDuck;
  return ConfigsDuck.subCat;
}; //


exports.currentSubCategorySelector = currentSubCategorySelector;

var currenciesSelector = function currenciesSelector(_ref33) {
  var ConfigsDuck = _ref33.ConfigsDuck;
  return ConfigsDuck.currencies;
}; //


exports.currenciesSelector = currenciesSelector;

var countElementsSelector = function countElementsSelector(_ref34) {
  var ConfigsDuck = _ref34.ConfigsDuck;
  return ConfigsDuck.countItems;
}; //


exports.countElementsSelector = countElementsSelector;

var countItemsOfPageSelector = function countItemsOfPageSelector(_ref35) {
  var ConfigsDuck = _ref35.ConfigsDuck;
  return ConfigsDuck.countItemsOfPage;
}; //


exports.countItemsOfPageSelector = countItemsOfPageSelector;

var costsValuesSelector = function costsValuesSelector(_ref36) {
  var ConfigsDuck = _ref36.ConfigsDuck;
  return ConfigsDuck.costInterval;
}; //


exports.costsValuesSelector = costsValuesSelector;

var elementsCostsSelector = function elementsCostsSelector(_ref37) {
  var ProductDuck = _ref37.ProductDuck;
  return ProductDuck.costItems;
}; //


exports.elementsCostsSelector = elementsCostsSelector;

var modalCloseSelector = function modalCloseSelector(_ref38) {
  var ConfigsDuck = _ref38.ConfigsDuck;
  return ConfigsDuck.modalIsClose;
}; //


exports.modalCloseSelector = modalCloseSelector;

var modalReviewShowSelector = function modalReviewShowSelector(_ref39) {
  var ConfigsDuck = _ref39.ConfigsDuck;
  return ConfigsDuck.reviewShow;
}; //


exports.modalReviewShowSelector = modalReviewShowSelector;

var popupCloseSelector = function popupCloseSelector(_ref40) {
  var ConfigsDuck = _ref40.ConfigsDuck;
  return ConfigsDuck.popupIsShow;
}; //


exports.popupCloseSelector = popupCloseSelector;

var popupHotDealsCloseSelector = function popupHotDealsCloseSelector(_ref41) {
  var ConfigsDuck = _ref41.ConfigsDuck;
  return ConfigsDuck.hotDealsPopup;
}; //


exports.popupHotDealsCloseSelector = popupHotDealsCloseSelector;

var popupItemIdSelector = function popupItemIdSelector(_ref42) {
  var ConfigsDuck = _ref42.ConfigsDuck;
  return ConfigsDuck.popupItemId;
}; //


exports.popupItemIdSelector = popupItemIdSelector;

var hotDealsTimerSelector = function hotDealsTimerSelector(_ref43) {
  var ConfigsDuck = _ref43.ConfigsDuck;
  return ConfigsDuck.hotDealsTimerSeconds;
}; //


exports.hotDealsTimerSelector = hotDealsTimerSelector;

var idProductsFromStartSelector = function idProductsFromStartSelector(_ref44) {
  var ConfigsDuck = _ref44.ConfigsDuck;
  return ConfigsDuck.idProductsFromStart;
}; //


exports.idProductsFromStartSelector = idProductsFromStartSelector;

var getCurrentCurrencySelector = function getCurrentCurrencySelector(_ref45) {
  var ConfigsDuck = _ref45.ConfigsDuck;
  return ConfigsDuck.currentCurrency;
}; //


exports.getCurrentCurrencySelector = getCurrentCurrencySelector;

var getCurrentLanguageSelector = function getCurrentLanguageSelector(_ref46) {
  var ConfigsDuck = _ref46.ConfigsDuck;
  return ConfigsDuck.currentLanguage;
}; //


exports.getCurrentLanguageSelector = getCurrentLanguageSelector;

var getUserId = function getUserId(_ref47) {
  var UserDuck = _ref47.UserDuck;
  return UserDuck.userId;
}; //


exports.getUserId = getUserId;

var getAvatartUrl = function getAvatartUrl(_ref48) {
  var UserDuck = _ref48.UserDuck;
  return UserDuck.avatarURL;
}; //


exports.getAvatartUrl = getAvatartUrl;

var getUserDataSelector = function getUserDataSelector(_ref49) {
  var UserDuck = _ref49.UserDuck;
  return UserDuck.userData;
}; //


exports.getUserDataSelector = getUserDataSelector;

var getUserCacheClearSelector = function getUserCacheClearSelector(_ref50) {
  var UserDuck = _ref50.UserDuck;
  return UserDuck.isCleared;
}; //


exports.getUserCacheClearSelector = getUserCacheClearSelector;

var getEmailNoticeSelector = function getEmailNoticeSelector(_ref51) {
  var UserDuck = _ref51.UserDuck;
  return UserDuck.emailSubscribe;
}; //


exports.getEmailNoticeSelector = getEmailNoticeSelector;

var getCartSelector = function getCartSelector(_ref52) {
  var CartDuck = _ref52.CartDuck;
  return CartDuck.cartData;
}; //


exports.getCartSelector = getCartSelector;

var getCartCountSelector = function getCartCountSelector(_ref53) {
  var CartDuck = _ref53.CartDuck;
  return CartDuck.countItems;
}; //


exports.getCartCountSelector = getCartCountSelector;

var getTotalPriceSelector = function getTotalPriceSelector(_ref54) {
  var CartDuck = _ref54.CartDuck;
  return CartDuck.totalPrice;
}; //


exports.getTotalPriceSelector = getTotalPriceSelector;

var getProductsInCart = function getProductsInCart(_ref55) {
  var ProductDuck = _ref55.ProductDuck;
  return ProductDuck.cartProducts;
}; //


exports.getProductsInCart = getProductsInCart;

var getUserOrders = function getUserOrders(_ref56) {
  var OrderDuck = _ref56.OrderDuck;
  return OrderDuck.ordersData;
}; //


exports.getUserOrders = getUserOrders;

var getOrderIdDelete = function getOrderIdDelete(_ref57) {
  var OrderDuck = _ref57.OrderDuck;
  return OrderDuck.orderIdForDelete;
}; //


exports.getOrderIdDelete = getOrderIdDelete;

var getUserProducts = function getUserProducts(_ref58) {
  var OrderDuck = _ref58.OrderDuck;
  return OrderDuck.orderProducts;
}; //


exports.getUserProducts = getUserProducts;

var getProductsCounts = function getProductsCounts(_ref59) {
  var OrderDuck = _ref59.OrderDuck;
  return OrderDuck.productsCounts;
}; //


exports.getProductsCounts = getProductsCounts;

var getStatusIndex = function getStatusIndex(_ref60) {
  var OrderDuck = _ref60.OrderDuck;
  return OrderDuck.currentStatus;
}; //


exports.getStatusIndex = getStatusIndex;

var getConfirmIdSelector = function getConfirmIdSelector(_ref61) {
  var OrderDuck = _ref61.OrderDuck;
  return OrderDuck.orderConfirmId;
}; //


exports.getConfirmIdSelector = getConfirmIdSelector;

var getEvaluateSelector = function getEvaluateSelector(_ref62) {
  var OrderDuck = _ref62.OrderDuck;
  return OrderDuck.orderId;
}; //


exports.getEvaluateSelector = getEvaluateSelector;

var isConfirmedSelector = function isConfirmedSelector(_ref63) {
  var OrderDuck = _ref63.OrderDuck;
  return OrderDuck.isConfirmed;
}; //
// export const getDeliveredOrdersByUserSelector = ({ OrderDuck }) => OrderDuck.deliveredOrders; //


exports.isConfirmedSelector = isConfirmedSelector;

var getCurrentTabNameSelector = function getCurrentTabNameSelector(_ref64) {
  var ReviewDuck = _ref64.ReviewDuck;
  return ReviewDuck.tabName;
}; //


exports.getCurrentTabNameSelector = getCurrentTabNameSelector;

var getReviewsByProductSelector = function getReviewsByProductSelector(_ref65) {
  var ReviewDuck = _ref65.ReviewDuck;
  return ReviewDuck.reviewsByProduct;
}; //


exports.getReviewsByProductSelector = getReviewsByProductSelector;

var getLatestReviewsSelector = function getLatestReviewsSelector(_ref66) {
  var ReviewDuck = _ref66.ReviewDuck;
  return ReviewDuck.latestReviews;
}; //


exports.getLatestReviewsSelector = getLatestReviewsSelector;

var getReviewIdSelector = function getReviewIdSelector(_ref67) {
  var ReviewDuck = _ref67.ReviewDuck;
  return ReviewDuck.reviewId;
}; //


exports.getReviewIdSelector = getReviewIdSelector;

var getReviewByProductIdAndUserId = function getReviewByProductIdAndUserId(_ref68) {
  var ReviewDuck = _ref68.ReviewDuck;
  return ReviewDuck.reviewByUserAndProduct;
}; //


exports.getReviewByProductIdAndUserId = getReviewByProductIdAndUserId;

var getReviewByUserId = function getReviewByUserId(_ref69) {
  var ReviewDuck = _ref69.ReviewDuck;
  return ReviewDuck.reviewsByUser;
}; //


exports.getReviewByUserId = getReviewByUserId;

var getReviewSortTypeSelector = function getReviewSortTypeSelector(_ref70) {
  var ReviewDuck = _ref70.ReviewDuck;
  return ReviewDuck.reviewSortType;
}; //


exports.getReviewSortTypeSelector = getReviewSortTypeSelector;

var getReviewFilterSelector = function getReviewFilterSelector(_ref71) {
  var ReviewDuck = _ref71.ReviewDuck;
  return ReviewDuck.isFilter;
}; //


exports.getReviewFilterSelector = getReviewFilterSelector;

var getCurrentReviewIdSelector = function getCurrentReviewIdSelector(_ref72) {
  var ReviewDuck = _ref72.ReviewDuck;
  return ReviewDuck.currentReviewId;
}; //


exports.getCurrentReviewIdSelector = getCurrentReviewIdSelector;

var getRatingListSelector = function getRatingListSelector(_ref73) {
  var ReviewDuck = _ref73.ReviewDuck;
  return ReviewDuck.ratingList;
}; //


exports.getRatingListSelector = getRatingListSelector;

var getWishListIdsSelector = function getWishListIdsSelector(_ref74) {
  var WishListDuck = _ref74.WishListDuck;
  return WishListDuck.wishList;
}; //


exports.getWishListIdsSelector = getWishListIdsSelector;

var getWishListDataSelector = function getWishListDataSelector(_ref75) {
  var WishListDuck = _ref75.WishListDuck;
  return WishListDuck.wishListData;
}; //


exports.getWishListDataSelector = getWishListDataSelector;

var getViewedProductsSelector = function getViewedProductsSelector(_ref76) {
  var ProductDuck = _ref76.ProductDuck;
  return ProductDuck.viewedProducts;
}; //


exports.getViewedProductsSelector = getViewedProductsSelector;

var getGallerySelector = function getGallerySelector(_ref77) {
  var ProductDuck = _ref77.ProductDuck;
  return ProductDuck.gallery;
}; //


exports.getGallerySelector = getGallerySelector;

var getSubCategoryDataSelector = function getSubCategoryDataSelector(_ref78) {
  var ProductDuck = _ref78.ProductDuck;
  return ProductDuck.productsBySubCategories;
}; //


exports.getSubCategoryDataSelector = getSubCategoryDataSelector;

var getSubCategoryParamsSelector = function getSubCategoryParamsSelector(_ref79) {
  var SubCategoryDuck = _ref79.SubCategoryDuck;
  return SubCategoryDuck.subCatParams;
}; //


exports.getSubCategoryParamsSelector = getSubCategoryParamsSelector;

var getViewedProductIdSelector = function getViewedProductIdSelector(_ref80) {
  var ConfigsDuck = _ref80.ConfigsDuck;
  return ConfigsDuck.viewedProductsBlockId;
}; //


exports.getViewedProductIdSelector = getViewedProductIdSelector;

var getSimilarCircleIdSelector = function getSimilarCircleIdSelector(_ref81) {
  var ConfigsDuck = _ref81.ConfigsDuck;
  return ConfigsDuck.similarCirclId;
}; //


exports.getSimilarCircleIdSelector = getSimilarCircleIdSelector;

var getBestSellerCircleIdSelector = function getBestSellerCircleIdSelector(_ref82) {
  var ConfigsDuck = _ref82.ConfigsDuck;
  return ConfigsDuck.bestSellerCircleId;
}; //


exports.getBestSellerCircleIdSelector = getBestSellerCircleIdSelector;

var navigationBurgerMenuStateSelector = function navigationBurgerMenuStateSelector(_ref83) {
  var ConfigsDuck = _ref83.ConfigsDuck;
  return ConfigsDuck.navigetionBurgerIsActive;
}; //


exports.navigationBurgerMenuStateSelector = navigationBurgerMenuStateSelector;

var getViewedProductsDataSelector = function getViewedProductsDataSelector(_ref84) {
  var ProductDuck = _ref84.ProductDuck;
  return ProductDuck.viewedProductsData;
}; //


exports.getViewedProductsDataSelector = getViewedProductsDataSelector;

var getServicesSelector = function getServicesSelector(_ref85) {
  var ProductDuck = _ref85.ProductDuck;
  return ProductDuck.services;
};

exports.getServicesSelector = getServicesSelector;

var getFilteredProductsSelector = function getFilteredProductsSelector(_ref86) {
  var ProductDuck = _ref86.ProductDuck;
  return ProductDuck.filteredProducts;
};

exports.getFilteredProductsSelector = getFilteredProductsSelector;

var getSubCatForSmallSizeSelector = function getSubCatForSmallSizeSelector(_ref87) {
  var ConfigsDuck = _ref87.ConfigsDuck;
  return ConfigsDuck.subCategoriesForSmallSize;
};

exports.getSubCatForSmallSizeSelector = getSubCatForSmallSizeSelector;

var getIsSmallSizeSelector = function getIsSmallSizeSelector(_ref88) {
  var ConfigsDuck = _ref88.ConfigsDuck;
  return ConfigsDuck.isSmallSize;
}; //admins block//


exports.getIsSmallSizeSelector = getIsSmallSizeSelector;

var adminSubCategoriesByCatIdSelector = function adminSubCategoriesByCatIdSelector(_ref89) {
  var AdminSubCategoryDuck = _ref89.AdminSubCategoryDuck;
  return AdminSubCategoryDuck.subCategoriesByCatId;
}; //


exports.adminSubCategoriesByCatIdSelector = adminSubCategoriesByCatIdSelector;

var adminSubCategoryIdSelector = function adminSubCategoryIdSelector(_ref90) {
  var AdminSubCategoryDuck = _ref90.AdminSubCategoryDuck;
  return AdminSubCategoryDuck.currentSubCategoryId;
}; //


exports.adminSubCategoryIdSelector = adminSubCategoryIdSelector;

var adminAllSubCategoriesListSelector = function adminAllSubCategoriesListSelector(_ref91) {
  var AdminSubCategoryDuck = _ref91.AdminSubCategoryDuck;
  return AdminSubCategoryDuck.subCategoriesList;
}; //


exports.adminAllSubCategoriesListSelector = adminAllSubCategoriesListSelector;

var adminCurrentSubCategorySelector = function adminCurrentSubCategorySelector(_ref92) {
  var AdminSubCategoryDuck = _ref92.AdminSubCategoryDuck;
  return AdminSubCategoryDuck.currentSubCategory;
}; //


exports.adminCurrentSubCategorySelector = adminCurrentSubCategorySelector;

var adminCategoryIdSelector = function adminCategoryIdSelector(_ref93) {
  var AdminSubCategoryDuck = _ref93.AdminSubCategoryDuck;
  return AdminSubCategoryDuck.categoryId;
}; //


exports.adminCategoryIdSelector = adminCategoryIdSelector;

var adminCurrentCategoryIdSelector = function adminCurrentCategoryIdSelector(_ref94) {
  var AdminCategoryDuck = _ref94.AdminCategoryDuck;
  return AdminCategoryDuck.currentCategoryId;
}; //


exports.adminCurrentCategoryIdSelector = adminCurrentCategoryIdSelector;

var adminCurrentCategorySelector = function adminCurrentCategorySelector(_ref95) {
  var AdminCategoryDuck = _ref95.AdminCategoryDuck;
  return AdminCategoryDuck.currentCategory;
}; //


exports.adminCurrentCategorySelector = adminCurrentCategorySelector;

var adminCategoriesListSelector = function adminCategoriesListSelector(_ref96) {
  var AdminCategoryDuck = _ref96.AdminCategoryDuck;
  return AdminCategoryDuck.categoriesList;
}; //


exports.adminCategoriesListSelector = adminCategoriesListSelector;

var adminCategoriesSavedSelector = function adminCategoriesSavedSelector(_ref97) {
  var AdminCategoryDuck = _ref97.AdminCategoryDuck;
  return AdminCategoryDuck.isSaved;
}; //


exports.adminCategoriesSavedSelector = adminCategoriesSavedSelector;

var adminOrderSelector = function adminOrderSelector(_ref98) {
  var AdminOrderDuck = _ref98.AdminOrderDuck;
  return AdminOrderDuck.ordersList;
}; //


exports.adminOrderSelector = adminOrderSelector;

var adminOrderProductsSelector = function adminOrderProductsSelector(_ref99) {
  var AdminOrderDuck = _ref99.AdminOrderDuck;
  return AdminOrderDuck.currentOrderProducts;
}; //


exports.adminOrderProductsSelector = adminOrderProductsSelector;

var adminTimeObjectSelector = function adminTimeObjectSelector(_ref100) {
  var AdminOrderDuck = _ref100.AdminOrderDuck;
  return AdminOrderDuck.timeObj;
}; //


exports.adminTimeObjectSelector = adminTimeObjectSelector;

var adminTimeObjectProductSelector = function adminTimeObjectProductSelector(_ref101) {
  var AdminProductDuck = _ref101.AdminProductDuck;
  return AdminProductDuck.timeObj;
}; //


exports.adminTimeObjectProductSelector = adminTimeObjectProductSelector;

var adminProductsSelector = function adminProductsSelector(_ref102) {
  var AdminProductDuck = _ref102.AdminProductDuck;
  return AdminProductDuck.productsList;
}; //


exports.adminProductsSelector = adminProductsSelector;

var adminProductIdSelector = function adminProductIdSelector(_ref103) {
  var AdminProductDuck = _ref103.AdminProductDuck;
  return AdminProductDuck.currentProductId;
}; //


exports.adminProductIdSelector = adminProductIdSelector;

var adminProductSelector = function adminProductSelector(_ref104) {
  var AdminProductDuck = _ref104.AdminProductDuck;
  return AdminProductDuck.currentProduct;
}; //


exports.adminProductSelector = adminProductSelector;

var adminProductSavedSelector = function adminProductSavedSelector(_ref105) {
  var AdminProductDuck = _ref105.AdminProductDuck;
  return AdminProductDuck.isSaved;
}; //


exports.adminProductSavedSelector = adminProductSavedSelector;

var adminProductIsDeletedSelector = function adminProductIsDeletedSelector(_ref106) {
  var AdminProductDuck = _ref106.AdminProductDuck;
  return AdminProductDuck.isDeleted;
}; //


exports.adminProductIsDeletedSelector = adminProductIsDeletedSelector;

var adminGalleryIsAddSelector = function adminGalleryIsAddSelector(_ref107) {
  var AdminProductDuck = _ref107.AdminProductDuck;
  return AdminProductDuck.getGalleryAdd;
}; //


exports.adminGalleryIsAddSelector = adminGalleryIsAddSelector;

var adminCurrentOrderSelector = function adminCurrentOrderSelector(_ref108) {
  var AdminOrderDuck = _ref108.AdminOrderDuck;
  return AdminOrderDuck.currentOrder;
}; //


exports.adminCurrentOrderSelector = adminCurrentOrderSelector;

var adminCurrentOrderInfoSelector = function adminCurrentOrderInfoSelector(_ref109) {
  var AdminOrderDuck = _ref109.AdminOrderDuck;
  return AdminOrderDuck.currentOrderInfo;
}; //


exports.adminCurrentOrderInfoSelector = adminCurrentOrderInfoSelector;

var adminOrderIdSelector = function adminOrderIdSelector(_ref110) {
  var AdminOrderDuck = _ref110.AdminOrderDuck;
  return AdminOrderDuck.currentOrderId;
}; //


exports.adminOrderIdSelector = adminOrderIdSelector;

var adminOrdersSaveSelector = function adminOrdersSaveSelector(_ref111) {
  var AdminOrderDuck = _ref111.AdminOrderDuck;
  return AdminOrderDuck.isSaved;
}; //


exports.adminOrdersSaveSelector = adminOrdersSaveSelector;

var adminOrderIsDeletedSelector = function adminOrderIsDeletedSelector(_ref112) {
  var AdminOrderDuck = _ref112.AdminOrderDuck;
  return AdminOrderDuck.isDeleted;
}; //


exports.adminOrderIsDeletedSelector = adminOrderIsDeletedSelector;

var adminUserListSelector = function adminUserListSelector(_ref113) {
  var AdminUserDuck = _ref113.AdminUserDuck;
  return AdminUserDuck.usersList;
}; //


exports.adminUserListSelector = adminUserListSelector;

var adminReviewListSelector = function adminReviewListSelector(_ref114) {
  var AdminReviewDuck = _ref114.AdminReviewDuck;
  return AdminReviewDuck.reviewList;
}; //


exports.adminReviewListSelector = adminReviewListSelector;

var adminReviewIdSelector = function adminReviewIdSelector(_ref115) {
  var AdminReviewDuck = _ref115.AdminReviewDuck;
  return AdminReviewDuck.currentReviewId;
}; //


exports.adminReviewIdSelector = adminReviewIdSelector;

var adminCurrentReviewSelector = function adminCurrentReviewSelector(_ref116) {
  var AdminReviewDuck = _ref116.AdminReviewDuck;
  return AdminReviewDuck.currentReview;
}; //


exports.adminCurrentReviewSelector = adminCurrentReviewSelector;