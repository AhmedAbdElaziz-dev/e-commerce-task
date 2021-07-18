import * as classes from "./style.module.css";

const OrderItem = ({ item: { quantity, price, totlePrice, image, title } }) => {
  return (
    <div className={classes.container}>
      <div className="row">
        <div className="col-md-5">
          <img className="d-block w-100" src={image} alt={title}></img>
        </div>
        <div className="col-md-7 pt-5">
          <h2 className="mb-5 text-center"> {title}</h2>
          <p className="product-name">
            <b>Qnt : </b>
            {quantity}
          </p>
          <p>
            <b>Price per Item :</b>
            {price}
          </p>

          <p>
            <b>Totle Price :</b>
            {totlePrice}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
