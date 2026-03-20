import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";

function Header() {
  const [showCompetition, setShowCompetition] = useState(false);
  const [showInitiatives, setShowInitiatives] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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

  // ✅ FIXED: Close BOTH dropdowns
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setShowCompetition(false);
        setShowInitiatives(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Login failed");
        return;
      }

      localStorage.setItem("rungmunchUser", JSON.stringify(data.user));
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

          <button
            className="menu-toggle"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            ☰
          </button>

          {/* CENTER */}
          <div className={`nav-links ${showMobileMenu ? "active" : ""}`}>

            <Link to="/" onClick={() => setShowMobileMenu(false)}>Home</Link>
            <Link to="/about" onClick={() => setShowMobileMenu(false)}>About Us</Link>
            <Link to="/events" onClick={() => setShowMobileMenu(false)}>Events</Link>

            {/* ✅ WRAPPED BOTH DROPDOWNS */}
            <div ref={dropdownRef} style={{ display: "flex", gap: "40px" }}>

              {/* Competition */}
              <div className="dropdown">
                <span
                  className="dropdown-title"
                  onClick={() => {
                    setShowCompetition(!showCompetition);
                    setShowInitiatives(false);
                  }}
                >
                  Competition ▾
                </span>

                {showCompetition && (
                  <div className="dropdown-menu">
                    <Link to="/competition/music" onClick={() => setShowMobileMenu(false)}>Music</Link>
                    <Link to="/competition/dance" onClick={() => setShowMobileMenu(false)}>Dance</Link>
                    <Link to="/competition/instrumental" onClick={() => setShowMobileMenu(false)}>Instrumental</Link>
                  </div>
                )}
              </div>

              {/* Initiatives */}
              <div className="dropdown">
                <span
                  className="dropdown-title"
                  onClick={() => {
                    setShowInitiatives(!showInitiatives);
                    setShowCompetition(false);
                  }}
                >
                  Our Initiatives ▾
                </span>

                {showInitiatives && (
                  <div className="dropdown-menu">
                    <Link
                      to="/initiatives/vista"
                      onClick={() => {
                        setShowMobileMenu(false);
                        setShowInitiatives(false);
                      }}
                    >
                      VISTA
                    </Link>

                    <Link
                      to="/initiatives/wwii"
                      onClick={() => {
                        setShowMobileMenu(false);
                        setShowInitiatives(false);
                      }}
                    >
                      WWII
                    </Link>
                  </div>
                )}
              </div>

            </div>

            <Link to="/get-involved" onClick={() => setShowMobileMenu(false)}>Get Involved</Link>
            <Link to="/contact" onClick={() => setShowMobileMenu(false)}>Contact</Link>

            {/* Auth */}
            <div className="auth-actions">
              {user && (
                <button
                  className="user-btn"
                  onClick={() => navigate("/my-history")}
                >
                  {user}
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
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button type="submit">Login</button>
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
    </>
  );
}

export default Header;