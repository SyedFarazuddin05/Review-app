import React, { useState } from "react";
import { RiEyeCloseLine } from "react-icons/ri";
import { RxEyeOpen } from "react-icons/rx";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const handleRegister = async () => {
    if (email == "" || password == "" || confirmPassword == "") {
      setError("All fields are required");
      return;
    }
    if (confirmPassword !== password) {
      setError("Password and confirm password doesn't match");
      return;
    }
    const { data } = await axios.post(
      "https://review-app-vlwi.onrender.com/register",
      {
        email,
        password,
      }
    );
    if (data.success) {
      setError("");
      setSuccess(data.message);
    } else {
      setError(data.message);
    }
    console.log(data);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showPass1, setShowPass1] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  return (
    <main className="flex items-center justify-center h-[100vh] flex-col">
      <nav className="flex fixed top-0 right-0 left-0 py-4 px-6 justify-between items-center">
        <div className=" flex items-center justify-center">
          <img className="w-32" src={logo} alt="" />
        </div>
        <div className="flex items-center justify-center font-serif gap-2 font-bold">
          <p className="text-slate-600">Already have an account ? </p>
          <Link
            to="/login"
            className="hover:text-slate-900 text-slate-700 cursor-pointer hover:underline"
          >
            Login now
          </Link>
        </div>
      </nav>
      <section className="px-6 py-10 flex flex-col gap-5 bg-[#ffffff14] rounded-lg  w-[360px]">
        <h1 className="text-3xl text-center text-slate-700 font-bold">
          Sign Up
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
        <div className="flex flex-col gap-2 border-slate-900">
          <label className="text-slate-700 text-[18px]" htmlFor="password">
            Confirm Password
          </label>
          <div className="flex items-center justify-center bg-white rounded-lg  outline-blue-800  py-2 px-4 border-2">
            <input
              type={`${showPass1 ? "text" : "password"}`}
              className="rounded-lg border-none outline-none w-full"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            <p
              className="text-slate-900 cursor-pointer"
              onClick={() => {
                setShowPass1((prev) => !prev);
              }}
            >
              {showPass1 ? (
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
          onClick={handleRegister}
        >
          Sign Up
        </button>
        <div className="h-5 w-full">
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
        </div>
      </section>
    </main>
  );
}

export default Register;
