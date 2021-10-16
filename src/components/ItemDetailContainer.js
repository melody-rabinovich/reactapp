import React, { useState, useEffect } from "react";
// import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import serverData from "./data/serverData.js";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({
  selectedItem,
  selectItem,
  setLoading,
  setError,
}) => {
    const [item, setItem] = useState(null);
    const { id: itemId } = useParams();

    const getItems = new Promise((resolve, reject) => {
        const idProducto = serverData.find((item) => item.id === parseInt(itemId));
        setTimeout(() => {
          resolve(idProducto);
          reject("Error al enviar id producto");
        }, 2000);
      });

      useEffect(async () => {
        setLoading(true);
        await getItems
          .then((response) => setItem(response))
          .catch((err) => setError(err));
        setLoading(false);
      }, [itemId]);

      return (
        <div className="row text-center">
          {item && <ItemDetail {...item} />}
        </div>
      );
    };
    export default ItemDetailContainer;