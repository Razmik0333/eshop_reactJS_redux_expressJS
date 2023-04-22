import './styles/_categories-filter-size.scss';
function CategoriesFilterSize() {
     return(
          <div className="categories__filter__size">
               <p className="categories__filters__header">
                    FILTER BY SIZE
               </p>
               <ul className="filters-items">
                    <li className="filter-item active">
                         <span className="category__name">
                              <input type="checkbox" name="" id="" defaultChecked />
                              S
                         </span>
                         <span className="product-count">
                              3
                         </span>
                    </li>
                    <li className="filter-item">
                         <span className="category__name">
                              <input type="checkbox" name="" id="" />
                              M
                         </span>
                         <span className="product-count">
                              4
                         </span>
                    </li>
                    <li className="filter-item">
                         <span className="category__name">
                              <input type="checkbox" name="" id="" />
                              L
                         </span>
                         <span className="product-count">
                              5
                         </span>
                    </li>
                    <li className="filter-item">
                         <span className="category__name">
                              <input type="checkbox" name="" id="" />
                              XL
                         </span>
                         <span className="product-count">
                              6
                         </span>
                    </li>
                    <li className="filter-item">
                         <span className="category__name">
                              <input type="checkbox" name="" id="" />
                              XX
                         </span>
                         <span className="product-count">
                              7
                         </span>
                    </li>
               </ul>
          </div>
     )
}

export default CategoriesFilterSize;
