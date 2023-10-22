import { useSelector } from 'react-redux' ;
import { currentCategorySelector, currentLanguageDataSelector, getCurrentLanguageSelector } from '../../../helpers/reduxSelectors';

import './styles/_path-panel.scss';


function PathPanel() {
     const currentCategory = useSelector(currentCategorySelector);
     const langData = useSelector(currentLanguageDataSelector);
     const currentLang = useSelector(getCurrentLanguageSelector)
     console.log("🚀 ~ file: PathPanel.jsx:11 ~ PathPanel ~ currentLang:", currentLang)
     const pathPanelHomeLang = langData?.details;

     return (
          <div className="path__panel">
               <div className="container path__panel__container">
                    <ul className="path__addresses">
                         <li className="path__address"><a href="/" className="path__address__link">{pathPanelHomeLang?.home}</a></li>
                         <li className="path__address">
                              <a href={`/category/${currentCategory.id}`} className="path__address__link active">
                                   {
                                        currentLang === "am" ? currentCategory?.arm_name : `${currentCategory?.alias}`.toUpperCase()
                                        }
                              </a>
                         </li>
                    </ul>
               </div>
          </div>
     )
}

export default PathPanel;
