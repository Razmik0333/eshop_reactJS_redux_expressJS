
export const categoriesSelector = ({ NavigationDuck }) => NavigationDuck.categories; //
export const productsSelector = ({ ProductDuck }) => ProductDuck.products; //
export const recommendProductsSelector = ({ ProductDuck }) => ProductDuck.recommend; //
export const productsByCategorySelector = ({ ProductDuck }) => ProductDuck.productsByCategory; //
export const productsSimilarSelector = ({ ProductDuck }) => ProductDuck.productsSimilar; //
export const productsByCategoryLengthSelector = ({ ProductDuck }) => ProductDuck.productsByCategoryLength; //
export const currentCategoryIdSelector = ({ NavigationDuck }) => NavigationDuck.categoryID; //
export const currentCategorySelector = ({ NavigationDuck }) => NavigationDuck.currentCategory; //
export const currentCategoryForSearchSelector = ({ NavigationDuck }) => NavigationDuck.currentCategoryForSearch; //
export const currentProductIdSelector = ({ ProductDuck }) => ProductDuck.currentProductId; //
export const currentProductSelector = ({ ProductDuck }) => ProductDuck.currentProduct; //
export const verySoldedProductsSelector = ({ ProductDuck }) => ProductDuck.verySolded; //
export const allSoldedProductsSelector = ({ ProductDuck }) => ProductDuck.allSolded; //
export const productStepCountsSelector = ({ ProductDuck }) => ProductDuck.stepCounts; //
export const currentSearchSelector = ({ NavigationDuck }) => NavigationDuck.searchWord; //
export const currentSearchData = ({ ProductDuck }) => ProductDuck.searchData; //
export const currentHintsData = ({ ProductDuck }) => ProductDuck.hintsData; //
export const maxDiscountDataSelector = ({ ProductDuck }) => ProductDuck.maxDiscountData; //
export const productReviewDataSelector = ({ ProductDuck }) => ProductDuck.productReview; //
export const getEvaluateProductsSelector = ({ OrderDuck }) => OrderDuck.evaluatedProducts; //
export const getMostestProductSelector = ({ProductDuck}) => ProductDuck.mostestProduct;
export const isSearchSelector = ({ NavigationDuck }) => NavigationDuck.isSearch; //
export const isFocusedSelector = ({ NavigationDuck }) => NavigationDuck.isFocused; //
export const subCategoriesSelector = ({ SubCategoryDuck }) => SubCategoryDuck.subCategories; //
export const showTypeSelector = ({ ConfigsDuck }) => ConfigsDuck.showType; //
export const sortTypeSelector = ({ ConfigsDuck }) => ConfigsDuck.sortType; //
export const hotDealsSelector = ({ ConfigsDuck }) => ConfigsDuck.hotDealsId; //
export const languagesSelector = ({ ConfigsDuck }) => ConfigsDuck.languages; //
export const mostestIndex = ({ ConfigsDuck }) => ConfigsDuck.mostestIndex; //
export const currentLanguageDataSelector = ({ ConfigsDuck }) => ConfigsDuck.currentLanguageData; //
export const currentSubCategoryIdSelector = ({ ConfigsDuck }) => ConfigsDuck.subCatId; //
export const currentSubCategorySelector = ({ ConfigsDuck }) => ConfigsDuck.subCat; //
export const currenciesSelector = ({ ConfigsDuck }) => ConfigsDuck.currencies; //
export const countElementsSelector = ({ ConfigsDuck }) => ConfigsDuck.countItems; //
export const countItemsOfPageSelector = ({ ConfigsDuck }) => ConfigsDuck.countItemsOfPage; //
export const costsValuesSelector = ({ ConfigsDuck }) => ConfigsDuck.costInterval; //
export const elementsCostsSelector = ({ ProductDuck }) => ProductDuck.costItems; //
export const modalCloseSelector = ({ ConfigsDuck }) => ConfigsDuck.modalIsClose; //
export const modalReviewShowSelector = ({ ConfigsDuck }) => ConfigsDuck.reviewShow; //
export const popupCloseSelector = ({ ConfigsDuck }) => ConfigsDuck.popupIsShow; //
export const popupHotDealsCloseSelector = ({ ConfigsDuck }) => ConfigsDuck.hotDealsPopup; //
export const popupItemIdSelector = ({ ConfigsDuck }) => ConfigsDuck.popupItemId; //
export const hotDealsTimerSelector = ({ ConfigsDuck }) => ConfigsDuck.hotDealsTimerSeconds; //
export const idProductsFromStartSelector = ({ ConfigsDuck }) => ConfigsDuck.idProductsFromStart; //
export const getCurrentCurrencySelector = ({ ConfigsDuck }) => ConfigsDuck.currentCurrency; //
export const getCurrentLanguageSelector = ({ ConfigsDuck }) => ConfigsDuck.currentLanguage; //
export const getUserId = ({ UserDuck }) => UserDuck.userId; //
export const getAvatartUrl = ({ UserDuck }) => UserDuck.avatarURL; //
export const getUserDataSelector = ({ UserDuck }) => UserDuck.userData; //
export const getUserCacheClearSelector = ({ UserDuck }) => UserDuck.isCleared; //
export const getEmailNoticeSelector = ({ UserDuck }) => UserDuck.emailSubscribe; //
export const getCartSelector = ({ CartDuck }) => CartDuck.cartData; //
export const getCartCountSelector = ({ CartDuck }) => CartDuck.countItems; //
export const getTotalPriceSelector = ({ CartDuck }) => CartDuck.totalPrice; //
export const getProductsInCart = ({ ProductDuck }) => ProductDuck.cartProducts; //
export const getUserOrders = ({ OrderDuck }) => OrderDuck.ordersData; //
export const getOrderIdDelete = ({ OrderDuck }) => OrderDuck.orderIdForDelete; //
export const getUserProducts = ({ OrderDuck }) => OrderDuck.orderProducts; //
export const getProductsCounts = ({ OrderDuck }) => OrderDuck.productsCounts; //
export const getStatusIndex = ({ OrderDuck }) => OrderDuck.currentStatus; //
export const getConfirmIdSelector = ({ OrderDuck }) => OrderDuck.orderConfirmId; //
export const getEvaluateSelector = ({ OrderDuck }) => OrderDuck.orderId; //
export const isConfirmedSelector = ({ OrderDuck }) => OrderDuck.isConfirmed; //
// export const getDeliveredOrdersByUserSelector = ({ OrderDuck }) => OrderDuck.deliveredOrders; //
export const getCurrentTabNameSelector = ({ ReviewDuck }) => ReviewDuck.tabName; //
export const getReviewsByProductSelector = ({ ReviewDuck }) => ReviewDuck.reviewsByProduct; //
export const getLatestReviewsSelector = ({ ReviewDuck }) => ReviewDuck.latestReviews; //
export const getReviewIdSelector = ({ ReviewDuck }) => ReviewDuck.reviewId; //
export const getReviewByProductIdAndUserId = ({ ReviewDuck }) => ReviewDuck.reviewByUserAndProduct; //
export const getReviewByUserId = ({ ReviewDuck }) => ReviewDuck.reviewsByUser; //
export const getReviewSortTypeSelector = ({ ReviewDuck }) => ReviewDuck.reviewSortType; //
export const getReviewFilterSelector = ({ ReviewDuck }) => ReviewDuck.isFilter; //
export const getCurrentReviewIdSelector = ({ ReviewDuck }) => ReviewDuck.currentReviewId; //
export const getRatingListSelector = ({ ReviewDuck }) => ReviewDuck.ratingList; //
export const getWishListIdsSelector = ({ WishListDuck }) => WishListDuck.wishList; //
export const getWishListDataSelector = ({ WishListDuck }) => WishListDuck.wishListData; //
export const getViewedProductsSelector = ({ ProductDuck }) => ProductDuck.viewedProducts; //
export const getGallerySelector = ({ ProductDuck }) => ProductDuck.gallery; //
export const getSubCategoryDataSelector = ({ ProductDuck }) => ProductDuck.productsBySubCategories; //
export const getSubCategoryParamsSelector = ({ SubCategoryDuck }) => SubCategoryDuck.subCatParams; //
export const getViewedProductIdSelector = ({ ConfigsDuck }) => ConfigsDuck.viewedProductsBlockId; //
export const getSimilarCircleIdSelector = ({ ConfigsDuck }) => ConfigsDuck.similarCirclId; //
export const getBestSellerCircleIdSelector = ({ ConfigsDuck }) => ConfigsDuck.bestSellerCircleId; //
export const navigationBurgerMenuStateSelector = ({ ConfigsDuck }) => ConfigsDuck.navigetionBurgerIsActive; //
export const getViewedProductsDataSelector = ({ ProductDuck }) => ProductDuck.viewedProductsData; //
export const getServicesSelector = ({ProductDuck}) => ProductDuck.services;
export const getFilteredProductsSelector = ({ProductDuck}) => ProductDuck.filteredProducts;
export const getSubCatForSmallSizeSelector = ({ConfigsDuck}) => ConfigsDuck.subCategoriesForSmallSize;
export const getIsSmallSizeSelector = ({ConfigsDuck}) => ConfigsDuck.isSmallSize;


