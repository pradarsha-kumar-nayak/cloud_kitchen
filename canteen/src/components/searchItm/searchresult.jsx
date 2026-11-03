import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
export function SearchResult({item}){

    const [data,setData]=useState([]);

    useEffect(()=>{
        fetch(`http://localhost:8000/itm/search?item=${item}`,{credentials:"include"})
            .then(res => res.json())
            .then(dt => {
                setData(dt);
            });
    },[item])

    return(
         <div className="row g-3 p-3">

            {
                data.map((itm) => (

                    <div
                        key={itm._id}
                        className="col-12 col-md-4 col-lg-3"
                        style={{ borderRadius: "40px" }}
                    >

                        <div
                            className="card h-100 outer-con"
                            style={{ borderRadius: "40px" }}
                        >

                            <img
                                src={itm.image}
                                className="card-img-top"
                                style={{
                                    height: "250px",
                                    objectFit: "cover",
                                    borderRadius: "40px"
                                }}
                            />

                            <div className="card-body">

                                <h4>{itm.name}</h4>

                                <p>{itm.title}</p>

                                <p
                                    className="fw-bold"
                                    style={{ color: "#fc5b00" }}
                                >
                                    ₹{itm.price}
                                </p>

                                <Link to={`/viewdetails/${itm._id}`}>
                                    <button className="btn vew-details">
                                        View Details
                                    </button>
                                </Link>

                            </div>

                        </div>

                    </div>

                ))
            }

        </div>
    )
}