import React, { useState, useEffect } from "react";
import "../index.css";
import { useParams } from "react-router-dom";
import bookData from "../data.json";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cart";

function Items() {
  const [book, setBook] = useState(null);
  const [quantity, setQuantity] = useState(1);
  let { id } = useParams();

  const { value } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    for (let i = 1; i <= bookData.length; i++) {
      if (i === parseInt(id)) {
        setBook(bookData[i - 1]);
      }
    }
  }, []);

  function addCart() {
    let bookCopy = {
      id: book.id,
      title: book.title,
      description: book.description,
      image_url: book.image_url,
      price: parseFloat((book.Price * quantity).toFixed(2)),
      quantity: quantity,
    };

    dispatch(addToCart(bookCopy));
  }

  return (
    <>
      {book ? (
        <div key={book.id} className="flex mt-5 justify-center">
          <div className="p-5 w-6/12 rounded bg-gray-300 shadow-lg">
            <h1 className="text-2xl mb-2">{book.title}</h1>
            <h1 className="text-ml mb-2">By {book.authors}</h1>
            <h1 className="leading-10">{book.description}</h1>
          </div>
          <div className="p-2 ml-8">
            <img
              src={book.image_url}
              className=" shadow-lg w-75 rounded-md cursor-pointer cover"
            />
            <div className="mt-5 mb-5 w-64">
              <h1 className="text-2xl">Price: ${book.Price}</h1>
              <h1 className="text-2xl">
                Quantity:
                <input
                  type="number"
                  className=" bg-gray-200 outline w-20 rounded ml-2 pl-2"
                  value={quantity}
                  onChange={(value) =>
                    setQuantity(parseInt(value.target.value))
                  }
                />
              </h1>
            </div>
            <button
              onClick={() => addCart()}
              className="shadow-lg hover:shadow-xl bg-gray-300 w-full p-2 rounded-md text-xl"
            >
              Add To Cart
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Items;
