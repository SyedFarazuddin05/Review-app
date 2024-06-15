/* eslint-disable  */
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { ColorRing } from "react-loader-spinner";
export default function Stars({ rating, setRating, hoverDisable }) {
  const [hover, setHover] = useState(null);
  return (
    <main>
      <div className="flex items-center justify-center gap-1">
        {[...Array(5)].map((i, idx) => {
          const currentRate = idx + 1;
          return (
            <div key={idx}>
              <label
                htmlFor=""
                onClick={() => {
                  setRating(currentRate);
                }}
              >
                <input type="radio" className="hidden" value={currentRate} />
                <FaStar
                  key={idx}
                  className={`${hoverDisable == false ? "" : "cursor-pointer"}`}
                  color={
                    currentRate <=
                    (hoverDisable == false ? rating : hover || rating)
                      ? "#ffc107"
                      : ""
                  }
                  onMouseEnter={() => {
                    setHover(currentRate);
                  }}
                  onMouseLeave={() => {
                    setHover(null);
                  }}
                  size={20}
                />
              </label>
            </div>
          );
        })}
      </div>
      {/* <p className="flex items-start justify-start">You rated {rating}</p> */}
    </main>
  );
}
