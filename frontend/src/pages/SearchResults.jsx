import { useContext } from "react";
import { GlobalContext } from "../context/Context";
import Nav from "../components/Nav";
import Card from "../components/Card";
import nsrf from "../assets/nsrf.jpg";
import { FaSearch } from "react-icons/fa";
export default function SearchResults() {
  const { data } = useContext(GlobalContext);
  console.log(data);
  return (
    <main className="w-full">
      <Nav />
      {data && data.length < 1 ? (
        <section className="mt-20 flex items-center justify-center py-6 flex-col-reverse">
          <h1 className="text-3xl font-extrabold text-orange-600">
            No Search results found
          </h1>
          <img className="w-[400px]" src={nsrf} alt="" />
        </section>
      ) : (
        <section className="py-30 max-w-7xl mx-auto  flex mt-32 flex-col gap-2 px-10 mb-10">
          <h1 className="text-3xl mb-4 font-bold flex items-center justify-start gap-2">
            Search Results <FaSearch />
          </h1>
          <div className="flex flex-wrap gap-2">
            {data.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
