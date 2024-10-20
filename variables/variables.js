const path = require('path')

const cachesPath = path.resolve() + `/cache_files/`;    

const cachesPaths = {
    product: `${cachesPath}/caches_products/`,
    category:`${cachesPath}/caches_category/`,
    order:`${cachesPath}/caches_orders/`,
    review:`${cachesPath}/caches_review/`,
    interest:`${cachesPath}/caches_interest/`
}


const cachesUserPaths = [
    `${cachesPath}/caches_orders/orders/`,
    `${cachesPath}/caches_review/reviews/reviewsByUser/`,
    `${cachesPath}/caches_interest/cart/`,
    `${cachesPath}/caches_interest/wishlist/`,
    `${cachesPath}/caches_products/viewed/`
]
const cachesPathsAdmin = {
    product: `${cachesPath}/caches_admin/caches_admin_products/`,
    //category:`${cachesPath}/caches_category/`,
    order:`${cachesPath}/caches_admin/caches_admin_orders`,
    review:`${cachesPath}/caches_admin/caches_admin_review`,
    //interest:`${cachesPath}/caches_interest/`
}

module.exports = {
    caches : cachesPaths,
    cachesAdmin: cachesPathsAdmin,
    cachesUser :cachesUserPaths
}
