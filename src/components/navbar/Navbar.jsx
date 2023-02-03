import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./navBar.css";

// Menu de navigation
const Menu = () => (
  <>
    {/* Nos liens */}
    <NavLink
      to="/pricing"
      className={(nav) => (nav.isActive ? "nav-active" : "")}
    >
      <p>Prix </p>
    </NavLink>
    <NavLink
      to="/contact"
      className={(nav) => (nav.isActive ? "nav-active" : "")}
    >
      <p>Nous Contacter</p>
    </NavLink>
    <NavLink
      to="/bookdemo"
      className={(nav) => (nav.isActive ? "nav-active" : "")}
    >
      <p>Réserver une demo</p>
    </NavLink>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();

  // function de redirection home au clique du logo
  function handleClick() {
    navigate("/");
  }

  return (
    <div className="navbar ">
      <div className="navbar-links">
        <div className="navbar-logo" onClick={handleClick}>
          <img src={logo} alt="img" />
        </div>
        <div className="navbar-container">
          <Menu />
        </div>
      </div>

      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
