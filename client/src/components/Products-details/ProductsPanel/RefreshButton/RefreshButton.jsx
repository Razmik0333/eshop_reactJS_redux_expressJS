import { useDispatch, useSelector } from 'react-redux';
import { countElementsSelector, countItemsOfPageSelector, getFilteredProductsSelector, productStepCountsSelector } from '../../../../helpers/reduxSelectors';
import { changeCountElements } from '../../../../redux/ducks/configsDuck';
import { changeStepsCounts } from '../../../../redux/ducks/productDuck';
import './styles/_refresh-button.scss';
function RefreshButton() {
     const dispatch = useDispatch();
     const elementCounts = useSelector(countElementsSelector);
     const elementCountsOfPage = useSelector(countItemsOfPageSelector);
     const stepCount = useSelector(productStepCountsSelector);
     const filteredProducts = useSelector(getFilteredProductsSelector).length

     const changeCountItems = (e) => {
          const currentCount = +elementCountsOfPage + +elementCounts;
          dispatch(changeStepsCounts(stepCount - 1))
          dispatch(changeCountElements(currentCount))
     }
     
     return (
          
               filteredProducts > 0 && <>
                    <div className="refresh__button">
                         <button 
                              className={stepCount > 1 ? `refresh refresh-valid` : `refresh refresh-disabled`} 
                              
                              disabled={stepCount <= 1 } 

                              onClick={changeCountItems}>
                         </button>
                    </div>
               </>
     )
}
export default RefreshButton;
