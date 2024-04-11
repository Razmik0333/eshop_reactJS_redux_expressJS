import { createAction } from '../../helpers/redux';
import { root } from '../../helpers/constants/constants';
import { checkEmptyObject, getBestSellers, getMostestURL, getObjectFromSoldedOrders, numInArray } from '../../helpers/functions/functions';
const FETCH_PRODUCTS = 'productDuck/FETCH_PRODUCTS';
const FETCH_PRODUCTS_SIMILAR = 'productDuck/FETCH_PRODUCTS_SIMILAR';
const FETCH_PRODUCTS_CATEGORY = 'productDuck/FETCH_PRODUCTS_CATEGORY';
const FETCH_PRODUCTS_CATEGORY_LENGTH = 'productDuck/FETCH_PRODUCTS_CATEGORY_LENGTH';
const FETCH_RECOMMEND_PRODUCTS = 'productDuck/FETCH_RECOMMEND_PRODUCTS';
const FETCH_NEWEST_PRODUCTS = 'productDuck/FETCH_NEWEST_PRODUCTS';
const CURRENT_PRODUCT_ID = 'productDuck/CURRENT_PRODUCT_ID';
const CURRENT_PRODUCT = 'productDuck/CURRENT_PRODUCT';
const FETCH_PRODUCT_RATING = 'productDuck/FETCH_PRODUCT_RATING';
const FETCH_CART_PRODUCTS = 'productDuck/FETCH_CART_PRODUCTS';
const FETCH_VERY_SOLDED_PRODUCTS = 'productDuck/FETCH_VERY_SOLDED_PRODUCTS';
const FETCH_ALL_SOLDED_PRODUCTS = 'productDuck/FETCH_ALL_SOLDED_PRODUCTS';
const STEPS_COUNTS = 'productDuck/STEPS_COUNTS';
const COST_ELEMENTS = 'productDuck/COST_ELEMENTS';
const SEARCH_DATA = 'productDuck/SEARCH_DATA';
const HINTS_DATA = 'productDuck/HINTS_DATA';
const MAX_DISCOUNT_DATA = 'productDuck/MAX_DISCOUNT_DATA';
const VIEWED_PRODUCTS = 'productDuck/VIEWED_PRODUCTS';
const VIEWED_PRODUCTS_DATA = 'productDuck/VIEWED_PRODUCTS_DATA';
const EVALUATED_PRODUCTS_DATA = 'productDuck/EVALUATED_PRODUCTS_DATA';
const EVALUATED_PRODUCT_ITEM = 'productDuck/EVALUATED_PRODUCT_ITEM';
const CLEAR_PRODUCT_REVIEW = 'productDuck/CLEAR_PRODUCT_REVIEW';
const FETCH_MOSTEST = 'productDuck/FETCH_MOSTEST';
const FETCH_MOSTEST_SALE = 'productDuck/FETCH_MOSTEST_SALE';


export const getProducts = createAction(FETCH_PRODUCTS);
export const getProductsSimilar = createAction(FETCH_PRODUCTS_SIMILAR);
export const getCurrentProductId = createAction(CURRENT_PRODUCT_ID);
export const getCurrentProduct = createAction(CURRENT_PRODUCT);
export const getProductsByCategory = createAction(FETCH_PRODUCTS_CATEGORY);
export const getStepsCounts = createAction(STEPS_COUNTS);
export const getProductsByCategoryLength = createAction(FETCH_PRODUCTS_CATEGORY_LENGTH);
export const getRecommendProducts = createAction(FETCH_RECOMMEND_PRODUCTS);
export const getNewestProducts = createAction(FETCH_NEWEST_PRODUCTS);
export const getProductRating = createAction(FETCH_PRODUCT_RATING);
export const getCartProducts = createAction(FETCH_CART_PRODUCTS);
export const getVerySoldedProducts = createAction(FETCH_VERY_SOLDED_PRODUCTS);
export const getAllSoldedProducts = createAction(FETCH_ALL_SOLDED_PRODUCTS);
export const getSearchData = createAction(SEARCH_DATA);
export const getHintsData = createAction(HINTS_DATA);
export const getMaxDiscountData = createAction(MAX_DISCOUNT_DATA);

