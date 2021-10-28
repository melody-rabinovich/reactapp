import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCartContext } from "./CartContext";
import { getFirestore } from "../firebase";
import { Link } from "react-router-dom";

const Checkout = () => {
    const { cartList, setCartList, totalPrice } = useCartContext();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const setOrders = async (e) => {
        e.preventDefault();

        if (name === "" || phone === "" || email === "") {
            setError("Falta completar algun dato");
          } else {
            const order = {
                buyer: {
                  name: name,
                  phone: phone,
                  email: email,
                },
                items: cartList.map((elemento) => {
                  return {
                    id: elemento.item.id,
                    title: elemento.item.title,
                    price: elemento.item.price,
                    quantity: elemento.quantity,
                  };
                }),
                total: totalPrice,
            };

            try {
                await getFirestore()
                  .collection("orders")
                  .add(order)
                  //en el caso de que funcione se especifica que devuelva el id del elemento para mostrarlo en una alerta
                  .then((resultado) => {
                    alert(`Su numero de orden es ${resultado.id}
                        Gracias por su compra`);
                  });
              } catch (e) {
                console.log(e);
            }
        
            setPhone("");
      setName("");
      setEmail("");
      setCartList([]);

      window.sessionStorage.removeItem("cart");
    }
  };

  return (
    <> 
        {cartList.length > 0 ? (
        <div className="container">
          <div className="row">
            <div className="card col-6 mx-auto my-5">
              <form className="my-4" onSubmit={setOrders}>
                <div className="mb-3">
                  <label htmlFor="nameInput" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameInput"
                    placeholder="Ingrese su nombre"
                    style={{ width: "25rem" }}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="numberInput" className="form-label">
                    Teléfono
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="numberInput"
                    placeholder="Ingrese su telefono"
                    style={{ width: "25rem" }}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="emailInput" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    placeholder="Ingrese su email"
                    style={{ width: "25rem" }}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-success mb-3">
                  Confirmar Compra
                </button>

                {error && (
                  <p
                    className="mt-2 text-center"
                    style={{ color: "red", fontSize: "1.5 rem" }}
                  >
                    {error}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <Link to="/">
            <button className="btn btn-success my-3">Volver al Inicio</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Checkout;
