import { useSelector } from "react-redux";
import { currentLanguageDataSelector } from "../../../../../helpers/reduxSelectors";

function ReviewsInfoHeader() {
     const reviewsInfoLangData = useSelector(currentLanguageDataSelector)?.admin?.reviews;
     return (
          <>
               <div className="review__info__titles">
                    <div className="review__title"><input type="checkbox"/></div>
                    {
                         reviewsInfoLangData?.header.map((item, pos) => {
                              return <div className="review__title" key={`review__title__${pos}`}>{item}</div>
                         })
                    }
               </div>
          </>
     )
}

export default ReviewsInfoHeader;
