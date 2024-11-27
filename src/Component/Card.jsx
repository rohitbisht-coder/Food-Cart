import "bootstrap/dist/css/bootstrap.min.css";
import Cardsdata from "./Carddetails";
import { addCart } from "../Store/slice/CartData";
import "./Card.css";
import { useDispatch } from "react-redux"; 
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Card = () => {
  let Dispatch = useDispatch();
  const fn = (e) => {
    Dispatch(addCart(e));
    toast('Item Added To Cart ! ✅', {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "dark",
      });
  };
  return (
    <>
      <div className="container">
        {Cardsdata.map((val, id) => {
          return (
            <div
              className="card"
              style={{ width: "18rem", marginTop: "70px" }}
              key={id}
            >
              <img
                src={val.imgdata}
                className="card-img-top food_img"
                alt="food"
              />
              <div className="card-body">
                <h5 className="card-title">{val.rname}</h5>
                <p className="card-text">Price:₹{val.price}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{val.address}</li>
                <li className="list-group-item">⭐{val.rating}</li>
                <li className="list-group-item">
                  <img src={val.arrimg} className="arrow_img" alt="" />
                  {val.somedata}
                </li>
              </ul>
              <div className="card-body">
                <button
                  type="button"
                  className="btn btn-dark add_btn"
                  onClick={() => {
                    fn(val)
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <ToastContainer/>
    </>
  );
};

export default Card;
