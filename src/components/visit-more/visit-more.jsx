import { useEffect, useState } from "react"
import {Link} from "react-router-dom";
import "./visit-more.css"
export function VisitMore(){
    const[data,setData]=useState([]);

    function getdata(){
        fetch("http://localhost:8000/itm/items",{
          credentials:"include"
        })
        .then((res)=> res.json())
        .then((res)=>{
            setData(res);
        })
    }

    useEffect(()=>{
       getdata();
    },[]);
    return(
        <>
          <div className="row g-3 p-3 ">
            {
              data.map((itm)=>
                <div key={itm._id} className="col-12 col-md-4 col-lg-3 " style={{borderRadius:"40px"}}>
                 <div  className="card h-100 outer-con" style={{borderRadius:"40px"}}>
                  <img src={itm.image} className="card-img-top" style={{ height: "250px", objectFit: "cover",borderRadius:"40px"}}/>

                  <div className="card-body">
                    <h4>{itm.name}</h4>
                    <p>{itm.title}</p>
                    <p className="fw-bold" style={{color:"#fc5b00"}}>₹{itm.price}</p>
                    <Link to={`/viewdetails/${itm._id}`}><button className="btn vew-details" >View Details</button></Link> 
                  </div>
                  
                </div>
                </div>
               
               )
            }
             
          </div>
        </>
    )
}
