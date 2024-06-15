import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import banner from "../assets/banner.jpg";
import { CiSearch } from "react-icons/ci";
import SearchBy from "../components/SearchBy";
import Nav from "../components/Nav";
import axios from "axios";
import { GlobalContext } from "../context/Context";

export default function Homepage() {
  const [placeholder, setPlaceholder] = useState("name of the city");
  const [value, setValue] = useState("City");
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const { setData } = useContext(GlobalContext);
  const navigate = useNavigate();
  const handleSearch = async () => {
    const main = "https://api.openbrewerydb.org/v1/breweries";
    const by = "?by_" + value.toLowerCase() + "=" + search + "&per_page=10";
    const url = main + by;
    console.log(url);
    const { data } = await axios.get(url);
    console.log(data);
    if (data) {
      setData(data);
      navigate("/search/results");
    }
  };
  if (localStorage.getItem("token") === null) {
    navigate("/login");
  }

  return (
    <main className="">
      <Nav />
      <div className="relative flex justify-center items-center">
        <img className="w-full h-[100vh]" src={banner} alt="" />
        <div className="absolute top-[30%] flex items-center justify-center gap-4">
          <SearchBy
            open={open}
            setOpen={setOpen}
            value={value}
            setValue={setValue}
            setPlaceholder={setPlaceholder}
          />
          <div className="flex items-center justify-center bg-slate-700 text-xl font-bold w-[340px] px-6 py-2 rounded-lg ">
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder={`Enter the ${placeholder}`}
              className="border-none bg-transparent placeholder:text-white flex-1 outline-none text-white px-1"
            />
            <p className="text-white">
              <CiSearch />
            </p>
          </div>
          <button
            className="flex items-center justify-center bg-orange-600 text-white text-xl font-bold px-6 py-2 rounded-lg "
            onClick={() => {
              handleSearch();
            }}
          >
            Search
          </button>
        </div>
      </div>
    </main>
  );
}
