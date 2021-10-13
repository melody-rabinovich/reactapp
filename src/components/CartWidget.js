import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { CgShoppingCart } from "react-icons/cg";
import './css/NavBar.css'

const CartWidget = (props) => {
  const { number } = props;
  return (
    <>
      <button className="btn">
        <CgShoppingCart className="icon" />
        {number}
      </button>
    </>
  );
};

export default CartWidget;