import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminCurrentOrderSelector, adminOrderIdSelector, adminOrderProductsSelector, getUserId, modalCloseSelector } from "../../../../../helpers/reduxSelectors";
import { root } from "../../../../../helpers/constants/constants";
import { changeModal } from "../../../../../redux/ducks/configsDuck";
import Modal from "../../../Modal/Modal";
import ProductCreateUpdateFooter from "../../AdminProducts/ProductCreateUpdateFooter";
import { getStatus, checkEmptyObject } from "../../../../../helpers/functions/functions";
import { fetchOrderItem} from "../../../../../redux/ducks/adminOrderDuck";
import Loader from "../../../Loader/Loader";
import "../styles/_orders-create-update-form.scss";
function OrderUpdate() {
     const dispatch = useDispatch();
     const currentOrderId = useSelector(adminOrderIdSelector);
     useEffect(() => {
          dispatch(fetchOrderItem( currentOrderId));
     }, []);
     const [isChanged, setIsChanged] = useState(false);
     const [isUpdated, setIsUpdated] = useState(false);
     const modalIsClose = useSelector(modalCloseSelector);
     const [customerName, setCustomerName] = useState(``);
     const [customerPhone, setCustomerPhone] = useState(``);
     const [customerComment, setCustomerComment] = useState(``);
     const [orderPrice, setOrderPrice] = useState("");
     const [orderStatus, setOrderStatus] = useState('');
     const [userId, setUserId] = useState('');

     const currentOrder = useSelector(adminCurrentOrderSelector);
     console.log("🚀 ~ OrderUpdate ~ currentOrder:", currentOrder)

     useEffect(() => {
       
          if(!checkEmptyObject(currentOrder)){

               setCustomerName(currentOrder?.user_name);
               setCustomerPhone(currentOrder?.user_phone);
               setUserId(currentOrder?.user_id);
               setCustomerComment(currentOrder?.user_comment);
               setOrderPrice( currentOrder?.user_price);
               setOrderStatus(currentOrder?.user_status);
               setIsChanged(true)
          }
          
     }, [currentOrder]);
     const changeStatus = (e) => {
          setOrderStatus(+e.target.value);         
     }
     const formRef = useRef(null);
     const handleSubmit = async (e) => {

          e.preventDefault();
          const data = new FormData(formRef.current);
          
          await fetch(`${root}/api/admin/order/update/${currentOrderId}`, {
               method: 'PUT',
               body: new URLSearchParams(data),    
          })
          .then(res => res.json())
          .then(res => {
              setIsUpdated(res);
              dispatch(changeModal(true));          
          }).catch(e => console.log("error", e))

     }
     return <>
          {
               modalIsClose ?
                    isUpdated ? <Modal message={'Saved'} /> 
                    : <Modal message={'Wrong'} /> : <></>
          }

          <div className="form__container">
               <form onSubmit={handleSubmit} ref={formRef}>
                    <div className="form__items">
                        <div className="form__item">
                              <div className="form__item__header">Customer Name</div>
                              <input 
                                   type="text" 
                                   name="user_name" 
                                   id="" 
                                   placeholder="Enter  Description" 
                                   value={customerName}
                                   onChange={(e) => {
                                        setCustomerName(e.target.value)
                                   }}
                                   disabled
                              />
                              <input 
                                   type="text" 
                                   name="user_id" 
                                   id="user_id" 
                                   value={userId}
                                   onChange={() => { }}
                                   
                              />
                         </div>
                         <div className="form__item">
                              <div className="form__item__header">Customer Phone Number</div>
                              <input 
                                   type="text" 
                                   name="user_phone" 
                                   id="" 
                                   placeholder="Enter  Description" 
                                   value={customerPhone}
                                   onChange={(e) => {
                                        setCustomerPhone(e.target.value)
                                   }}
                                   disabled
                              />
                         </div>
                         <div className="form__item">
                              <div className="form__item__header">Customer Comment</div>
                              <textarea 
                                   type="text" 
                                   name="user_comment" 
                                   id="" 
                                   placeholder="Enter  Your Text" 
                                   value={customerComment}
                                   disabled
                                   onChange={(e) => {
                                   setCustomerComment(e.target.value)
                              }}>
                              {customerComment}
                              </textarea>
                         </div>
                         <div className="form__item">
                              <div className="form__item__header">Order price</div>
                              <input 
                                   type="text" 
                                   name="user_price" 
                                   placeholder="Enter Articul"  
                                   value={orderPrice}
                                   disabled
                                   onChange={(e) => {
                                   setOrderPrice(e.target.value)
                              }}
                              />
                         </div>
                         <div className="form__item">
                              <div className="form__item__header">Status</div>
                              <label htmlFor="status_index">
                                   <select 
                                        onChange={changeStatus} 
                                        id="status_index" 
                                        name="user_status"
                                        value={orderStatus}
                                   >
                                        <option value="-1">Select Category</option>
                                        <option value="0">{getStatus(0).title}</option>
                                        <option value="1">{getStatus(1).title}</option>
                                        <option value="2">{getStatus(2).title}</option>
                                        <option value="3">{getStatus(3).title}</option>
                                   </select>
                              </label>
                         </div>
                         { 
                              currentOrder ?
                              <div className="form__item form__item_list">
                                   <div className="form__item__header">Current Order Info</div>
                                   <div className="form__item__content">
                                        {
                                             isChanged ?
                                             <>                           
                                             <ul className="current__order__infos">
                                                  {
                                                       currentOrder?.products?.map((item,ind) => {
                                                            return <li className="current__order__info" key={`current__order__${ind}`}>
                                                                 <>
                                                                 <img src={`${root}/images/products/${item.id}.jpg`} alt="" />X 
                                                                 <span>{`${item?.quantity}հտ`}</span>
                                                                 </>

                                                            </li>
                                                       })
                                                  }
                                                  
                                             </ul>
                                             </>
                                             : <Loader />
                                        }
                                   </div>
                              </div>
                              :<></>
                         }
                         <div className="form__item form__item__save">

                              <ProductCreateUpdateFooter />
                         </div>
                    </div>  
               </form>
          </div>

          
          
     </>
}

export default OrderUpdate;
