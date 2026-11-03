import { useEffect, useState } from "react"
import {Link,useNavigate} from "react-router-dom"
export function Specialsub(){
    const[data,setData]=useState([])
    const[user,setUser]=useState(null);
    const navigate=useNavigate();
    function fetchdata(){
        fetch("http://localhost:8000/sub/special",{
            credentials:"include"
        })
        .then((res)=>
           res.json()
        )
        .then((dt)=>{
          setData(dt.data);
        })
    }
     function checkLogin(){
        fetch("http://localhost:8000/check-auth",{credentials:"include"})
        .then((res)=>
            res.json()
        ).then((data)=>{
            if(data.loggedIn){
             setUser(data.user);
            }
        })
    }
    useEffect(()=>{
      fetchdata();
      checkLogin();
    },[])

    function handelSubscribe(){
        if(!user){
            alert("you are not login");
            navigate("/login");
        }else{
             navigate("/subaddress");
        }
    }
    return(
        <>
            <div className="container mt-4">
                <div className="row g-4">

                    {data.map((item, index) => (
                        <div
                            className="col-12 col-md-4 col-lg-3"
                            key={index}
                        >
                            <div className="card h-100 shadow-sm">

                                <img
                                    src={item.image}
                                    className="card-img-top"
                                    alt={item.dishname}
                                    style={{
                                        height: "220px",
                                        objectFit: "cover"
                                    }}
                                />

                                <div className="card-body">
                                    <h5 className="card-title">
                                        {item.dishname}
                                    </h5>

                                    <p className="card-text">
                                        {item.day}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
                 {(!user || !user.subaddress) &&(
                  <div className="d-flex justify-content-center my-5">
                    <Link to="/subaddress">
                      <button className="btn btn-primary btn-lg px-5" onClick={handelSubscribe}>
                        Subscribe Now
                    </button>
                    </Link>
                    
                </div>
                )
                }
            </div>
            
        </>
    )
}