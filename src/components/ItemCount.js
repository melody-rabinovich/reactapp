import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

const ItemCount = (props) => {

    const { stock, initial, onAdd } = props;
    const [count, setCount] = useState(parseInt(initial));

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


 return (
        <>
        <div className="input-group mb-3">
            <button className="btn btn-outline-secondary" type="button" id="button-addon1" onClick={restarCount()}>-</button>
            <input type="text" className="form-control text-center" placeholder={count} aria-label="Example text with button addon" aria-describedby="button-addon1" />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={sumarCount()}>+</button>
        </div>
        <button className="btn btnCount w-100"  onClick={() => onAdd(count)}>Agregar al Carrito</button>
        </>
    );
}
export default ItemCount;