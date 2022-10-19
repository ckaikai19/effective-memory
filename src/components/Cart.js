import React, { useState, useEffect } from "react";
import "../index.css";
import empty from "../img/empty.png";
import { TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../features/cart";

function Cart() {
  const [cart, setCart] = useState(null);
  const [price, setPrice] = useState(0);
  const { value, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function deleteItem(book) {
    dispatch(deleteFromCart(book))
  }

  return (
    <div>
      {value.length > 0 ? (
        value.map((book) => (
          <div className="flex justify-center mt-4 mb-4">
            <div className="bg-gray-200 p-4 shadow-lg flex outlin">
              <Link to={`/item/${book.id}`}>
                <img src={book.image_url} className="w-40 h-48 img" />
              </Link>
              <div className="pl-3 h-48 overflow-hidden pr-3">
                <h1 className="text-xl">{book.title}</h1>
                <h1 className="leading-8 bg-gray-300 mt-2 rounded p-4 text">
                  {book.description}
                </h1>
              </div>
              <div className="end">
                <div className="flex justify-end">
                  <TiDelete
                    onClick={() => deleteItem(book)}
                    className="exit text-5xl relative cursor-pointer"
                  />
                </div>
                <h1 className="text-2xl mt-4 mb-1">Price: ${book.price}</h1>
                <h1 className="text-2xl">Quantity: {book.quantity}</h1>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="bord">
          <img src={empty} className="empty" />
        </div>
      )}
      <div className="flex justify-center">
        <div className="p-2 flex justify-end end-cont">
          <h1 className="shadow-lg bg-gray-300 text-xl mr-2 price">Total Price:</h1>
          <h1 className="w-32 rounded p-4 text-xl">
            $ {totalPrice < 0 ? 0 : totalPrice.toFixed(2)}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Cart;
