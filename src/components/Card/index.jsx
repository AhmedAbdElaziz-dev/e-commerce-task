import * as classes from "./style.module.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../../store/products/actions";

const Card = ({ card, history, addToCart, shoppingCartList }) => {
  const { image, title, description, price } = card;
  const onAddToCart = (e) => {
    e.preventDefault();
    const element = shoppingCartList.find((element) => element.id === card.id);
    if (!element) addToCart(card);
  };
  return (
    <div
      className="col-md-4"
      // onClick={() => history.push(`/details/${card.id}`)}
    >
      <div className="card mb-4 shadow-sm">
        <img
          className="card-img-top"
          alt="Card image cap"
          src={image}
          style={{ width: "170px", height: "170px", margin: "0 auto" }}
        />
        <div className="card-body">
          <div className={classes.cardName}>{title}</div>
          <p className="card-text">
            {description && description.slice(0, 170) + "  ...."}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={onAddToCart}
              >
                Add to Cart
              </button>
            </div>
            <small className="text-muted">{price} EGY</small>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToPorps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item)),
  };
};
const mapStateToPorps = (state) => {
  return {
    shoppingCartList: state.shoppingCartList,
  };
};
export default withRouter(connect(mapStateToPorps, mapDispatchToPorps)(Card));
