import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import toast from "react-hot-toast";

const Navbar = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <NavLink to="/">
        <img src={Logo} alt="Logo" width={160} height={32} loading="lazy" />
      </NavLink>

      <nav>
        <ul className=" text-richblack-100 flex gap-x-6">
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

      <div className="flex items-center gap-x-4">
        {!isLoggedIn && (
          <NavLink to="/login">
            <button className=" bg-richblack-800 text-richblack-100  py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Log in
            </button>
          </NavLink>
        )}

        {!isLoggedIn && (
          <NavLink to="/signup">
            <button className=" bg-richblack-800 text-richblack-100  py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Sign up
            </button>
          </NavLink>
        )}

        {isLoggedIn && (
          <NavLink to="/">
            <button
              className=" bg-richblack-800 text-richblack-100  py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
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
            <button className=" bg-richblack-800 text-richblack-100  py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Dashboard
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
