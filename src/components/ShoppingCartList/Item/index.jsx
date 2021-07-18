import { useState } from "react";
import * as classes from "./style.module.css";
import {
  faPlusCircle,
  faMinusCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  removeFromCart,
  increaseItemQnt,
  decreaseItemQnt,
} from "../../../store/products/actions";
import { connect } from "react-redux";

const Item = ({
  item: { image, title, description, id, quantity },
  removeCartItem,
  increaseItemQnt,
  decreaseItemQnt,
}) => {
  const onAdd = (id) => {
    increaseItemQnt(id);
  };
  const onDecrement = (id) => {
    if (quantity > 1) {
      decreaseItemQnt(id);
    }
  };
  const onDelete = (id) => {
    removeCartItem(id);
  };

  return (
    <div className={classes["container"]}>
      <img className={classes["product-image"]} src={image} alt="" />
      <div className={classes["details-container"]}>
        <div>
          <b>{title}</b>
        </div>
        <div>Qnt: {quantity}</div>
        <div className={classes["icon-container"]}>
          <FontAwesomeIcon icon={faPlusCircle} onClick={() => onAdd(id)} />
          <FontAwesomeIcon
            icon={faMinusCircle}
            onClick={() => onDecrement(id)}
          />
          <FontAwesomeIcon icon={faTrash} onClick={() => onDelete(id)} />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseItemQnt: (id) => dispatch(increaseItemQnt(id)),
    removeCartItem: (id) => dispatch(removeFromCart(id)),
    decreaseItemQnt: (id) => dispatch(decreaseItemQnt(id)),
  };
};
export default connect(null, mapDispatchToProps)(Item);
