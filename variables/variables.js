const path = require('path')

const cachesPath = path.resolve() + `/cache_files/`;    

const cachesPaths = {
    product: `${cachesPath}/caches_products/`,
    category:`${cachesPath}/caches_category/`,
    order:`${cachesPath}/caches_order/`,
    review:`${cachesPath}/caches_review/`,
    interest:`${cachesPath}/caches_interest/`
}

module.exports = {
    caches : cachesPaths 
}
