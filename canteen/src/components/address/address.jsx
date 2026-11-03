import { useFormik } from "formik";
import "./address.css";
export function Address() {
  const formik = useFormik({
    initialValues: {
      name: "",
      contactno: "",
      city: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
  });

  return (
    <>
      <div className="add-con">
        <form
          onSubmit={formik.handleSubmit}
          className="border rounded-4 shadow p-4 bg-white"
          style={{ width: "400px" }}
        >
          <h3 className="text-center mb-4">Add Address</h3>

          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={formik.values.name}
            onChange={formik.handleChange}
            className="form-control mb-3"
          />

          <input
            type="text"
            name="contactno"
            placeholder="Enter contact number"
            className="form-control mb-3"
          />

          <input
            type="text"
            name="city"
            placeholder="Enter City"
            className="form-control mb-4"
          />

          <button type="submit" className="btn btn-dark w-100">
            Save Address
          </button>
        </form>
      </div>
    </>
  );
}
