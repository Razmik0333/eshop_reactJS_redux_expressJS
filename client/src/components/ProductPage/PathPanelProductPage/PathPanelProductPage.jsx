import { useSelector } from 'react-redux';
import { currentCategorySelector, currentLanguageDataSelector } from '../../../helpers/reduxSelectors';
import './styles/_path-panel.scss';
function PathPanelProductPage() {
     const currentCategory = useSelector(currentCategorySelector);
     const product_page = useSelector(currentLanguageDataSelector)?.product_page;

     return (
          <div className="path__panel__shope">
               <div className="container path__panel__container">
                    <div className="product-category">
                         <p>{currentCategory?.arm_name}</p>
                    </div>
                    <ul className="path__addresses">
                         <li className="path__address"><a href="/" className="path__address__link">{product_page?.home}</a></li>
                         <li className="path__address "><a href={`/category/${currentCategory?.arm_name}`} className="path__address__link">{currentCategory?.arm_name}</a></li>
                    </ul>
               </div>
          </div>
     )
}

export default PathPanelProductPage;
