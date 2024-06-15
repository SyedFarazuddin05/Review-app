import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Homepage from "./pages/Homepage";
import SearchResults from "./pages/SearchResults";
import ShopDetails from "./components/ShopDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search/results" element={<SearchResults />} />
        <Route path="/search/results/:id" element={<ShopDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
