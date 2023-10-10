
import HotDealsContent from './HotDealsContent/HotDealsContent';
import HotDealsHeader from './HotDealsHeader/HotDealsHeader';
import HotDealsTimer from './HotDealsTimer/HotDealsTimer';
import './styles/_hot-deals-main.scss';

function HotDeals() {

     return (
          <div className="hot__deals">
               <HotDealsHeader />
               <HotDealsContent />
               <HotDealsTimer />
          </div>
     )
}

export default HotDeals;