export const getElementsByCosts = createAction(COST_ELEMENTS);
export const changeViewedProducts = createAction(VIEWED_PRODUCTS);
export const changeViewedProductsData = createAction(VIEWED_PRODUCTS_DATA);
export const changeProductReviewData = createAction(EVALUATED_PRODUCTS_DATA);
export const changeEvaluatedProductItem = createAction(EVALUATED_PRODUCT_ITEM);
export const clearProductReviewData = createAction(CLEAR_PRODUCT_REVIEW);
export const changeMostest = createAction(FETCH_MOSTEST);
//export const changeMostestSale = createAction(FETCH_MOSTEST_SALE);


export const clearSearchData = (arr) => (dispatch) => {
  dispatch(getSearchData(arr));
};
export const clearHintsData = (arr) => (dispatch) => {
  dispatch(getHintsData(arr));
};
export const clearProductReview = () => (dispatch) => {
  dispatch(clearProductReviewData({}));
};
   
export const changeProductReview = (product_id, productItem) => (dispatch) => {

  
  dispatch(changeProductReviewData(
    {
      [product_id] : productItem
      
    }
    ))
}
export const getEvaluatedProductItem = (obj) => (dispatch) => {
  dispatch(changeEvaluatedProductItem(obj))
}

export const fetchProductsForStartingPage = (id) => async (dispatch) => {
  try {
    console.log(id);
    
    const data = await(await fetch(`${root}/api/main/${id}`)).json()
    dispatch(getProducts(data));
  } catch (e) {
    console.log('error from productDuck', e)
  }
};
export const fetchSimilarProducts = (catId, prodId) => async (dispatch) => {
  try {
    const data = await(await fetch(`${root}/api/product/similar/${catId}/${prodId}`)).json()
    dispatch(getProductsSimilar(data));
  } catch (e) {
    console.log('error from productDuck', e)
  }
};


export const fetchProductsByCategory = (id,count) => async(dispatch) => {
  try {
    const data = await (await fetch(`${root}/api/filter/product/${id}`) ).json();
    dispatch(getProductsByCategory(data));
    dispatch(getProductsByCategoryLength(data.length));
    dispatch(getStepsCounts(Math.ceil(data.length / count)));
  } catch (e) {
    console.log('error from productDuck', e)
  }
};

export const fetchProductsByCosts = (typeObj,costObj,count) => async(dispatch) => {
  const type = Object.keys(typeObj)[0];
  const typeVal = Object.values(typeObj)[0];

  try {
    const data = await (await fetch(`${root}/api/cost/?${type}=${typeVal}&start=${costObj.start}&final=${costObj.final}`)).json();
    dispatch(getElementsByCosts(data));
    dispatch(getStepsCounts(Math.ceil(data.length / count)));
  } catch (e) {
    console.log('error from productDuck', e)
  }
};

export const fetchSearchedHints = (user_id) => async(dispatch) => {
 
  try {
    const data = await (await fetch(`${root}/api/hint`, 
    {
      method: "PUT",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        user_id
      })
    }) ).json();
    dispatch(getHintsData(data));
  } catch (e) {
    console.log('error from productDuck', e)
  }    
};
export const changeHints = (user_id, hint) => async(dispatch) =>  {
  try {
    const data = await (await fetch(`${root}/api/hint/add/${hint}`, {
      method:"PUT",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        user_id
      })
    }) ).json();

  } catch (e) {
    console.log('error from productDuck', e)
  }  
};
export const fetchSearchedData = (str,count) => async(dispatch) => {
 
  try {
    const data = await (await fetch(`${root}/api/search/?search=${str}`) ).json();
    dispatch(getSearchData(data));
    dispatch(getStepsCounts(Math.ceil(data.length / count)));
  } catch (e) {
    console.log('error from productDuck', e)
  }    
};

