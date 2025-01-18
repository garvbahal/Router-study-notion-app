import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [accountType, setAccountType] = useState("student");

  const navigate = useNavigate();
  function changeHandler(event) {
    const { name, value, checked } = event.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = { ...formData, accountType };

    console.log("Printing account data");
    console.log(accountData);
    navigate("/dashboard");
  }

  return (
    <div>
      <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max border-b-2 border-richblack-700">
        <button
          className={`${
            accountType === "student"
              ? " bg-richblack-900 text-richblack-5"
              : " bg-transparent text-richblack-200"
          } py-2  px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>
        <button
          className={`${
            accountType === "instructor"
              ? " bg-richblack-900 text-richblack-5"
              : " bg-transparent text-richblack-200"
          } py-2  px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("instructor")}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        {/* firstName and last Name */}
        <div className="flex gap-x-4 my-[20px]">
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name<sup className=" text-pink-200">*</sup>
            </p>

            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter first name"
              value={formData.firstName}
              className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] border-b-2  border-b-richblack-700"
            />
          </label>

          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name<sup className=" text-pink-200">*</sup>
            </p>

            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last name"
              value={formData.lastName}
              className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] border-b-2  border-b-richblack-700"
            />
          </label>
        </div>

        {/* email */}
        <label>
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address<sup className=" text-pink-200">*</sup>
          </p>

          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter email address"
            value={formData.email}
            className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] border-b-2  border-b-richblack-700"
          />
        </label>

        {/* Create Password and Confirm Password */}
        <div className="flex gap-x-4 mt-[20px]">
          <label className="relative w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password<sup className=" text-pink-200">*</sup>
            </p>

            <input
              required
              type={showPassword1 ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
              className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] border-b-2  border-b-richblack-700"
            />

            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setShowPassword1((prev) => !prev)}
            >
              {showPassword1 ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label className="relative w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password<sup className=" text-pink-200">*</sup>
            </p>

            <input
              required
              type={showPassword2 ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] border-b-2  border-b-richblack-700"
            />

            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setShowPassword2((prev) => !prev)}
            >
              {showPassword2 ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        <button className="w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
