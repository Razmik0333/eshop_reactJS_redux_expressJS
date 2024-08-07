import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adminProductIsDeletedSelector, adminProductsSelector, currentLanguageDataSelector, getUserId, modalCloseSelector } from '../../../../helpers/reduxSelectors';
import { fetchProductsList, resetIsDeleted } from '../../../../redux/ducks/adminProductDuck';

import ProductCreate from './ProductCreate';
import ProductsInfoHeader from './ProductsInfoHeader';
import ProductsInfoItem from './ProductsInfoItem';
import ModalProductDelete from '../../Modal/ModalProductDelete';

import '../AdminProducts/styles/_product-info.scss';


function ProductsInfo() {
     const dispatch = useDispatch();
     const isDeleted = useSelector(adminProductIsDeletedSelector);
     const productsList = useSelector(adminProductsSelector);
     const modalIsClose = useSelector(modalCloseSelector);
     const productsInfoLangData = useSelector(currentLanguageDataSelector)?.admin?.products;

     useEffect(() => {
          dispatch(fetchProductsList());
          dispatch(resetIsDeleted(false)) 
     }, [isDeleted]);

     
     return (
          <>
          {
               modalIsClose ? <ModalProductDelete message={'Դուք Ցնկանում եք ջնջլ տվյալ ապրանքը'} /> : <></>
          }    
          <div className="product__info__block">
               <div className="products__info__header">
                    {productsInfoLangData?.all_products}
               </div>

               <div className="products__info">
                    <ProductsInfoHeader />
                    <div className="products__item__infos">
                    {
                         productsList.map((product, ind) => {
                         
                              return <ProductsInfoItem product = {product} key={`product_${ind}`}/>
                         })
                    }
                    </div>
               </div>
               <ProductCreate />
          </div>
          </>

     )
}
export default ProductsInfo;
