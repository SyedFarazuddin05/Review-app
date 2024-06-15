/*eslint-disable */

import React, { useEffect, useState } from "react";
import logo1 from "../assets/logo1.png";
import { Link, useNavigate } from "react-router-dom";

export default function Nav() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("User");
    navigate("/login");
  };
  const getUser = () => {
    const user = localStorage.getItem("User");
    setUser(user);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <nav className="mx-auto flex justify-between items-center py-3 px-6  fixed top-0 left-0 right-0 z-30 bg-slate-800">
      <Link to={"/"} className=" flex items-center justify-center">
        <img className="w-32" src={logo1} alt="" />
      </Link>
      <div className="flex items-center justify-center font-serif gap-2 font-bold">
        <div className="flex flex-col justify-center items-start mr-6">
          <p className="text-slate-100">Welcome</p>
          <span className="text-white">{user.split("@")[0]}</span>
        </div>
        <button
          className="hover:text-slate-400 text-slate-200 cursor-pointer border px-2 py-1 rounded-sm border-white"
          onClick={() => {
            handleLogout();
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
