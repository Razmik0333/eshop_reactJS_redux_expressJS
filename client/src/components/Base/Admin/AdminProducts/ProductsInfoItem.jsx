import { NavLink } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { currentProductID, fetchProductItem, fetchProductsForDelete } from "../../../../redux/ducks/adminProductDuck";
import { changeModal } from "../../../../redux/ducks/configsDuck";
import { currentLanguageDataSelector } from "../../../../helpers/reduxSelectors";


function ProductsInfoItem({product}) {
     const dispatch = useDispatch();
     const productsInfoLangData = useSelector(currentLanguageDataSelector)?.admin?.products;

     const getProductId = (e) => {
          dispatch(currentProductID(e.target.dataset.id))
          dispatch(fetchProductItem(e.target.dataset.id))
     }
     const deleteProductItem = (e) => {
          dispatch(changeModal(true))
          dispatch(currentProductID(e.target.dataset.id))
         dispatch(fetchProductsForDelete(e.target.dataset.id))
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
                         {productsInfoLangData?.actions?.update}
                    </NavLink>
               </div>
               <div className="product__item__data__info">
                   <NavLink to={`#`} data-id={`${product?.id}`}
                    onClick={deleteProductItem}
                    className="link__action"
                   >
                    {productsInfoLangData?.actions?.delete}
                   </NavLink>
               </div>
          </div>
          </>
     )    
}

export default ProductsInfoItem;
