import { createAction } from '../../helpers/redux';
import { root } from '../../helpers/constants/constants';
const FETCH_SUB_CATEGORIES = 'subCategoryDuck/FETCH_SUB_CATEGORIES';


export const getSubCategories = createAction(FETCH_SUB_CATEGORIES);



export const fetchSubCatgories = (catId) => async (dispatch) => {
  try {
    const data = await( await fetch(`${root}/api/subCategories/${catId}`) ).json();    
    dispatch(getSubCategories(data));
  } catch (e) {
     console.log('error from SubCategoryDuck', e)
  }    
};





export const initialStateApp = {
  subCategories: [],
};

function SubCategoryDuck(state = initialStateApp, action) {
  switch (action.type) {
    case FETCH_SUB_CATEGORIES:
      return {
        ...state,
        subCategories: action.payload,
      };
    
    default:
      return state;
  }
}

export default SubCategoryDuck;
