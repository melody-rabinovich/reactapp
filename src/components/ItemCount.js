import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import swal from "sweetalert";
import "../css/itemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const add = () => {
    counter < stock
      ? setCounter(counter + 1)
      : swal("No hay mas stock disponible");
  };

  const substract = () => {
    counter > initial
      ? setCounter(counter - 1)
      : console.log("Ha superado el numero minimo");
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-2">
        <div className="count-container p-3">
          <div className="d-flex bg-light justify-content-between rounded">
            <Button
              type="button"
              variant="outline-light text-dark"
              onClick={substract}
            >
              -
            </Button>
            <h4 className="m-0 p-1">{counter}</h4>
            <Button
              type="button"
              variant="outline-light text-dark"
              onClick={add}
            >
              +
            </Button>
          </div>

          {counter > 0 ? (
            <button
              onClick={() => onAdd(counter)}
              className="container-fluid mt-2 lightBtn"
            //   variant="outline-dark"
            >
              Agregar al carrito
            </button>
          ) : (
            console.log("Nada para agregar")
          )}
        </div>
      </div>
    </>
  );
};

export default ItemCount;