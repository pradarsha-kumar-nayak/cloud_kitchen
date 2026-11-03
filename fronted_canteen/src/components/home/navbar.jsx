import { useEffect, useState } from "react"
import "./navstyle.css"
import { Link, useNavigate } from "react-router-dom"

export function Navbar() {
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const closeMenu = () => setMenuOpen(false);

  async function handellogout() {
    const res = await fetch("http://localhost:8000/logout", {
      credentials: "include"
    })

    if (res.ok) {
      setUser(null);
      closeMenu();
      navigate("/");
      alert("you are logedout");
    }
  }

  function handleSearch(e) {
    if (e.key === "Enter") {
      if (search.trim() === "") {
        return;
      }
      navigate(`/search/${encodeURIComponent(search.trim())}`);
      closeMenu();
    }
  }

  useEffect(() => {
    fetch("http://localhost:8000/check-auth", { credentials: "include" })
      .then(data => data.json())
      .then(res => {
        if (res.loggedIn) {
          setUser(res.user);
        } else {
          setUser(null);
        }
      }).catch(() => setUser(null));
  }, [])

  return (
    <>
      <div className="navbar">
        <div className="nav-top">
          <span className="fs-5 fw-medium brand">OURKITCHEN</span>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={menuOpen ? "bi bi-x-lg" : "bi bi-list"}></span>
          </button>
        </div>

        <div className={`nav-links fst-div ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={closeMenu}><span className="nv">Home</span></Link>
          <Link to="/subscription" onClick={closeMenu}><span className="nv">Subscription</span></Link>
          <Link to="/visitmore" onClick={closeMenu}><span className="nv">Visit-More</span></Link>
          {user && user.username === "nayak" &&
            <Link to="/admin" onClick={closeMenu}><span className="nv">Admin</span></Link>
          }
        </div>

        <div className={`nav-right sec-div ${menuOpen ? "open" : ""}`}>
          <input
            type="text"
            name="item"
            placeholder="Search flavors"
            className="p-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearch}
          />

          <div className="nav-icons">
            <span className="bi bi-cart"></span>
            <span className="bi bi-heart"></span>
            <span className="bi bi-person"></span>
          </div>

          <div className="nav-auth">
            {!user && (
              <>
                <Link to="/login" onClick={closeMenu}><span>Login</span></Link>
                <Link to="/signup" onClick={closeMenu}><span>SignUp</span></Link>
              </>
            )}
            {user &&
              <Link to="/" onClick={(e) => { e.preventDefault(); handellogout(); }}>
                <span>Logout</span>
              </Link>
            }
          </div>
        </div>
      </div>
    </>
  )
}