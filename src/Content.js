import React from 'react';
import card1 from './assets/card1.jpg';
import card2 from './assets/card2.jpg';
import card3 from './assets/card3.jpg';
import card4 from './assets/card4.jpg';
import card5 from './assets/card5.jpg';
import card6 from './assets/card6.jpg';
import card7 from './assets/card7.jpg';
import card8 from './assets/card8.jpg';
import card9 from './assets/card9.jpg';

function Content() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="card">
                <div className="card-image">
                 <img src={card1} />
                 </div>
                 <div className="card-info">
                 <div className="title">Macbook</div>
                 <div className="card-rating">******</div>
                 <div className="price">100000$</div>
                 <div className="card-button">add to cart</div>
                 </div>
                 </div>
               </div> 
               <div className="col-3">
              <div className="card">
                <div className="card-image">
                 <img src={card2} />
                 </div>
                 <div className="card-info">
                 <div className="title">Galaxy</div>
                 <div className="card-rating">******</div>
                 <div className="price">35999$</div>
                 <div className="card-button">add to cart</div>
                 </div>
                 </div>
               </div>
               <div className="col-3">
              <div className="card">
                <div className="card-image">
                 <img src={card3} />
                 </div>
                 <div className="card-info">
                 <div className="title">scooter</div>
                 <div className="card-rating">******</div>
                 <div className="price">65500$</div>
                 <div className="card-button">add to cart</div>
                 </div>
                 </div>
               </div>
               <div className="col-3">
              <div className="card">
                <div className="card-image">
                 <img src={card4} />
                 </div>
                 <div className="card-info">
                 <div className="title">screen Samsung</div>
                 <div className="card-rating">******</div>
                 <div className="price">12000$</div>
                 <div className="card-button">add to cart</div>
                 </div>
                 </div>
               </div>
               <div className="col-3">
              <div className="card">
                <div className="card-image">
                 <img src={card5} />
                 </div>
                 <div className="card-info">
                 <div className="title">respiratory mask</div>
                 <div className="card-rating">******</div>
                 <div className="price">500$</div>
                 <div className="card-button">add to cart</div>
                 </div>
                 </div>
               </div>
               <div className="col-3">
              <div className="card">
                <div className="card-image">
                 <img src={card6} />
                 </div>
                 <div className="card-info">
                 <div className="title">washing machine</div>
                 <div className="card-rating">******</div>
                 <div className="price">100000$</div>
                 <div className="card-button">add to cart</div>
                 </div>
                 </div>
               </div>
               <div className="col-3">
              <div className="card">
                <div className="card-image">
                 <img src={card7} />
                 </div>
                 <div className="card-info">
                 <div className="title">fridge</div>
                 <div className="card-rating">******</div>
                 <div className="price">43000$</div>
                 <div className="card-button">add to cart</div>
                 </div>
                 </div>
               </div>
               <div className="col-3">
              <div className="card">
                <div className="card-image">
                 <img src={card8} />
                 </div>
                 <div className="card-info">
                 <div className="title">columns</div>
                 <div className="card-rating">******</div>
                 <div className="price">3000$</div>
                 <div className="card-button">add to cart</div>
                 </div>
                 </div>
               </div>
               <div className="col-3">
              <div className="card">
                <div className="card-image">
                 <img src={card9} />
                 </div>
                 <div className="card-info">
                 <div className="title">headphones</div>
                 <div className="card-rating">******</div>
                 <div className="price">1000$</div>
                 <div className="card-button">add to cart</div>
                 </div>
                 </div>
               </div>
        </div>
        </div>
    )
}

export default Content;