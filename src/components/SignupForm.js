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
    const accountData = { ...formData };
    console.log("Printing account data");
    console.log(accountData);
    navigate("/dashboard");
  }

  return (
    <div>
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        {/* firstName and last Name */}
        <div>
          <label>
            <p>
              First Name<sup>*</sup>
            </p>

            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter first name"
              value={formData.firstName}
            />
          </label>

          <label>
            <p>
              Last Name<sup>*</sup>
            </p>

            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last name"
              value={formData.lastName}
            />
          </label>
        </div>

        {/* email */}
        <label>
          <p>
            Email Address<sup>*</sup>
          </p>

          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter email address"
            value={formData.email}
          />
        </label>

        {/* Create Password and Confirm Password */}
        <div>
          <label>
            <p>
              Create Password<sup>*</sup>
            </p>

            <input
              required
              type={showPassword1 ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
            />

            <span onClick={() => setShowPassword1((prev) => !prev)}>
              {showPassword1 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>

          <label>
            <p>
              Confirm Password<sup>*</sup>
            </p>

            <input
              required
              type={showPassword2 ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
            />

            <span onClick={() => setShowPassword2((prev) => !prev)}>
              {showPassword2 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>

        <button>Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
