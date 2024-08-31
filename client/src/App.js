import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import { Home } from "./Pages/Home";
import { Category } from "./Pages/Category";
import { SubCategory } from "./Pages/SubCategory";
import { Products } from "./Pages/Products";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/subcategory" element={<SubCategory />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
