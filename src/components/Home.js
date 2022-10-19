import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex justify-center mt-5">
      <div className="p-2 mr-4 pt-24 left-container">
        <h1 className="text-3xl mb-4">Welcome To The Bookstore</h1>
        <h1 className="leading-9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </h1>
      </div>
      <div className="right-container">
        <Link to={`/item/8`}>
          <img
            src="https://images.gr-assets.com/books/1328559506l/13335037.jpg"
            className="shadow-lg hover:shadow-2xl home-image"
          />
        </Link>
        <h1 className="text-center text-xl mt-3">By Veronica Roth</h1>
      </div>
    </div>
  );
}

export default Home;
