import './styles/_categories-filter-panel.scss';
function CategoriesFilterContent(){
     return (
          <>
               <p className="categories__filters__header">
                     FILTER BY CATEGORIES
               </p>
               <div className="categories__filters__content">
                    <ul className="filters-items">
                         <li className="filter-item active">
                              <span className="category__name">
                                   Furniture
                              </span>
                              <span className="product-count">
                                   3
                              </span>
                         </li>
                         <li className="filter-item">
                              <span className="category__name">
                                   Chair
                              </span>
                              <span className="product-count">
                                   4
                              </span>
                         </li>
                         <li className="filter-item">
                              <span className="category__name">
                                   Table
                              </span>
                              <span className="product-count">
                                   5
                              </span>
                         </li>
                         <li className="filter-item">
                              <span className="category__name">
                                   Bedroom
                              </span>
                              <span className="product-count">
                                   6
                              </span>
                         </li>
                         <li className="filter-item">
                              <span className="category__name">
                                   Furniture
                              </span>
                              <span className="product-count">
                                   7
                              </span>
                         </li>
                    </ul>
               </div>
          </>
     )
}

export default CategoriesFilterContent;
