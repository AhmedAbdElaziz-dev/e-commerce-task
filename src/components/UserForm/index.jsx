import * as classes from "./style.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { submitOrder } from "../../store/products/actions";

const UserForm = ({submitOrder,history}) => {
    console.log(("history",history));
  const schema = Yup.object({
    address: Yup.string().required("Required"),
    phoneNum: Yup.string().required("Required"),
    email: Yup.string().email("invalid email foramt").required("Required"),
  });
  const form = useFormik({
    initialValues: {
      address: "",
      email: "",
      phoneNum: "",
    },
    onSubmit: () => {
        submitOrder()
        history.push("/")
    },
    validationSchema: schema,
  });
  return (
    <div>
      <form className={classes.container} onSubmit={form.handleSubmit}>
        <div className={classes["form-control"]}>
          <label className={classes["input-label"]}>Address</label>
          <input
            type="text"
            id="address"
            name="address"
            className={classes["input"]}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.address}
          />
          {form.errors.address && (
            <div className={classes["error"]}>{form.errors.address}</div>
          )}
        </div>
        <div className={classes["form-control"]}>
          <label className={classes["input-label"]}>Phone Number</label>
          <input
            type="text"
            id="phoneNum"
            name="phoneNum"
            className={classes["input"]}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.phoneNum}
          />
          {form.errors.phoneNum && (
            <div className={classes["error"]}>{form.errors.phoneNum}</div>
          )}
        </div>
        <div className={classes["form-control"]}>
          <label className={classes["input-label"]}>Email</label>
          <input
            type="emai"
            id="email"
            name="email"
            className={classes["input"]}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.email}
          />
          {form.errors.email && (
            <div className={classes["error"]}>{form.errors.email}</div>
          )}
        </div>
        <button className={classes["order-button"]} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (disptach) => {
  return {
    submitOrder:()=> disptach(submitOrder()),
  };
};

export default connect(null, mapDispatchToProps)(UserForm);
