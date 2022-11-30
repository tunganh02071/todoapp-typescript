// libararys
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components
import HomePage from "./components/pages/HomePage/HomePage";
import PageCouter from "./components/pages/PageCouter/PageCouter";
import ProductListPage from "./components/pages/ProductPage/ProductsPage";

// styles
import "./global.scss";
import { RoutePath } from "./types";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path={RoutePath.Home} element={<HomePage />} />
          <Route path={RoutePath.Product} element={<ProductListPage />} />
          <Route path={RoutePath.Couter} element={<PageCouter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
