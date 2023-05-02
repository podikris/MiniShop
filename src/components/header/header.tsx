import { useState } from "react";
import logoImage from "../../assets/logo.png";

function Header() {
  const [isActive, setActive] = useState(false);
  const [userType] = useState("SHOP");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <nav
      className="navbar is-fixed-top is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={logoImage} width="112" height="28" />
        </a>

        <a
          role="button"
          className={`navbar-burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navBarMenu"
          onClick={handleToggle}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navBarMenu"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        {userType == "CUSTOMER" ? (
          <div className="navbar-start">
            {/* Custface menu items */}
            <a className="navbar-item">Home</a>
            <a className="navbar-item">My Subscriptions</a>
            <a className="navbar-item">My History</a>
            <a className="navbar-item">My Account</a>
            {/* Allface menu items */}
            <a className="navbar-item">About</a>
            <a className="navbar-item">Feedback</a>
          </div>
        ) : (
          <div className="navbar-start">
            {/* Shopface menu items */}
            <a className="navbar-item">Products</a>
            <a className="navbar-item">Users</a>
            <a className="navbar-item">Subscriptions</a>
            <a className="navbar-item">Deliveries</a>
            {/* Allface menu items */}
            <a className="navbar-item">About</a>
            <a className="navbar-item">Feedback</a>
          </div>
        )}

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
