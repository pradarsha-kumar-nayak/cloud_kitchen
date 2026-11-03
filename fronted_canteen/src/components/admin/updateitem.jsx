import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate,useParams} from "react-router-dom";
import { useEffect } from "react";
export function UpdateItm(){
//  const [Itm,setItm]=useState({name:"",image:"",title:"",price:0});
  
  const {id}=useParams();
  
   const navigate=useNavigate();
   const formik=useFormik({
     initialValues:{
       name:"",
       image:"",
       title:"",
       price:0
     },
     validationSchema: yup.object({
       name:yup.string()
       .required("Name is required"),
   
       image:yup.string()
       .required("Image is required"),
   
       title:yup.string()
       .required("Title is required"),
   
       price:yup.number()
       .typeError("price must be a number")
       .required("Price is required")
       .positive("price must be greater then 0")
     }),
     onSubmit:async (values)=>{
       const res=await fetch(`http://localhost:8000/review/updateitem/${id}`,{
        credentials:"include",
         method:"put",
         headers:{
           "Content-Type":"application/json"
         },
         body:JSON.stringify(values)
       })
   
       if(res.ok){
          navigate("/visitMore");
       }
   
       const data=await res.json();
       console.log(data);
     }
   })

   useEffect(()=>{
     fetch(`http://localhost:8000/itm/viewdetails/${id}`,{
      credentials:"include",
     })
     .then((res)=>
      res.json()
    ).then((itm)=>{
      //  setItm(itm);

      formik.setValues({
        name:itm.name,
        image:itm.image,
        title:itm.title,
        price:itm.price
      })
    })
   },[])
   
     return (
       <div className="container mt-5">
         <div className="row justify-content-center">
           <div className="col-md-6">
   
             <div className="card shadow">
               <div className="card-body">
   
                 <h2 className="text-center mb-4">Update Item</h2>
   
                 <form onSubmit={formik.handleSubmit}>
   
                   {/* Name */}
                   <div className="mb-3">
                     <label className="form-label">Name</label>
                     <input
                       type="text"
                       name="name"
                       value={formik.values.name}
                       className="form-control"
                       placeholder="Enter name"
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                     />
   
                      {formik.touched.name && formik.errors.name && (
                       <div className="text-danger mt-1">
                         {formik.errors.name}
                       </div>
                     )}
   
                   </div>
   
                   {/* Image */}
                   <div className="mb-3">
                     <label className="form-label">Image</label>
                     <input
                       type="text"
                       name="image"
                       value={formik.values.image}
                       className="form-control"
                       placeholder="Enter image URL"
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                     />
   
                     {formik.touched.image && formik.errors.image && (
                       <div className="text-danger mt-1">
                         {formik.errors.image}
                       </div>
                     )}
   
                   </div>
   
                   {/* Title */}
                   <div className="mb-3">
                     <label className="form-label">Title</label>
                     <input
                       type="text"
                       name="title"
                       value={formik.values.title}
                       className="form-control"
                       placeholder="Enter title"
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                     />
   
                     {formik.touched.title && formik.errors.title && (
                       <div className="text-danger mt-1">
                         {formik.errors.title}
                       </div>
                     )}
   
                   </div>
   
                   {/* Price */}
                   <div className="mb-3">
                     <label className="form-label">Price</label>
                     <input
                       type="number"
                       name="price"
                       value={formik.values.price}
                       className="form-control"
                       placeholder="Enter price"
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                     />
   
                     {formik.touched.price && formik.errors.price && (
                       <div className="text-danger mt-1">
                         {formik.errors.price}
                       </div>
                     )}
   
                   </div>
   
                   <button type="submit" className="btn btn-primary w-100">
                     Update Item
                   </button>
   
                 </form>
   
               </div>
             </div>
   
           </div>
         </div>
       </div>
     );
}