//admins block//
export const adminSubCategoriesByCatIdSelector = ({ AdminSubCategoryDuck }) => AdminSubCategoryDuck.subCategoriesByCatId; //
export const adminSubCategoryIdSelector = ({ AdminSubCategoryDuck }) => AdminSubCategoryDuck.currentSubCategoryId; //
export const adminAllSubCategoriesListSelector = ({ AdminSubCategoryDuck }) => AdminSubCategoryDuck.subCategoriesList; //
export const adminCurrentSubCategorySelector = ({ AdminSubCategoryDuck }) => AdminSubCategoryDuck.currentSubCategory; //
export const adminCategoryIdSelector = ({ AdminSubCategoryDuck }) => AdminSubCategoryDuck.categoryId; //
export const adminCurrentCategoryIdSelector = ({ AdminCategoryDuck }) => AdminCategoryDuck.currentCategoryId; //
export const adminCurrentCategorySelector = ({ AdminCategoryDuck }) => AdminCategoryDuck.currentCategory; //
export const adminCategoriesListSelector = ({ AdminCategoryDuck }) => AdminCategoryDuck.categoriesList; //
export const adminCategoriesSavedSelector = ({ AdminCategoryDuck }) => AdminCategoryDuck.isSaved; //

export const adminOrderSelector = ({ AdminOrderDuck }) => AdminOrderDuck.ordersList; //
export const adminOrderProductsSelector = ({ AdminOrderDuck }) => AdminOrderDuck.currentOrderProducts; //
export const adminTimeObjectSelector = ({ AdminOrderDuck }) => AdminOrderDuck.timeObj; //
export const adminTimeObjectProductSelector = ({ AdminProductDuck }) => AdminProductDuck.timeObj; //

