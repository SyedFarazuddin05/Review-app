/*eslint-disable*/

import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
export default function SearchBy({
  value,
  setValue,
  open,
  setOpen,
  setPlaceholder,
}) {
  const content = ["City", "Name", "Type"];
  useEffect(() => {
    if (value == "City") {
      setPlaceholder("name of the city");
    } else if (value == "Name") {
      setPlaceholder("name of the shop");
    } else {
      setPlaceholder("type of drink");
    }
  }, [value]);
  return (
    <div className="relative">
      <button
        className="bg-yellow-400 px-2 py-2 rounded-lg flex items-center gap-2 font-semibold text-slate-900"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <p>Search by {value}</p>
        <span>{!open ? <FaChevronDown /> : <FaChevronUp />}</span>
      </button>
      {open && (
        <section className="bg-yellow-400 px-2 py-2 flex items-center gap-2 font-semibold text-slate-900 absolute flex-col w-[140px] top-12 left-0 right-0">
          {content.map((item, idx) => (
            <p
              key={idx}
              className=" flex items-center gap-2 font-semibold hover:underline justify-center cursor-pointer w-full text-center"
              onClick={() => {
                setValue(item);
                setOpen(false);
              }}
            >
              {item}
            </p>
          ))}
        </section>
      )}
    </div>
  );
}
