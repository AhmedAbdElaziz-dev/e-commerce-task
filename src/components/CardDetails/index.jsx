import * as classes from "./style.module.css";

const CardDetails = ({
  card: { image, title, description, price, id, category },
}) => {
  return (
    <div className={classes.container}>
      <div className="row">
        <div className="col-md-5">
          <img className="d-block w-100" src={image} alt={title}></img>
        </div>
        <div className="col-md-7 pt-5">
          <h2 className="mb-5 text-center"> {title}</h2>
          <p className="product-name">
            <b>About product : </b>
            {description}
          </p>
          <p>
            <b>Code :</b>
            {id}
          </p>
          <p>
            <b>Price :</b>
            {price}
          </p>
          <p>
            <b>Category :</b>
            {category}
          </p>
        </div>
      </div>
    </div>
  );
};
export default CardDetails;
