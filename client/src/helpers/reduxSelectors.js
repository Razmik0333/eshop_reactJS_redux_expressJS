
export const categoriesSelector = ({ NavigationDuck }) => NavigationDuck.categories; //
export const productsSelector = ({ ProductDuck }) => ProductDuck.products; //
export const recommendProductsSelector = ({ ProductDuck }) => ProductDuck.recommend; //
export const productsByCategorySelector = ({ ProductDuck }) => ProductDuck.productsByCategory; //
export const productsByCategoryLengthSelector = ({ ProductDuck }) => ProductDuck.productsByCategoryLength; //
export const currentCategoryIdSelector = ({ NavigationDuck }) => NavigationDuck.categoryID; //
export const currentCategorySelector = ({ NavigationDuck }) => NavigationDuck.currentCategory; //
export const currentProductIdSelector = ({ ProductDuck }) => ProductDuck.currentProductId; //
export const currentProductSelector = ({ ProductDuck }) => ProductDuck.currentProduct; //
export const verySoldedProductsSelector = ({ ProductDuck }) => ProductDuck.verySolded; //
export const allVerySoldedProductsSelector = ({ ProductDuck }) => ProductDuck.allVerySolded; //
export const productStepCountsSelector = ({ ProductDuck }) => ProductDuck.stepCounts; //
export const currentSearchSelector = ({ NavigationDuck }) => NavigationDuck.searchWord; //
export const currentSearchData = ({ ProductDuck }) => ProductDuck.searchData; //
export const maxDiscountDataSelector = ({ ProductDuck }) => ProductDuck.maxDiscountData; //
export const isSearchSelector = ({ NavigationDuck }) => NavigationDuck.isSearch; //
export const showTypeSelector = ({ ConfigsDuck }) => ConfigsDuck.showType; //
export const sortTypeSelector = ({ ConfigsDuck }) => ConfigsDuck.sortType; //
export const hotDealsSelector = ({ ConfigsDuck }) => ConfigsDuck.hotDealsId; //
export const languagesSelector = ({ ConfigsDuck }) => ConfigsDuck.languages; //
export const currentLanguageDataSelector = ({ ConfigsDuck }) => ConfigsDuck.currentLanguageData; //
export const currenciesSelector = ({ ConfigsDuck }) => ConfigsDuck.currencies; //
export const countElementsSelector = ({ ConfigsDuck }) => ConfigsDuck.countItems; //
export const countItemsOfPageSelector = ({ ConfigsDuck }) => ConfigsDuck.countItemsOfPage; //
export const costsValuesSelector = ({ ConfigsDuck }) => ConfigsDuck.costInterval; //
export const elementsCostsSelector = ({ ProductDuck }) => ProductDuck.costItems; //
export const modalCloseSelector = ({ ConfigsDuck }) => ConfigsDuck.modalIsClose; //
export const popupCloseSelector = ({ ConfigsDuck }) => ConfigsDuck.popupIsShow; //
export const popupItemIdSelector = ({ ConfigsDuck }) => ConfigsDuck.popupItemId; //
export const hotDealsTimerSelector = ({ ConfigsDuck }) => ConfigsDuck.hotDealsTimerSeconds; //
export const idProductsFromStartSelector = ({ ConfigsDuck }) => ConfigsDuck.idProductsFromStart; //
export const getCurrentCurrencySelector = ({ ConfigsDuck }) => ConfigsDuck.currentCurrency; //
export const getCurrentLanguageSelector = ({ ConfigsDuck }) => ConfigsDuck.currentLanguage; //
export const getUserId = ({ UserDuck }) => UserDuck.userId; //
export const getUserDataSelector = ({ UserDuck }) => UserDuck.userData; //
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
export const isConfirmedSelector = ({ OrderDuck }) => OrderDuck.isConfirmed; //
export const getDeliveredOrdersByUserSelector = ({ OrderDuck }) => OrderDuck.deliveredOrders; //
export const getCurrentTabNameSelector = ({ ReviewDuck }) => ReviewDuck.tabName; //
export const getReviewsByProductSelector = ({ ReviewDuck }) => ReviewDuck.reviewsByProduct; //
export const getReviewByProductIdAndUserId = ({ ReviewDuck }) => ReviewDuck.reviewByUserAndProduct; //
export const getWishListIdsSelector = ({ WishListDuck }) => WishListDuck.wishList; //
export const getWishListDataSelector = ({ WishListDuck }) => WishListDuck.wishListData; //
export const getViewedProductsSelector = ({ ProductDuck }) => ProductDuck.viewedProducts; //
export const getViewedProductsDataSelector = ({ ProductDuck }) => ProductDuck.viewedProductsData; //



//admins block//

export const adminOrderSelector = ({ AdminOrderDuck }) => AdminOrderDuck.ordersList; //
export const adminTimeObjectSelector = ({ AdminOrderDuck }) => AdminOrderDuck.timeObj; //
export const adminTimeObjectProductSelector = ({ AdminProductDuck }) => AdminProductDuck.timeObj; //

export const adminProductsSelector = ({ AdminProductDuck }) => AdminProductDuck.productsList; //
export const adminProductIdSelector = ({ AdminProductDuck }) => AdminProductDuck.currentProductId; //
export const adminProductSelector = ({ AdminProductDuck }) => AdminProductDuck.currentProduct; //
export const adminProductIsDeletedSelector = ({ AdminProductDuck }) => AdminProductDuck.isDeleted; //
export const adminCurrentOrderSelector = ({ AdminOrderDuck }) => AdminOrderDuck.currentOrder; //
export const adminCurrentOrderInfoSelector = ({ AdminOrderDuck }) => AdminOrderDuck.currentOrderInfo; //
export const adminOrderIdSelector = ({ AdminOrderDuck }) => AdminOrderDuck.currentOrderId; //
export const adminOrderIsDeletedSelector = ({ AdminOrderDuck }) => AdminOrderDuck.isDeleted; //
export const adminUserListSelector = ({ AdminUserDuck }) => AdminUserDuck.usersList; //
