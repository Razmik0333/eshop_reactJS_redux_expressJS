import { useSelector } from 'react-redux' ;
import { currentCategorySelector } from '../../../helpers/reduxSelectors';

import './styles/_path-panel.scss';


function PathPanel() {
     const currentCategory = useSelector(currentCategorySelector);
     return (
          <div className="path__panel">
               <div className="container path__panel__container">
                    <ul className="path__addresses">
                         <li className="path__address"><a href="/" className="path__address__link">Home</a></li>
                         <li className="path__address"><a href={`/category/${currentCategory.id}`} className="path__address__link active">{currentCategory?.arm_name}</a></li>
                    </ul>
               </div>
          </div>
     )
}

export default PathPanel;
