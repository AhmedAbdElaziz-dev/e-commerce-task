import OrderItem from "./OrderItem";
import * as classes from "./style.module.css";

const OrderList = ({orderList}) => {
    console.log(("orderList",orderList));
  return (
    <div
     className={classes.container}
     >
      {orderList.map((item) => (
        <OrderItem item={item}/>
      ))}
    </div>
  );
};
export default OrderList;
