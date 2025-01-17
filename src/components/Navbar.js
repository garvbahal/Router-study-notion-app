import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import toast from "react-hot-toast";

const Navbar = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="flex justify-evenly">
      <NavLink to="/">
        <img src={Logo} alt="Logo" width={160} height={32} loading="lazy" />
      </NavLink>

      <nav>
        <ul className="flex gap-3">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="#">About</NavLink>
          </li>
          <li>
            <NavLink to="#">Contact</NavLink>
          </li>
        </ul>
      </nav>

      <div className="flex gap-3 ml-5">
        {!isLoggedIn && (
          <NavLink to="/login">
            <button>Login</button>
          </NavLink>
        )}

        {!isLoggedIn && (
          <NavLink to="/signup">
            <button>Sign Up</button>
          </NavLink>
        )}

        {isLoggedIn && (
          <NavLink to="/">
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
            >
              Log Out
            </button>
          </NavLink>
        )}

        {isLoggedIn && (
          <NavLink to="/dashboard">
            <button>Dashboard</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
