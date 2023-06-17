import './styles/_rating.scss';

function RatingMapping({rating}) {
     return(
          <>
               <div 
               className="product-rating"
               >
               {
               [...Array(5)].map((_,pos) => {
                    return  pos < rating ? 
                    <span 
                    className={
                         pos < rating ? "star full rating-over" : "star full"
                    }
                    key={pos}
                    data-rating={pos + 1}
                    ></span>
                    :
                    <span
                    className={
                         pos < rating ? "star  rating-over full" : "star empty"
                    } key={pos} data-rating={pos + 1}
                    ></span>
               })
               }
               </div>
          </>
     )
}


export default RatingMapping;
