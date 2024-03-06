import { useSelector } from "react-redux";
import { currentLanguageDataSelector } from "../../../../helpers/reduxSelectors";

function ProductsInfoHeader() {
     const productsInfoLangData = useSelector(currentLanguageDataSelector)?.admin?.products;
     return (
          <>
               <div className="products__info__titles">
                    <div className="product__title"><input type="checkbox"/></div>
                    {
                         productsInfoLangData?.header.map((item,pos) => {
                              return <div className="product__title" key={`product__title_${pos}`}>{item}</div>
                         })
                    }
               </div>
          </>
     )
}

export default ProductsInfoHeader;
