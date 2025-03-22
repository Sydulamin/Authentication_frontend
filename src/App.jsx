import React, { useState } from "react";
import InputField from "./Components/InputField";
import Button from "./Components/Button";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  }

  return (
    <div className="flex justify-center items-center bg-blue-500 h-screen">
      <div className="bg-white w-[900px] h-[500px] rounded-md shadow-lg flex">
        <div className="w-1/2 rounded-md">
          <img
            className="w-full h-full bg-cover object-cover rounded-l-md"
            src="https://www.pixelstalk.net/wp-content/uploads/2016/07/A-Images-HD-Screen-Download.jpg"
            alt="Login Visual"
          />
        </div>
        <div className="w-full bg-slate-400 flex justify-center rounded-r-md shadow-2xl items-center">
          <form className="flex flex-col p-10 items-center w-full" onSubmit={handleSubmit}>
            <h1 className="font-bold bg-slate-300 underline underline-offset-4 text-4xl p-2 rounded-md">
              Register
            </h1>
            <InputField className="p-2 w-full rounded-md hover:text-xl cursor-pointer bg-gray-200" type="text" placeholder="Name" />
            <InputField className="p-2 w-full rounded-md hover:text-xl cursor-pointer bg-gray-200" type="email" placeholder="email" />
            <InputField className="p-2 w-full rounded-md hover:text-xl cursor-pointer bg-gray-200" type="password" placeholder="Password" />
            <div className="flex justify-center w-full">
              <Button
                className={`m-2 p-2 w-1/4 ease-in-out transition rounded-md duration-500 
    hover:-translate-y-3 hover:scale-110 
    ${action === "Sign Up" ? "bg-gray-400 text-black cursor-not-allowed" : "bg-blue-600 text-white hover:bg-indigo-500"}`}
                text="Sign Up"
              />
              <Button
                className={`m-2 p-2 w-1/4 ease-in-out transition rounded-md duration-500 
    hover:-translate-y-3 hover:scale-110 
    ${action === "Login" ? "bg-gray-400 text-black cursor-not-allowed" : "bg-blue-600 text-white hover:bg-indigo-500"}`}
                text="Login"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
