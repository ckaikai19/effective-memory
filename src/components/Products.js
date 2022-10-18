import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import bookData from '../data.json'

function Products() {

  return (
    <div className="flex justify-center mt-4">
      <div className="cont flex flex-wrap">
        {bookData
          ? bookData.map((book) => (
              <Link key={book.id} to={`/item/${book.id}`}>
                <img
                  src={book.image_url}
                  className="book m-4 shadow-lg hover:shadow-2xl w-70 rounded-md cursor-pointer"
                />
              </Link>
            ))
          : null}
      </div>
    </div>
  );
}

export default Products;
