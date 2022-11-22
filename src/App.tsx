import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import ProductListPage from "./components/pages/ProductPage/ProductsPage";
import "./global.scss";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product" element={<ProductListPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
