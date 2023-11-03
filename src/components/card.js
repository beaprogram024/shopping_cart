import React from "react";

const Cards = ({ item, handleClick }) => {
  const { name, price, img } = item;
  return (
    <>

      <div className="col-md-3 shadow mb-5 bg-body rounded mx-auto">
        <div className="card ">
          <img src={img} alt="" />
          <div className="card-body">

            <h5 className="card-title">Product Name: {name}</h5>
            <p className="card-text"><strong>Price: {price}</strong></p>
            <button className="btn btn-primary" id="addToCartBtn" onClick={() => handleClick(item)}><i className="fas fa-cart-plus mx-2"></i>Add to Cart</button>
          </div>
        </div>
      </div>

    </>

  );
};

export default Cards;

// id, title, autor, price, img
