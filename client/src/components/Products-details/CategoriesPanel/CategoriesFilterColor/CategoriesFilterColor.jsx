import './styles/_categories-filter-color.scss';
function CategoriesFilterColor() {
     return (
          <div className="categories__filter__color">
               <p className="categories__filters__header">
                    FILTER BY COLOR
               </p>
               <ul className="filters-items">
                    <li className="filter-item active">
                         <span className="category__color color__red"></span>
                         <span className="category__name">
                              Red
                         </span>
                    </li>
                    <li className="filter-item">
                         <span className="category__color color__black"></span>
                         <span className="category__name">
                              Black
                         </span>
                    </li>
                    <li className="filter-item">
                         <span className="category__color color__yellow"></span>
                         <span className="category__name">
                              Yellow
                         </span>
                    </li>
                    <li className="filter-item">
                         <span className="category__color color__blue"></span>
                         <span className="category__name">
                              Blue
                         </span>
                    </li>
                    <li className="filter-item">
                         <span className="category__color color__pink"></span>
                         <span className="category__name">
                              Pink
                         </span>
                    </li>
                    <li className="filter-item">
                         <span className="category__color color__green"></span>
                         <span className="category__name">
                              green
                         </span>
                    </li>
               </ul>
          </div>
     )
}

export default CategoriesFilterColor;
