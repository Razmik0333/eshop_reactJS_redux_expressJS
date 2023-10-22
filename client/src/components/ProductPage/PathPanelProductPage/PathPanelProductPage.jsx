import { useSelector } from 'react-redux';
import { currentCategorySelector, currentLanguageDataSelector, currentProductSelector, getCurrentLanguageSelector } from '../../../helpers/reduxSelectors';
import './styles/_path-panel.scss';
function PathPanelProductPage() {
     const currentCategory = useSelector(currentCategorySelector);
     const product_page = useSelector(currentLanguageDataSelector)?.product_page;
     const currentProduct = useSelector(currentProductSelector);
     const currentLang = useSelector(getCurrentLanguageSelector)

     return (
          <div className="path__panel__shope">
               <div className="container path__panel__container">
                    <div className="product-category">
                         <p>{currentLang === "am" ? currentCategory?.arm_name : `${currentCategory?.alias}`.toUpperCase()}</p>
                    </div>
                    <ul className="path__addresses">
                         <li className="path__address"><a href="/" className="path__address__link">{product_page?.home}</a></li>
                         <li className="path__address"><a href={`/category/${currentCategory?.id}`} className="path__address__link">
                         {
                              currentLang === "am" ? currentCategory?.arm_name : `${currentCategory?.alias}`.toUpperCase()
                         
                         }
                         </a></li>
                         <li className="path__address"><a href={`/product/${currentProduct?.id}`} className="path__address__link">{currentProduct?.descr?.toUpperCase()}</a></li>
                    </ul>
               </div>
          </div>
     )
}

export default PathPanelProductPage;