export const fetchCurrentProduct = (id) => async(dispatch) => {
  try {
    const data = await(await fetch(`${root}/api/product/${id}`)).json();
    dispatch(getCurrentProduct(data));
  } catch (e) {
    console.log('error from productDuck', e)
  }
};
export const fetchMaxDiscountProduct = () => async (dispatch) => {
  
  try {
    const data = await (await fetch(`${root}/api/discount`)).json();
    dispatch(getMaxDiscountData(data));
  } catch (e) {
    console.log('error from productDuck', e)
  }
};

export const fetchRecomendedProducts = () => async(dispatch) => {
  try {
    const data = await (await fetch(`${root}/api/recommend`)).json()
    dispatch(getRecommendProducts(data));
  } catch (e) {
    console.log('error from productDuck', e)
  }
};
export const changeProductsRating = (productIds) => async(dispatch) => {

  try {
    const data = await (await fetch(`${root}/api/product/rating/${productIds}`)).json()

  } catch (error) {
    
  }
};
export const fetchProductsByString = (arr) => async(dispatch) => {
  //arr.length === 0 ? dispatch(getCartProducts([])) :
  
  try {
    const data = await (await fetch(`${root}/api/list/product/${arr}`)).json()
    dispatch(getCartProducts(data));

  } catch (e) {
    console.log('error from productDuck', e)
  }
};
export const fetchViewedProducts = (userId, ids) => async(dispatch) => {
 if (userId && ids.length > 0) {
  try {
    const data = await (await fetch(`${root}/api/list/product`, {
        method: "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          userId, ids
        })
    })).json()
    console.log("🚀 ~ fetchViewedProducts ~ data:", data)
    dispatch(changeViewedProductsData(data));
  
  } catch (e) {
    console.log('error from productDuck', e)
  }
 }else{
  dispatch(changeViewedProductsData([]))
 }
};
export const fetchViewedProductIds = (userId, product_id) => async (dispatch) => {
  try {
    
    const data = await (await fetch(`${root}/api/viewed`, {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body : JSON.stringify({
        userId, product_id
      })
    })).json();
    console.log(data);
    
    dispatch(changeViewedProducts(data));

  } catch (e) {
    console.log('error from productDuck', e)
  }
};

// export const fetchNewestProducts = (arr) => (dispatch) => {
//   fetch(`${root}/list/product/${arr}`) 
//     .then((res) => res.json())
//     .then((res) => {
//       dispatch(getNewestProducts(res));
//     })
//     .catch((e) => console.log('error from productDuck', e));
// };
export const fetchVerySoldedProducts = () => async(dispatch) => {
  
  try {
    const data = await (await fetch(`${root}/api/package/sold`)).json();
    dispatch(getVerySoldedProducts(data));
  } catch (e) {
    console.log('error from productDuck', e)
  }
};
export const fetchAllSoldedProducts = () => async(dispatch) => {
  
  try {
    const data = await (await fetch(`${root}/api/package/delivered/all`)).json();
    dispatch(getAllSoldedProducts(data));
  } catch (e) {
    console.log('error from productDuck', e)
  }
};

export const fetchMostestProduct = (id) => async(dispatch) => {
  const urlPath = getMostestURL(id) 
  try {
    const data = await (await fetch(`${root}/api/mostest/${urlPath?.url}`)).json();
    dispatch(changeMostest(data));
  } catch (e) {
    console.log('error from productDuck', e)
  }
};


export const currentProduct = (id) => (dispatch) => {
  dispatch(getCurrentProductId(id));
};
export const getCartProductsItems = (obj) => (dispatch) => {
  dispatch(getCartProducts(obj));
};
export const changeStepsCounts = (num) => (dispatch) => {
  dispatch(getStepsCounts(num));
};
export const clearProductsByCosts = () => (dispatch) => {
  dispatch(getElementsByCosts([]));
};

