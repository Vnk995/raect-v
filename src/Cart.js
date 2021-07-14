import React from 'react';
import cart from './assets/Basket.svg';


function Checkout() {
    return (
        <div className="col-2">
        <div className="row align-items-center">
        <div className="col">
        <div className="cart">
        <a href="#">
         <img src={cart} alt="" />
         <span>0</span>
         </a>
         </div>
        </div>
        <div className="col">
        <div className="logout">Exit</div>
        </div>
       </div>
    </div>    
    )
}

export default Checkout;