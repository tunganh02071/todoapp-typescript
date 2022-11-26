// libararys
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components
import ProductListPage from "./components/pages/ProductPage/ProductsPage";

// styles
import "./global.scss";
import { RoutePath } from "./types";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path={RoutePath.Home} element={<ProductListPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
