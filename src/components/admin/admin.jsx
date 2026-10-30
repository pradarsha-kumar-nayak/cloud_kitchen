import { Link } from "react-router-dom"
export function Admin(){
    return(
       <div className="d-flex offset-3" style={{gap:"20px",marginBottom:"250px"}}>
        <Link to="/additem">
          <div className="card" style={{width:"350px"}}>
            <img src="/image/add-item.jpg" style={{width:"100%",height:"180px",objectFit:"cover"}} />
            <div className="card-body">
              <h2>Add new Item</h2>
            </div>
          </div>
        </Link>
        <Link to="/seesub">
        <div className="card" style={{width:"350px"}}>
            <img src="/image/customer.jpg" style={{width:"100%",height:"180px",objectFit:"cover"}}/>
            <div className="card-body">
              <h2>See our subscriber</h2>
            </div>
          </div>
        </Link>
          
       </div>
    )
}