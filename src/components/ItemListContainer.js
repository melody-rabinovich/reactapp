import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
// import ItemDetailContainer from "./ItemDetailContainer";
import { useParams } from "react-router-dom";
// import serverData from "./data/serverData.js";
import { getFirestore } from "../firebase/index";


const ItemListContainer = ({ text, loading, setLoading, setError }) => {

    const [items, setItems] = useState([]);
    const { id: idCategoria } = useParams();

    // reemplazo la promise por firestore
    useEffect(() => {
      const getItems = async () => {
        setLoading(true);
        const { docs } = await getFirestore().collection("serverData").get();
        const arrayCompleto = docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
  
        if (idCategoria) {
          const filtrarCategoria = arrayCompleto.filter(
            (item) => item.categoria === idCategoria
          );
          setItems(filtrarCategoria);
          setLoading(false);
        } else {
          setItems(arrayCompleto);
          setLoading(false);
        }
      };
      getItems();
    }, [idCategoria]);

    return (
      <div className="container text-center">
        <h1 className="text-center py-2">{text}</h1>
  
        {loading ? loading : <ItemList items={items} />}
      </div>
    );
    // --------
  //   const getItems = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     if (idCategoria) {
  //       const filtroCategoria = serverData.filter(
  //         (item) => item.categoria === idCategoria
  //       );
  //       resolve(filtroCategoria);
  //     } else {
  //       resolve(serverData);
  //     }
  //     reject("Hubo un error al traer los items");
  //   }, 2000);
  // });
    
  // useEffect(async () => {
  //   setItems([]);
  //   setLoading(true);
  //   await getItems
  //     .then((response) => setItems(response))
  //     .catch((err) => setError(err));
  //   setLoading(false);
  // }, [idCategoria]);

  // const obtenerData = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(serverData);
  //     reject("Hubo un error al obtener los datos del servidor");
  //   }, 2000);
  // });

  // useEffect(async () => {
  //   setLoading(true);
  //   await obtenerData
  //     .then((data) => {
  //       setItems(data);
  //     })
  //     .catch((err) => {
  //       setError(err);
  //     });
  //   setLoading(false);
  // }, []);

  // const selectItem = (item) => setSelectedItem(item);

  // return (
  //   <div className="container text-center">
  //     <h1 className="text-center py-2">{text}</h1>

  //     {!selectedItem ? (
  //       <ItemList items={items} selectItem={selectItem} />
  //     ) : (
  //       <ItemDetailContainer
  //         selectedItem={selectedItem}
  //         selectItem={selectItem}
  //         setError={setError}
  //         setLoading={setLoading}
  //       />
  //     )}
  //   </div>
  // );
};
export default ItemListContainer;