export const initialStateApp = {
  products: [], //
  productsSimilar: [], //
  productsByCategory: [], //
  productsByCategoryLength: null, //
  stepCounts : null,
  recommend : [],
  costItems : [],  
  searchData: [],
  maxDiscountData: [],
  currentProductId : null,
  cartProducts:[],
  verySolded:[],
  allSolded:[],
  currentProduct : [],
  viewedProducts : [],
  viewedProductsData : [],
  rating : null,
  hintsData:[],
  productReview: {},
  mostestProduct:{}
};

function ProductDuck(state = initialStateApp, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case FETCH_PRODUCTS_SIMILAR:
      return {
        ...state,
        productsSimilar: action.payload,
      };
    case FETCH_PRODUCTS_CATEGORY:
      return {
        ...state,
        productsByCategory: action.payload,
      };
    case FETCH_PRODUCTS_CATEGORY_LENGTH:
      return {
        ...state,
        productsByCategoryLength: action.payload,
      };
    case FETCH_RECOMMEND_PRODUCTS:
      return {
        ...state,
        recommend: action.payload,
      };
    case CURRENT_PRODUCT_ID:
      return {
        ...state,
        currentProductId: action.payload,
      };
    case CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: action.payload,
      };
    case COST_ELEMENTS:
      return {
        ...state,
        costItems: action.payload,
      };
    case STEPS_COUNTS:
      return {
        ...state,
        stepCounts: action.payload,
      };
    case FETCH_PRODUCT_RATING:
      return {
        ...state,
        rating: action.payload,
      };
    case FETCH_CART_PRODUCTS:
      return {
        ...state,
        cartProducts: action.payload,
      };
    case FETCH_VERY_SOLDED_PRODUCTS:
      return {
        ...state,
        verySolded: action.payload,
      };
    case FETCH_ALL_SOLDED_PRODUCTS:
      return {
        ...state,
        allSolded: action.payload,
      };
    case SEARCH_DATA:
      return {
        ...state,
        searchData: action.payload,
      };
    case HINTS_DATA:
      return {
        ...state,
        hintsData: action.payload,
      };
    case MAX_DISCOUNT_DATA:
      return {
        ...state,
        maxDiscountData: action.payload,
      };
    case VIEWED_PRODUCTS: 
        return  {
          ...state,
          viewedProducts: action.payload
        }     
      // if (state.viewedProducts.length === 0) {
          
      //   }
      // else{
      //   if (numInArray(state.viewedProducts, action.payload)) {          
      //     return {
      //       ...state,
      //       viewedProducts: [...state.viewedProducts, action.payload],
      //     }
      //   }else{
      //     return  state
      //   }
      // };
    case VIEWED_PRODUCTS_DATA:
      return{
        ...state,
        viewedProductsData: action.payload
      };
    case EVALUATED_PRODUCTS_DATA:         
      if(!checkEmptyObject(state.productReview)){
        const newInd = Object.keys(action.payload)[0];
        if (newInd in state.productReview) {
            return{
              ...state,
              productReview: {
                ...state.productReview,
                [newInd]: {
                  ...state.productReview[newInd],
                  ...action.payload[newInd]
    
                }
            }}
        }
        else{
          return{
            ...state,
            productReview: {
              ...state.productReview,
              ...action.payload,
          }}
        }
        
      }else{

        return{
          ...state,
          productReview: {
            ...state.productReview,
            ...action.payload,
        }}
      };
    case CLEAR_PRODUCT_REVIEW :
      return {
        ...state,
        productReview:{}
      }
    case FETCH_MOSTEST :
      return {
        ...state,
        mostestProduct:action.payload
      }
    default:
      return state;
  }
}

export default ProductDuck;
