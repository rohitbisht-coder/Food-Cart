import React, { useEffect, useState } from "react";
import "./CartItem.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removecart, addCart, decQuan } from "../Store/slice/CartData";
const CartItem = () => {
  let dispatch = useDispatch();
  const curData = useSelector((state) => state.data);
  const [price, setprice] = useState(0);
  const total = () => {
    let price = 0;
    curData.map((ele) => {
      price = ele.price * ele.qnty + price;
    });
    setprice(price);
  };
  const fn = (e) => {
    dispatch(removecart(e));
    toast('Item Removed ! ✅', {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "dark",
    });
  };

  const inc = (e) => {
    dispatch(addCart(e));
    toast('Item Added ! ✅', {
      position: "top-left",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "dark",
    });
  };

  const dec = (e) => {
    dispatch(decQuan(e));
    toast('Item Removed ! ✅', {
      position: "top-left",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "dark",
    })
  };

  useEffect(() => {
    total();
  }, [total]);
  return (
    <>
      <div className="bill_section">
        {" "}
        <h1 className="price">Total Bill :₹ {price}</h1>
        <Link to="/" type="button" className="btn btn-danger add">
          Add Now
        </Link>
      </div>
      <div className="full">
        {curData.length < 1 ? (
          <>
            <h1 className="alert">
              😢 Your Cart Is Empty <i className="bi bi-cart-x"></i>
            </h1>
          </>
        ) : (
          curData.map((item, id) => {
            return (
              <div className="card card_2" key={id}>
                <img
                  src={item.imgdata}
                  className="card-img-top cart_food_img"
                  alt="img"
                />
                <div className="card-body ">
                  <h5>{item.rname}</h5>
                  <hr />
                  <p className="card-text">Price : ₹{item.price}</p>
                  <hr />
                  <span style={{ backgroundColor: "green", padding: "2px" }}>
                    ⭐{item.rating}
                  </span>
                  <p className="quantity">
                    <i
                      className="bi bi-dash-circle quantity_btn_remove"
                      onClick={() => {
                        dec(item);
                      }}
                    ></i>
                    {item.qnty}
                    <i
                      className="bi bi-plus-circle quantity_btn"
                      onClick={() => {
                        inc(item);
                      }}
                    ></i>
                  </p>
                  <hr />
                  <button
                    type="button"
                    className="btn btn- "
                    onClick={() => {
                      fn(id);
                    }}
                  >
                    <i className="bi bi-trash3"></i>
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default CartItem;
