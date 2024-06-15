import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import axios from "axios";
import Loader from "./Loader";
import AddReview from "./AddReview";
import { FaUserCircle } from "react-icons/fa";
import Stars from "./Stars";

export default function ShopDetails() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState();
  const [reviews, setReviews] = useState([]);
  const [avgRating, setAvgRating] = useState(0);
  const getReviews = async () => {
    const { data } = await axios.get(`http://localhost:4000/getReviews/${id}`);
    console.log(data);
    setReviews(data);
  };
  const fetchData = async () => {
    setLoading(true);
    const { data } = await axios.get(
      `https://api.openbrewerydb.org/v1/breweries/${id}`
    );
    setItem(data);
    console.log(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    getReviews();
  }, []);

  return (
    <main className="">
      <Nav />
      {loading ? (
        <Loader />
      ) : (
        <section className="mt-20 flex items-start justify-center max-w-7xl mx-auto px-6 py-4 flex-col relative">
          {open && (
            <div className="absolute z-10 border px-8 py-8 top-20 bg-white">
              <AddReview
                getReviews={getReviews}
                setReviews={setReviews}
                postId={id}
                setOpen={setOpen}
              />
            </div>
          )}
          <h1 className="text-3xl font-bold mb-5">Brewery Shop Details</h1>
          <h1 className="flex gap-1">
            <span className="font-bold">Name: </span>
            {item?.name}
          </h1>
          <p>{item?.adress_1}</p>
          <div className="flex items-center justify-start gap-2">
            <span className="flex items-center flex-row-reverse gap-1 justify-center font-bold">
              Phone:
            </span>
            <div>
              {item?.phone ? <p>{item?.phone}</p> : <p>Not Available</p>}
            </div>
          </div>
          <div className="flex items-start gap-1">
            <span className="font-bold flex items-center justify-center flex-row-reverse">
              Country:
            </span>
            {item?.country}
          </div>
          <div className="flex items-start gap-1">
            <span className="font-bold flex items-center justify-center flex-row-reverse">
              Address:
            </span>
            {item?.address_1}
          </div>
          <div className="flex items-start gap-1">
            <span className="font-bold flex items-center justify-center flex-row-reverse">
              State:
            </span>
            {item?.state}
          </div>
          <div className="flex items-start gap-1">
            <span className="font-bold flex items-center justify-center flex-row-reverse">
              City:
            </span>
            {item?.city}
          </div>
          <div className="flex gap-1">
            <p className="font-bold flex items-center justify-center">
              Website URL:
            </p>
            {item?.website_url ? (
              <a href={item?.website_url}>{item?.website_url}</a>
            ) : (
              <p>Not available</p>
            )}
          </div>
          <button
            className="border px-4 py-2 rounded-lg mt-4 text-slate-700 font-bold"
            onClick={() => {
              setOpen(true);
            }}
          >
            Add your Review ?
          </button>
        </section>
      )}
      {reviews && reviews.length < 1 ? (
        <section className="max-w-7xl mx-auto px-6 py-2 flex flex-col gap-4">
          <h3 className="text-xl font-semibold">No reviews posted yet.</h3>
        </section>
      ) : (
        <section className="max-w-7xl mx-auto px-6 py-2 flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Recent Reviews</h3>
          <h3 className="text-lg font-semibold">
            Overall Reviews : ({reviews.length})
          </h3>

          <div className="flex flex-col gap-4 mb-4">
            {reviews.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <h2 className=" font-semibold text-sm flex items-center gap-1">
                  <FaUserCircle />
                  {item.userName}
                </h2>
                <div className="flex items-start">
                  <Stars rating={item.rating} hoverDisable={false} />
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
