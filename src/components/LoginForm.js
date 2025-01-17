import React, { useState } from "react";
import { useState } from "react";

const LoginForm = () => {
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

  return (
    <form>
      <label>
        <p>
          Email Address <sup>*</sup> {/* super script */}
        </p>

        <input
          required
          type="text"
          name="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter email address"
        />
      </label>

      <label>
        <p>
          Password<sup>*</sup> {/* super script */}
        </p>

        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter Password"
        />
      </label>
    </form>
  );
};

export default LoginForm;
