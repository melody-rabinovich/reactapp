import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { CgShoppingCart } from "react-icons/cg";
import './css/NavBar.css';
import { useCartContext } from "./CartContext";

const CartWidget = () => {
  const { cartProducts } = useCartContext();

  return(
    <>
  <button className="btn">
    <CgShoppingCart className="icon" />
    &nbsp;
    {cartProducts > 0 ? (
      <span className="badge bg-secondary">{cartProducts}</span>
    ) : (
      ""
    )}
  </button>
  </>
  )
  
};

export default CartWidget;