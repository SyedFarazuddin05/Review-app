/*eslint-disable */

import React from "react";
import { HiOutlinePhone } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Card({ item }) {
  const navigate = useNavigate();
  const handleOnclick = (id) => {
    navigate(`/search/results/${id}`);
  };
  return (
    <section
      className="w-[45%] border px-4 py-2 rounded-md cursor-pointer boxShadow flex flex-col gap-1"
      onClick={() => {
        handleOnclick(item.id);
      }}
    >
      <h1 className="flex">
        <span className="font-bold">Name : </span>
        {item.name}
      </h1>
      <p>{item.adress_1}</p>
      <div className="flex items-center justify-start gap-2">
        <span className="flex items-center flex-row-reverse gap-1 justify-center font-bold">
          Phone:
          <HiOutlinePhone />
        </span>
        <div>{item?.phone ? <p>{item.phone}</p> : <p>Not Available</p>}</div>
      </div>
      <div className="flex items-start">
        <span className="font-bold flex items-center justify-center flex-row-reverse">
          Address :
          <FaLocationDot />
        </span>
        {item.address_1},{item.state}, {item.city}
      </div>
      <p></p>
      <div className="flex gap-1">
        <p className="font-bold flex items-center justify-center">
          <IoIosLink />
          Website URL:{"   "}
        </p>
        <a href={item.website_url}>{item.website_url}</a>
      </div>
    </section>
  );
}
