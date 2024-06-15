/*eslint-disable*/
import React, { useState } from "react";
import { RiEyeCloseLine } from "react-icons/ri";
import { RxEyeOpen } from "react-icons/rx";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const handleLogin = async () => {
    if (email == "" || password == "") {
      setError("All fields are required");
      return;
    }
    const { data } = await axios.post("http://localhost:4000/login", {
      email,
      password,
    });
    console.log(data);
    if (data.success) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("User", data.email);
      navigate("/");
    } else {
      setError(data.message);
    }
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  return (
    <main className="flex items-center justify-center h-[100vh] flex-col">
      <nav className="flex fixed top-0 right-0 left-0 py-4 px-6 justify-between items-center">
        <div className=" flex items-center justify-center">
          <img className="w-32" src={logo} alt="" />
        </div>
        <div className="flex items-center justify-center font-serif gap-2 font-bold">
          <p className="text-slate-600">Dont have an account ? </p>
          <Link
            to={"/register"}
            className="hover:text-slate-900 text-slate-700 cursor-pointer hover:underline"
          >
            Register now
          </Link>
        </div>
      </nav>
      <div className="px-6 py-10 flex flex-col gap-5 bg-[#ffffff14] rounded-lg  w-[340px]">
        <h1 className="text-3xl text-center text-slate-700 font-bold">
          Sign in
        </h1>
        <div className="flex flex-col gap-2 ">
          <label className="text-slate-700" htmlFor="Email">
            Email address
          </label>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            className="px-4 py-2 rounded-lg border-2 outline-slate-900"
          />
        </div>
        <div className="flex flex-col gap-2 border-slate-900">
          <label className="text-slate-700 text-[18px]" htmlFor="password">
            Password
          </label>
          <div className="flex items-center justify-center bg-white rounded-lg  outline-blue-800  py-2 px-4 border-2">
            <input
              type={`${showPass ? "text" : "password"}`}
              className="rounded-lg border-none outline-none w-full"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p
              className="text-slate-900 cursor-pointer"
              onClick={() => {
                setShowPass((prev) => !prev);
              }}
            >
              {showPass ? (
                <>
                  <RxEyeOpen />
                </>
              ) : (
                <>
                  <RiEyeCloseLine />
                </>
              )}
            </p>
          </div>
        </div>

        <button
          className="px-4 py-2 w-full bg-slate-800 rounded-lg text-white"
          onClick={handleLogin}
        >
          Sign In
        </button>
        <div className="h-5">
          <p className="text-red-500">{error}</p>
        </div>
      </div>
    </main>
  );
}

export default Login;
