import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
const ItemCount = (props) => {

    const { stock, initial } = props;
   
    const [count , setCount] = useState(parseInt(initial));

    const restarCount = () => {
        if (count >= 1){
            setCount(count - 1)
        }
    }
    const sumarCount = () => {
        if (count < stock){
        setCount(count + 1)
        }
    }
    const agregarAlCarrito = () => {
        if ( count > 0 && count <= stock){
            alert("SE AGREGARON TODOS LOS ITEMS ELEGIDOS AL CARRITO");
        }
        else{
            alert("NO SE AGREGARON ITEMS AL CARRITO");
        }
    }



 return (
        <>
        <div className="input-group mb-3">
            <button className="btn btn-outline-secondary" type="button" id="button-addon1" onClick={restarCount}>-</button>
            <input type="text" className="form-control text-center" placeholder={count} aria-label="Example text with button addon" aria-describedby="button-addon1" />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={sumarCount}>+</button>
        </div>
        <button className="btn btnCount w-100" onClick={ agregarAlCarrito}>Agregar al Carrito</button>
        </>
    );
}
export default ItemCount;