import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeEvaluatedProducts, changeProductRating, changeProductReview } from '../../../redux/ducks/productDuck';
import RatingMapping from '../RatingMapping/RatingMapping';
import './styles/_rating.scss';

function Rating({id, rating}) {
     
     const [overRating, setOverRating] = useState(null);
     const [ratingSelected, setRatingSelected] = useState(null);
     const currentRating = overRating  ?   overRating : rating;
     const dispatch = useDispatch();
     return(
          <>
               <input type="hidden"
                    value={ratingSelected ? ratingSelected : rating}
                    name="rating" 
                    onChange={() => {}}
               />
               <div className="product-rating" 
                    onMouseOver={(e)=> {
                         setOverRating(e.target.dataset.rating)
                    }}
                    onMouseOut={(e)=> {
                         ratingSelected ? setOverRating(ratingSelected) :
                         setOverRating(rating);
                    }}
                    onClick={(e) => {
                         console.log(e.target.dataset.rating)
                         setRatingSelected(e.target.dataset.rating)
                         const rating = e.target.dataset.rating                         
                         dispatch(changeProductReview(id, {
                              rating
                         }))
                    }}
                   
               >
               {
                   
                    <RatingMapping rating={currentRating} />
               }
               </div>
          </>
     )
}


export default Rating;
