import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";

function Header() {

  const [showInitiatives, setShowInitiatives] = useState(false);
  
  //const [showLogin, setShowLogin] = useState(false);

  //const [username, setUsername] = useState("");
  //const [password, setPassword] = useState("");
  const [showEvents, setShowEvents] = useState(false);

  //const [user, setUser] = useState(null);

  const [showMobileMenu, setShowMobileMenu] = useState(false);

 const dropdownRef = useRef(null);


  /*
  useEffect(() => {
    try {

      const savedUser = localStorage.getItem("rungmunchUser");

      if (savedUser) {

        const parsedUser = JSON.parse(savedUser);

        setUser(parsedUser);
      }

    } catch (err) {

      localStorage.removeItem("rungmunchUser");
    }
  }, []);
  */

  // ================= CLOSE DROPDOWN =================
useEffect(() => {
  const handleClickOutside = (e) => {
    // Close dropdowns when clicking anywhere outside the dropdown wrapper
    if (!dropdownRef.current) return;

    const target = e.target;
    if (target && !dropdownRef.current.contains(target)) {
      setShowInitiatives(false);
      setShowEvents(false);
    }
  };

  // Use capture + pointerdown to ensure we close before navigation/route changes
  document.addEventListener("pointerdown", handleClickOutside, true);

  return () => {
    document.removeEventListener("pointerdown", handleClickOutside, true);
  };
}, []);

  // ================= LOGIN =================
  /* const handleLogin = async (e) => {

    e.preventDefault();

    try {

const res = await fetch(
  "https://rungmunch-backend.onrender.com/api/auth/login",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password
    }),
  }
);

      const data = await res.json();

      if (!res.ok) {

        alert(data.message || "Login failed");

        return;
      }

      localStorage.setItem(
        "rungmunchUser",
        JSON.stringify(data.user)
      );

      setUser(data.user);

      setShowLogin(false);

      setUsername("");
      setPassword("");

      // ✅ Navigate after login
      if (data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/my-history");
      }

    } catch (err) {

      console.error(err);

      alert("Server error");
    }
  }; */

  // ================= LOGOUT =================
 /* const handleLogout = () => {

    localStorage.removeItem("rungmunchUser");

    setUser(null);

    navigate("/");
  }; */

  return (
    <>
      <nav className="navbar">

        <div className="navbar-inner">

          {/* LEFT */}
          <div className="logo-section">
            <img
              src={logo}
              alt="Rungmunch Logo"
              className="logo"
            />
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="menu-toggle"
            onClick={() =>
              setShowMobileMenu(!showMobileMenu)
            }
          >
            ☰
          </button>

          {/* CENTER */}
          <div className={`nav-links ${showMobileMenu ? "active" : ""}`}>

            <Link
              to="/"
              onClick={() => setShowMobileMenu(false)}
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setShowMobileMenu(false)}
            >
              About Us
            </Link>


           

{/* INITIATIVES */}

  <div
  ref={dropdownRef}
  style={{ display: "flex", gap: "40px" }}
>
  {/* EVENTS */}
  <div className="dropdown">
    <span
      className="dropdown-title"
      onClick={() => {
  setShowEvents(!showEvents);
  setShowInitiatives(false);
}}
    >
      Events ▾
    </span>

    {showEvents && (
      <div className="dropdown-menu">
        <Link
          to="/events/upcoming"
          onClick={() => {
            setShowEvents(false);
            setShowMobileMenu(false);
          }}
        >
          Upcoming Events
        </Link>

        <Link
          to="/events/past"
          onClick={() => {
            setShowEvents(false);
            setShowMobileMenu(false);
          }}
        >
          Past Events
        </Link>
      </div>
    )}
  </div>

  {/* INITIATIVES */}
  <div className="dropdown">
    <span
      className="dropdown-title"
      onClick={() => {
  setShowInitiatives(!showInitiatives);
  setShowEvents(false);
}}
    >
      Our Initiatives ▾
    </span>

    {showInitiatives && (
      <div className="dropdown-menu">
        <Link
          to="/initiatives/vista"
          onClick={() => {
            setShowInitiatives(false);
            setShowMobileMenu(false);
          }}
        >
          VISTA
        </Link>

        <Link
          to="/initiatives/wwii"
          onClick={() => {
            setShowInitiatives(false);
            setShowMobileMenu(false);
          }}
        >
          WWII
        </Link>
      </div>
    )}
  </div>
</div>

            <Link
              to="/get-involved"
              onClick={() => setShowMobileMenu(false)}
            >
              Get Involved
            </Link>

            <Link
              to="/contact"
              onClick={() => setShowMobileMenu(false)}
            >
              Contact
            </Link>

            {/* AUTH */}
            {/*
            <div className="auth-actions">

              {user && (
                <button
                  className="user-btn"
                  onClick={() => {

                    if (user.role === "admin") {
                      navigate("/admin");
                    } else {
                      navigate("/my-history");
                    }
                  }}
                >
                  {user.firstName}
                </button>
              )}

              {!user ? (

                <button
                  className="login-btn"
                  onClick={() => setShowLogin(true)}
                >
                  Login
                </button>

              ) : (

                <button
                  className="login-btn"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              )}
            </div>
            */}
          </div>
        </div>
      </nav>

      {/*
{showLogin && (

  <div className="login-overlay">

    <div className="login-modal">

      <h2>Login</h2>

      <form onSubmit={handleLogin}>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />

        <button type="submit">
          Login
        </button>

      </form>

      <span
        className="close-btn"
        onClick={() => setShowLogin(false)}
      >
        ✕
      </span>

    </div>
  </div>

)}
*/}
    </>
  );
}

export default Header;