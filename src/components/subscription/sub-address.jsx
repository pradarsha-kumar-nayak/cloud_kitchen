import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";


export function SubAddress() {
  const navigate=useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      contactno: "",
      city: "",
    },
    onSubmit: async (data) => {
    const res= await fetch("http://localhost:8000/sub/address",{
        credentials:"include",
        method:"post",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(data)
      })

      if(res.status===401){
        alert("you are not login");
        navigate("/login");
      }

      if(res.ok){
        alert("welcome to our kitchen please complete your full payment when our pepole visit you");
        navigate("/");
      }
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
            name="username"
            placeholder="Enter name"
            value={formik.values.username}
            onChange={formik.handleChange}
            className="form-control mb-3"
          />

          <input
            type="text"
            name="contactno"
            value={formik.values.contactno}
            onChange={formik.handleChange}
            placeholder="Enter contact number"
            className="form-control mb-3"
          />

          <input
            type="text"
            name="city"
             value={formik.values.city}
            onChange={formik.handleChange}
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
