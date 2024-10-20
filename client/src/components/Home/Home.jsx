import HotDealsCarousel from "./HotDealsCarousel/HotDealsCarousel";
import ServicesPart from "./SevicesPart/ServicesPart";
import Collections from "./Collections/Collections";
import ProductsList from "./ProductsList/ProductsList";
import SpecialOffers from "./Special-Offers/SpecialOffers";
import LatestBlog from "./LatestBlog/LatestBlog";
import LastViewedProducts from "./LastViewedProducts/LastViewedProducts";
import NewsLetters from "../Products-details/NewsLetters/NewsLetters";

function Home() {
     return(
          <>
               <HotDealsCarousel /> 
               <ServicesPart />
               <Collections />
               <ProductsList />
               <LastViewedProducts />
               <SpecialOffers />
               <LatestBlog />
               <NewsLetters />
          </>
     )
}

export default Home;
