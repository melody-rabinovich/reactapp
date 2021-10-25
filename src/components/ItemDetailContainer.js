import React, { useState, useEffect } from "react";
// import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
// import serverData from "./data/serverData.js";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";


const ItemDetailContainer = ({ setLoading, setError }) => {
  const [item, setItem] = useState([]);

  const { id: itemId } = useParams();

  // firestore
  useEffect(() => {
    const getItem = async () => {
      setLoading(true);
      const { docs } = await getFirestore().collection("serverData").get();
      const nuevoArray = docs.map((item) => ({ id: item.id, ...item.data() }));
      const itemEncontrado = nuevoArray.find((item) => item.id === itemId);
      setItem(itemEncontrado);
      setLoading(false);
    };
    getItem();
  }, [itemId]);


  // -----------
  // const getItems = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     const idProducto = serverData.find(
  //       (item) => item.id === parseInt(itemId)
  //     );
  //     resolve(idProducto);
  //     reject("Error al enviar id producto");
  //   }, 2000);
  // }, []);

  // useEffect(async () => {
  //   setLoading(true);
  //   await getItems
  //     .then((response) => setItem(response))
  //     .catch((err) => setError(err));
  //   setLoading(false);
  // }, [itemId]);

  return <ItemDetail item={item} />;
};

 export default ItemDetailContainer;