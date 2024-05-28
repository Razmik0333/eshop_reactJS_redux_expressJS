import React from 'react'
import MenuBar from '../menu-bar/MenuBar'
import './styles/_user-card-add-form.scss';
export default function UserCardAdd() {
     return (
          <div className="container user_list_container">
          <MenuBar/>
          
               <div className="card__add__form">
                    <div className="card__add__header">
                         <h3>Քարտի Կցում</h3>

                    </div>
                    <div className="card__add__main">
                         <div className="card__number">
                              <input type="text" placeholder="Քարտի համար"/>
                         </div>
                         <div className="card__parameters">
                              <input type="text" className="month" placeholder="MM/YY" />
                              <input type="text" className="cvv" placeholder="CVV/CVC"/>
                         </div>
                         <div className="card__add__button">
                              <input type="submit"  value={"ԿՑԵԼ"} />

                         </div>

                    </div>
               </div>
     
          
          
          </div>
       )
}
