import React, { useEffect } from 'react'
import MenuBar from '../menu-bar/MenuBar'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserOrdersByStatus } from '../../../../../redux/ducks/orderDuck';
import { currentLanguageDataSelector, getUserId, getUserOrders } from '../../../../../helpers/reduxSelectors';
import Product from '../../../Product/Product';
import "./styles/_user_product_list.scss"
export default function UserProducts() {
     const userId = useSelector(getUserId)
     const dispatch = useDispatch();
     const productItemText = useSelector(currentLanguageDataSelector)?.product_item;
     const orderedProducts = useSelector(currentLanguageDataSelector)?.product?.ordered;

     useEffect(() => {
          dispatch(fetchUserOrdersByStatus(userId, 4))
     }, []);

     const finishedOrders = useSelector(getUserOrders)
     console.log("🚀 ~ file: UserProducts.jsx:15 ~ UserProducts ~ finishedOrders:", finishedOrders)
    const allProductsByFinishedOrders =  finishedOrders.reduce((acc, curr, pos ) => {
          curr['user_order'].forEach(item => {
               acc.push(item)
          })
          return acc
     }, [])
     console.log(allProductsByFinishedOrders);
     
  return <>
  <div className="container user_list_container">
       <MenuBar/>
       {
          <div className="ordered-products">
               <div className="ordered__products">{orderedProducts}</div>
               <div className="products-list">

                    {
                         allProductsByFinishedOrders.map((item,pos) => {
                              return <Product product={item} text={productItemText} key={`product_${pos}`}/>
                         })
                    }

               </div>

          </div>
     }
       
  </div>
</>   
}
