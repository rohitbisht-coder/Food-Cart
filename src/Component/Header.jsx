import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Header = () => {
  const curData = useSelector((state) => state.data);
  return (
    <nav className="navbar bg-dark fixed-top">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand text-white">
          Home
        </NavLink>
        <NavLink
          to="CartItem"
          className="me-5 text-white p-0"
          style={{ border: "none", background: "transparent" }}
        >
          <i className="bi bi-cart4" style={{ fontSize: "30px" }}>
            {" "}
            <span
              className="position-absolute  start-14 translate-middle badge rounded-pill bg-danger"
              style={{ fontSize: "10px", top: "20px" }}
            >
              {curData.length}
            </span>
          </i>
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
