


import { useEffect, useState } from "react";

export function Seesub() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/sub/seesub", {
            credentials: "include"
        })
            .then((res) => res.json())
            .then((dt) => {
                console.log(dt);
                setData(dt.data);
            });
    }, []);

    return (
        <div className="container mt-4 mt-md-5">

            <h2 className="text-center mb-4 fs-3 fs-md-2">
                Subscriber Details
            </h2>

            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-9">

                    <div className="table-responsive shadow rounded">
                        <table className="table table-hover table-bordered text-center align-middle mb-0">

                            <thead className="table-dark">
                                <tr>
                                    <th>Username</th>
                                    <th>Contact No</th>
                                    <th>City</th>
                                </tr>
                            </thead>

                            <tbody>
                                {data.map((item) => (
                                    <tr key={item._id}>
                                        <td>{item.username}</td>
                                        <td>{item.contactno}</td>
                                        <td>{item.city}</td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>

                </div>
            </div>

        </div>
    );
}

