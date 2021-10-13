import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import './css/Item.css'


const Item = (props) => {
  const { id, title, description, price, pictureUrl, selectItem } = props;

  return (
    <div className="col col-md-6 col-lg-3 m-2">
      <div
        id={id}
        className="card border-dark text-center m-2"
        className="card border-dark text-center "
        style={{ width: "18rem" }}
      >
        <img
          src={pictureUrl}
          className="card-img-top p-1"
          alt="..."
          //onClick={() => selectItem({ ...props })}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>${price}</strong>
          </li>
          <li className="list-group-item">
            <ItemCount stock="10" initial="1" />
          </li>
        </ul>
        <div className="card-body">
          <Link exact to={`/item/${id}`} className=" btn btnItems">
            detalle
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Item;