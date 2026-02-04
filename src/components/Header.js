import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";

function Header() {
  const [showCompetition, setShowCompetition] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const dropdownRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
  try {
    const savedUser = localStorage.getItem("rungmunchUser");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser.firstName);
    }
  } catch (err) {
    localStorage.removeItem("rungmunchUser");
  }
}, []);



  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setShowCompetition(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);



  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Login failed");
      return;
    }

    // Save logged-in user
    localStorage.setItem(
      "rungmunchUser",
      JSON.stringify(data.user)
    );

    setUser(data.user.firstName);
    setShowLogin(false);
    setUsername("");
    setPassword("");

  } catch (err) {
    console.error(err);
    alert("Server error");
  }
};


  const handleLogout = () => {
    localStorage.removeItem("rungmunchUser");
    setUser(null);
    navigate("/");
  };

  return (
    <>
<nav className="navbar">
  <div className="navbar-inner">

    {/* LEFT */}
    <div className="logo-section">
      <img src={logo} alt="Rungmunch Logo" className="logo" />
    </div>

    {/* CENTER — tabs only */}
<div className="nav-links">
  <Link to="/">Home</Link>
  <Link to="/about">About Us</Link>
  <Link to="/events">Events</Link>

  <div className="dropdown" ref={dropdownRef}>
    <span
      className="dropdown-title"
      onClick={() => setShowCompetition(!showCompetition)}
    >
      Competition ▾
    </span>

    {showCompetition && (
      <div className="dropdown-menu">
        <Link to="/competition/music">Music</Link>
        <Link to="/competition/dance">Dance</Link>
        <Link to="/competition/instrumental">Instrumental</Link>
      </div>
    )}
  </div>

  <Link to="/get-involved">Get Involved</Link>
  <Link to="/contact">Contact</Link>
</div>

{/* RIGHT — username + logout */}
<div className="auth-actions">
  {user && (
    <button
      type="button"
      className="user-btn"
      onClick={() => navigate("/my-history")}
    >
      {user}
    </button>
  )}

  {!user ? (
    <button
      type="button"
      className="login-btn"
      onClick={() => setShowLogin(true)}
    >
      Login
    </button>
  ) : (
    <button
      type="button"
      className="login-btn"
      onClick={handleLogout}
    >
      Logout
    </button>
  )}
</div>

</div>
</nav>


      {/* LOGIN MODAL */}
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
              onClick={() =>
                setShowLogin(false)
              }
            >
              ✕
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
