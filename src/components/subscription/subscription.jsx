import { Link } from "react-router-dom"

export function Subscription() {
  return (
    <div className="container my-5 pb-5">
      <div className="row g-4 justify-content-center">

        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
          <Link to="/normal" className="text-decoration-none text-dark">
            <div className="card h-100">
              <img
                src="/image/normal-sub.jpg"
                alt="Normal subscription"
                className="card-img-top w-100"
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h2 className="fs-3">Normal sub</h2>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
          <Link to="/special" className="text-decoration-none text-dark">
            <div className="card h-100">
              <img
                src="/image/premium-sub.jpg"
                alt="Premium subscription"
                className="card-img-top w-100"
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h2 className="fs-3">Premium sub</h2>
              </div>
            </div>
          </Link>
        </div>

      </div>
    </div>
  )
}