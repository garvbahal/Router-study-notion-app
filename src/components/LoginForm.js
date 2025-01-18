import React, { useState } from "react";
import toast from "react-hot-toast";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    const { name, value, checked } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged in");
    navigate("/dashboard");
  }

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-4 mt-6"
    >
      <label className="w-full">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Email Address <sup className=" text-pink-200">*</sup>{" "}
          {/* super script */}
        </p>

        <input
          required
          type="email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter email address"
          className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] border-b-2  border-b-richblack-700"
        />
      </label>

      <label className=" w-full relative">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Password<sup className=" text-pink-200">*</sup> {/* super script */}
        </p>

        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter Password"
          className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] border-b-2  border-b-richblack-700"
        />

        <span
          className="absolute right-3 top-[38px] cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>

        <NavLink to="#">
          <p className=" text-xs mt-1 max-w-max ml-auto text-blue-100">
            Forgot Password
          </p>
        </NavLink>
      </label>

      <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