export const adminProductsSelector = ({ AdminProductDuck }) => AdminProductDuck.productsList; //
export const adminProductIdSelector = ({ AdminProductDuck }) => AdminProductDuck.currentProductId; //
export const adminProductSelector = ({ AdminProductDuck }) => AdminProductDuck.currentProduct; //
export const adminProductSavedSelector = ({ AdminProductDuck }) => AdminProductDuck.isSaved; //
export const adminProductIsDeletedSelector = ({ AdminProductDuck }) => AdminProductDuck.isDeleted; //
export const adminGalleryIsAddSelector = ({ AdminProductDuck }) => AdminProductDuck.getGalleryAdd; //
export const adminCurrentOrderSelector = ({ AdminOrderDuck }) => AdminOrderDuck.currentOrder; //
export const adminCurrentOrderInfoSelector = ({ AdminOrderDuck }) => AdminOrderDuck.currentOrderInfo; //
export const adminOrderIdSelector = ({ AdminOrderDuck }) => AdminOrderDuck.currentOrderId; //
export const adminOrdersSaveSelector = ({ AdminOrderDuck }) => AdminOrderDuck.isSaved; //
export const adminOrderIsDeletedSelector = ({ AdminOrderDuck }) => AdminOrderDuck.isDeleted; //
export const adminUserListSelector = ({ AdminUserDuck }) => AdminUserDuck.usersList; //
export const adminReviewListSelector = ({ AdminReviewDuck }) => AdminReviewDuck.reviewList; //
export const adminReviewIdSelector = ({ AdminReviewDuck }) => AdminReviewDuck.currentReviewId; //
export const adminCurrentReviewSelector = ({ AdminReviewDuck }) => AdminReviewDuck.currentReview; //
