import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { CgShoppingCart } from "react-icons/cg";
import './css/NavBar.css';
import { useCartContext } from "./CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {
  const { cartProducts } = useCartContext();

  return(
    <>
      <Link to="/cart">
        <button className="btn">
          <CgShoppingCart className="icon" />
          &nbsp;
          {cartProducts > 0 ? (
            <span className="badge bg-secondary">{cartProducts}</span>
          ) : (
            ""
          )}
        </button>
      </Link>
    </>
  )
  
};

export default CartWidget;