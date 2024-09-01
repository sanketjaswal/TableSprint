import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
// import { Home } from "./Pages/Home";
// import { Category } from "./Pages/Category";
// import { SubCategory } from "./Pages/SubCategory";
// import { Products } from "./Pages/Products";
import { Login } from "Pages/Login";

function App() {
  return (
    <>
      <Login />
      <Layout />
    </>
  );
}

export default App;
