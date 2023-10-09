import { useSelector } from 'react-redux';
import { currentCategorySelector, currentLanguageDataSelector, currentProductSelector } from '../../../helpers/reduxSelectors';
import './styles/_path-panel.scss';
function PathPanelProductPage() {
     const currentCategory = useSelector(currentCategorySelector);
     console.log("🚀 ~ file: PathPanelProductPage.jsx:6 ~ PathPanelProductPage ~ currentCategory:", currentCategory)
     const product_page = useSelector(currentLanguageDataSelector)?.product_page;
     const currentProduct = useSelector(currentProductSelector);
     console.log("🚀 ~ file: PathPanelProductPage.jsx:9 ~ PathPanelProductPage ~ currentProduct:", currentProduct)

     return (
          <div className="path__panel__shope">
               <div className="container path__panel__container">
                    <div className="product-category">
                         <p>{currentCategory?.arm_name}</p>
                    </div>
                    <ul className="path__addresses">
                         <li className="path__address"><a href="/" className="path__address__link">{product_page?.home}</a></li>
                         <li className="path__address"><a href={`/category/${currentCategory?.id}`} className="path__address__link">{currentCategory?.arm_name}</a></li>
                         <li className="path__address"><a href={`/product/${currentProduct?.id}`} className="path__address__link">{currentProduct?.descr.toUpperCase()}</a></li>
                    </ul>
               </div>
          </div>
     )
}

export default PathPanelProductPage;
