import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
export function ViewDetails() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    image: "",
    price: 0,
    title: "",
  });
  const[user,setUser]=useState(null);
  const [review,setReview]=useState({rating:5,comment:""});
  const [allreviews,setAllreviews]=useState([]);
  const { id } = useParams();

  async function handledelete() {
    const per = confirm("you are conform item delete");
    if (!per) {
      return;
    }
    const res = await fetch(`http://localhost:8000/itm/deleteItm/${id}`, {
      credentials:"include",
      method: "delete",
    });

    if (res.ok) {
      navigate("/visitMore");
    }
  }
   function reviewsubmit(e){
    e.preventDefault();
      fetch(`http://localhost:8000/review/addreview/${id}`,{
      credentials:"include",
      method:"post",
      headers:{
         "Content-Type":"application/Json"
      },
      body:JSON.stringify(review)
     }).then((res)=>{
        if(res.status ===401){
          alert("your are not login");
          navigate("/login");
        }
        
         if(res.ok){
           fetchDetails();
           setReview({rating:5,comment:""});
           e.target.reset();
          }
        
      })
     
    //  if(res.ok){
    //   fetchDetails();
    //   setReview({rating:5,comment:""});
    //   e.target.reset();
    //  }
    //  const text =await res.text();
    //  console.log(text);
  }
    function handleReviewDelete(reviewid){
     fetch(`http://localhost:8000/review/deletereview/${reviewid}/${id}`,{
        method:"delete",
        credentials:"include"
      }).then((res)=>{
        if(res.status ===401){
          alert("your are not login");
          navigate("/login");
        }

        if(res.status ===403){
          alert("your are not owner ths review");
          // navigate("/login");
        }

        if(res.ok){
          fetchDetails();
        }
      })
   }

   function fetchDetails(){
     fetch(`http://localhost:8000/itm/viewdetails/${id}`,{
      credentials:"include"
     })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setAllreviews(data.reviews)
      });
   }
   function isLogedin(){
     fetch("http://localhost:8000/check-auth",{credentials:"include"})
     .then(data =>
        data.json()
     ).then(res =>{
       setUser(res.user)
     }).catch(()=>{
      setUser(null);
     })
   }
  useEffect(() => {
   fetchDetails();
   isLogedin();
  }, []);
  return (
    <div className="row">
      <div
        className="card h-100 col-8"
        style={{
          margin: "0 auto",
          border: "none",
          backgroundColor: "rgba(173, 170, 170, 0.2)",
          borderRadius: "20px",
        }}
      >
        <img
          src={data.image}
          className="mt-2"
          style={{ height: "40vh", objectFit: "cover", borderRadius: "20px" }}
        ></img>
        <div className="card-body">
          <h3>{data.name}</h3>
          <p>{data.title}</p>
          <p className="fw-bold">&#8377;{data.price.toLocaleString("en-IN")}</p>
          {user && user.username==="nayak" &&
          <>
          <p onClick={handledelete} style={{ cursor: "pointer", color: "red" }}>
            Delete-Itm
          </p>
          <Link
            to={`/updateitem/${id}`}
            style={{
              cursor: "pointer",
              color: "green",
              textDecoration: "none",
            }}
          >
            Update-Itm
          </Link>
          </>
}
          <Link to="/address">
            <button
              className="btn mt-3"
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "#fc5b00",
                borderRadius: "40px",
              }}
            >
              Order Now
            </button>
          </Link>
        </div>
      </div>
    <div className="col-10 col-md-8 col-lg-6 mx-auto mt-4">

  {/* REVIEW FORM */}
  {user &&
  <div
    className="card border-0 shadow-sm p-4"
    style={{
      borderRadius: "20px",
      backgroundColor: "#fff",
    }}
  >
    <div className="text-center mb-4">
      <h2 className="fw-bold">Leave a Review</h2>

      <p className="text-muted mb-0">
        Share your experience with us ❤️
      </p>
    </div>

    <form onSubmit={reviewsubmit}>

      {/* Rating */}
      <div className="mb-4">
        <label className="form-label fw-bold">
          Rating
        </label>

        <div className="d-flex align-items-center gap-3">

          <input
            type="range"
            min="1"
            max="5"
            defaultValue="5"
            required
            className="form-range"
            onChange={(e) =>
              setReview({
                ...review,
                rating: Number(e.target.value),
              })
            }
          />

          <span
            className="badge rounded-pill"
            style={{
              backgroundColor: "#fc5b00",
              fontSize: "14px",
            }}
          >
            {review.rating} ⭐
          </span>

        </div>
      </div>


      {/* Comment */}
      <div className="mb-4">

        <label className="form-label fw-bold">
          Comments
        </label>

        <textarea
          className="form-control"
          rows="4"
          placeholder="Write your review here..."
          required
          style={{
            borderRadius: "12px",
            resize: "none",
          }}
          onChange={(e) =>
            setReview({
              ...review,
              comment: e.target.value,
            })
          }
        ></textarea>

      </div>


      {/* Submit */}
      <button
      
        type="submit"
        className="btn w-100 text-white fw-bold"
        style={{
          backgroundColor: "#fc5b00",
          borderRadius: "30px",
          padding: "12px",
        }}
      >

      
        Submit Review ⭐
      </button>

    </form>

  </div>
}

  {/* ALL REVIEWS */}
  <div className="row g-4 mt-3">

  {allreviews.map((review) => (

    <div
      className="col-12 col-md-6 col-lg-4"
      key={review._id}
    >

      <div
        className="card h-100 shadow-sm border-0 p-3"
        style={{
          borderRadius: "15px",
        }}
      >

        <div className="d-flex justify-content-between align-items-center">

          <h5 className="mb-0">
            {/* Customer Review */}
            @{review.author.username}
          </h5>

          <span
            className="badge rounded-pill"
            style={{
              backgroundColor: "#fc5b00",
              fontSize: "14px",
            }}
          >
            {review.rating} ⭐
          </span>

        </div>

        <hr />

        <p className="text-muted mb-3">
          {review.comment}
        </p>

        {/* DELETE BUTTON */}

        <button
          className="btn btn-dark btn-sm mt-auto"
          onClick={() => handleReviewDelete(review._id)}
        >
          Delete Review
        </button>

      </div>

    </div>

  ))}

</div>

</div>
    </div>
  );
}
