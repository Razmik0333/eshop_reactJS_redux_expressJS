function OrdersInfoHeader() {
     return (
          <>
               <div className="orders__info__titles">
                    <div className="order__title"><input type="checkbox"/></div>
                    <div className="order__title">Number</div>
                    <div className="order__title">User Name</div>
                    <div className="order__title">User Phone</div>
                    <div className="order__title">User Comment</div>
                    <div className="order__title">Price</div>
                    <div className="order__title">Status</div>
                    <div className="order__title">Update</div>
                    <div className="order__title">Delete</div>
               </div>
          </>
     )
}

export default OrdersInfoHeader;
