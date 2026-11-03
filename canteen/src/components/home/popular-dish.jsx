import { GiChickenOven, GiHamburger } from "react-icons/gi";
import { IoFishSharp } from "react-icons/io5";
import { FaLeaf } from "react-icons/fa";
import { BiSolidDrink } from "react-icons/bi";
import { IoIosIceCream } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./popular-dish.css";

const categories = [
  { name: "Chicken", search: "chicken", icon: <GiChickenOven size={25} /> },
  { name: "Fish", search: "fish", icon: <IoFishSharp size={25} /> },
  { name: "Burger", search: "burger", icon: <GiHamburger size={25} /> },
  { name: "Healthy", search: "healthy", icon: <FaLeaf size={25} /> },
  { name: "Desserts", search: "deserts", icon: <IoIosIceCream size={25} /> },
  { name: "Drinks", search: "drinks", icon: <BiSolidDrink size={25} /> },
];

const dishes = [
  { title: "Mutton curry", text: "Delicious and tasty Mutton Curry", img: "/image/muttoncurry.jpg", search: "mutton" },
  { title: "Chicken Biryani", text: "Delicious and tasty chicken biryani", img: "/image/chkbiriyani.jpg", search: "chicken biryani" },
  { title: "Burger", text: "Delicious and tasty Burger", img: "/image/burger.jpg", search: "berger" },
  { title: "Healthy snacks", text: "Tasty and healthy snacks", img: "/image/healthyfood.jpg", search: "veg fried rice" },
];

export function PopularDish() {
  const navigate = useNavigate();

  function handelvisitmore(itm) {
    navigate(`/search/${encodeURIComponent(itm)}`);
  }

  return (
    <div>
      <div className="fst-con">
        <h2>Browse by Category</h2>
        <p>Curated selections for every craving</p>

        <div className="logo-con">
          {categories.map((c) => (
            <div className="logo" key={c.name} onClick={() => handelvisitmore(c.search)}>
              {c.icon}
              <span>{c.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="sec-con">
        <h2>Browse by Category</h2>
        <p>Curated selections for every craving</p>

        <div className="card-con">
          {dishes.map((d) => (
            <div className="card hom-card" key={d.title}>
              <img src={d.img} alt={d.title} className="hom-img" />
              <div className="card-body">
                <h5 className="card-title">{d.title}</h5>
                <p className="card-text">{d.text}</p>
              </div>
              <button className="btn btn-primary visit-btn" onClick={() => handelvisitmore(d.search)}>
                Visit More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}