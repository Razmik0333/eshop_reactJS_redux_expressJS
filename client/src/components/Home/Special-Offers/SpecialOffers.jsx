import MostestProducts from "./MostestProducts/MostestProducts";
import ProductsGallery from "./ProductsGallery/ProductsGallery";
import './styles/_products-galleries.scss';
function SpecialOffers() {
     return (
          <div className="special__offers">
               <div className="container special__offers__container">
                    <MostestProducts />
                    <ProductsGallery />

               </div>
          </div>
     )
}

export default SpecialOffers;
