import { NavLink } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { currentProductID, fetchProductItem, fetchProductsForDelete } from "../../../../redux/ducks/adminProductDuck";
import { root } from "../../../../helpers/constants/constants";
import { adminProductIsDeletedSelector, getUserId, modalCloseSelector } from "../../../../helpers/reduxSelectors";
import { useState } from "react";
import ModalProductDelete from "../../Modal/ModalProductDelete";
import { changeModal } from "../../../../redux/ducks/configsDuck";


function ProductsInfoItem({product}) {
     const [forDeleted, setforDeleted] = useState(false)
     const dispatch = useDispatch();
     const getProductId = (e) => {
          dispatch(currentProductID(e.target.dataset.id))
          dispatch(fetchProductItem(e.target.dataset.id))
     }
     const deleteProductItem = (e) => {
          dispatch(changeModal(true))
          dispatch(currentProductID(e.target.dataset.id))
         
     }
     
     return (
          <>
     
          <div className="product__item__info">
               <div className="product__item__data__info">
                    <input type="checkbox"/>
               </div>
               <div className="product__item__data__info">
                    {product?.id}
               </div>
               <div className="product__item__data__info">
                    {product?.category}
               </div>
               <div className="product__item__data__info">
                    {product?.alias}
               </div>
               <div className="product__item__data__info">
                    {product?.arm_name}
               </div>
               <div className="product__item__data__info">
                    {product?.descr}

               </div>
               <div className="product__item__data__info">
                    {

                         `${product?.cost}Դ`
                    }

               </div>
               
               <div className="product__item__data__info">
                    {
                         `${product?.discount}%`
                    }
               </div>
               <div className="product__item__data__info">
                    <span className={`status__product `}>
                         {
                              `${product?.rating}`
                         }
                    </span>
               </div>
               <div className="product__item__data__info">
                    <NavLink 
                         to={`/admin/product/update/page`} 
                         data-id={`${product?.id}`} 
                         onClick={getProductId}
                         className="link__action"
                         >
                         Update
                    </NavLink>
               </div>
               <div className="product__item__data__info">
                   <NavLink to={`#`} data-id={`${product?.id}`}
                    onClick={deleteProductItem}
                    className="link__action"
                   >
                    Delete
                   </NavLink>
               </div>
          </div>
          </>
     )    
}

export default ProductsInfoItem;
