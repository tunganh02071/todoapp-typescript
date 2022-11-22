/* eslint-disable react/button-has-type */
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="a">
      <h1>Reikei Software</h1>
      <button onClick={() => navigate("/product")}>Product Manage</button>
    </div>
  );
}

export default HomePage;
