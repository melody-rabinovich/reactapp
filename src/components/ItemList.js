import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Item from "./Item";

const ItemList = ({ items, selectItem }) => (
    <div className="row text-center">
    {items.map((item) => (
      <Item {...item} selectItem={selectItem} key={item.id} />
    ))}
  </div>
);
export default ItemList;