import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import ItemDetailContainer from "./ItemDetailContainer";
import { useParams } from "react-router-dom";
import serverData from "./data/serverData.js";


const ItemListContainer = ({ text, setLoading, setError }) => {

    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const { id: idCategoria } = useParams();

    const getItems = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (idCategoria) {
        const filtroCategoria = serverData.filter(
          (item) => item.categoria === idCategoria
        );
        resolve(filtroCategoria);
      } else {
        resolve(serverData);
      }
      reject("Hubo un error al traer los items");
    }, 2000);
  });
    
  useEffect(async () => {
    setItems([]);
    setLoading(true);
    await getItems
      .then((response) => setItems(response))
      .catch((err) => setError(err));
    setLoading(false);
  }, [idCategoria]);

  const obtenerData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(serverData);
      reject("Hubo un error al obtener los datos del servidor");
    }, 2000);
  });

  useEffect(async () => {
    setLoading(true);
    await obtenerData
      .then((data) => {
        setItems(data);
      })
      .catch((err) => {
        setError(err);
      });
    setLoading(false);
  }, []);

  const selectItem = (item) => setSelectedItem(item);

  return (
    <div className="container text-center">
      <h1 className="text-center py-2">{text}</h1>

      {!selectedItem ? (
        <ItemList items={items} selectItem={selectItem} />
      ) : (
        <ItemDetailContainer
          selectedItem={selectedItem}
          selectItem={selectItem}
          setError={setError}
          setLoading={setLoading}
        />
      )}
    </div>
  );
};
export default ItemListContainer;