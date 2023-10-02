import React from 'react'
import { useNavigate } from 'react-router-dom';
import { getMostestProductSelector, getUserId, getWishListDataSelector } from '../../../../../helpers/reduxSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { numInArray } from '../../../../../helpers/functions/functions';
import { deleteWishListItem, fetchAddWishList } from '../../../../../redux/ducks/wishListDuck';
import { fetchAddCart } from '../../../../../redux/ducks/cartDuck';

export default function OffersButton() {
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const userId = useSelector(getUserId);
     const wishListData = useSelector(getWishListDataSelector);
     const mostestProductItem = useSelector(getMostestProductSelector)
     const wishListIds = wishListData.map(item => item?.id);
     const addProductToWishList = (e) => {
          const target = e.target; 
          userId ? 
          (numInArray(wishListIds,+target.dataset.id) ? 
               dispatch(fetchAddWishList(userId, +target.dataset.id)):
                    dispatch(deleteWishListItem(userId, +target.dataset.id)))
          : navigate('/login')

     }
     const addProductToCart = (e) => {
          userId ? 
          dispatch(fetchAddCart(userId ,{
               [e.target.dataset.id] : 1
          }))
          : navigate('/login')
     }
  return (
     <>
          <div className="offer-button">
          <div className="offer-button-item">
               <button className="button-favorite"
                         onClick={addProductToWishList}
                         data-id={mostestProductItem?.id}
               ></button>
               <div className="add-cart-button">
                    <button className="add-buttons"
                         
                    >Add To Wish</button>
                    <span className="arrow-triangle"></span>
               </div>
          </div>
          </div>
          <div className="offer-button">
               <div className="offer-button-item">
                    <button className="button-cart"
                         onClick={addProductToCart}
                         data-id={mostestProductItem?.id}
                    >
                         
                    </button>
                    <div className="add-cart-button">
                         <button className="add-buttons">Add To Cart</button>
                         <span className="arrow-triangle"></span>
                    </div>
               </div>
          </div>  

     </>
  )
}
