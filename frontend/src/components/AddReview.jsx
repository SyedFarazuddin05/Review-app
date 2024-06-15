/* eslint-disable */

import React, { useState } from "react";
import Stars from "./Stars";
import { IoMdClose } from "react-icons/io";
import axios from "axios";

export default function AddReview({ setOpen, postId, setReviews, getReviews }) {
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");

  const postReview = async () => {
    const user = localStorage.getItem("User");
    console.log(user);
    const { data } = await axios.post(
      `https://review-app-vlwi.onrender.com/add-review`,
      {
        rating,
        description,
        postId,
        userName: user,
      }
    );
    console.log(data);
    setOpen(false);
    getReviews();
  };
  return (
    <section className="flex items-center justify-center w-[450px] h-[300px] flex-col gap-6">
      <div className="flex items-center justify-between mb-6 w-full">
        <h1 className="font-serif text-xl font-bold ">Add your review</h1>
        <span
          className="bg-slate-200 rounded-lg cursor-pointer"
          onClick={() => {
            setOpen(false);
          }}
        >
          <IoMdClose size={30} />
        </span>
      </div>
      <div className="flex items-center gap-2 font-bold justify-start  w-full">
        <label className="font-bold font-serif text-xl" htmlFor="">
          Rate this shop:
        </label>
        <div className="flex flex-col">
          <Stars rating={rating} setRating={setRating} />
        </div>
      </div>
      <div className="flex items-center gap-2 font-bold justify-start w-full">
        <label className="font-bold font-serif text-xl" htmlFor="">
          Description:
        </label>
        <textarea
          className="border px-4 py-2 w-fit outline-blue-600"
          name="description"
          cols={30}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="Enter your description here"
          id=""
        ></textarea>
      </div>
      <button
        className="border px-4 py-2 rounded-sm font-bold"
        onClick={() => {
          postReview();
        }}
      >
        Submit
      </button>
    </section>
  );
}
