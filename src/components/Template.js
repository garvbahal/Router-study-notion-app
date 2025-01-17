import React from "react";
import frameImg from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  return (
    <div className="flex w-11/12 max-w-[1160px] mx-auto py-12 gap-x-12 gap-y-0">
      <div>
        <h1 className=" text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">
          {title}
        </h1>
        <p className="text-[1.125rem] leading-[1.625rem] mt-4 flex flex-col">
          <span className=" text-richblack-100">{desc1}</span>
          <span className=" text-blue-100 italic">{desc2}</span>
        </p>

        {formtype === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>

        <button>Sign in with Google</button>
      </div>

      <div>
        <img
          src={frameImg}
          alt="Pattern"
          width={558}
          height={504}
          loading="lazy"
        />
        <img
          src={image}
          alt="students"
          width={558}
          height={490}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Template;
