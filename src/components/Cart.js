import React from "react";
import "../index.css";
import cover from "../cover.jpg";
import { TiDelete } from "react-icons/ti";

function Cart() {
  return (
    <div>
      <div className="flex justify-center mt-4 mb-4">
        <div className="bg-gray-200 p-4 shadow-lg flex outlin">
          <img src={cover} className="w-40 h-48 img" />
          <div className="pl-3 h-48 overflow-hidden pr-3">
            <h1 className="text-xl">The Cather In The Rye</h1>
            <h1 className="leading-8 bg-gray-300 mt-2 rounded p-4 text">
              The Catcher in the Rye is an American novel by J. D. Salinger that
              was partially published in serial form from 1945–46 before being
              novelized in 1951. Originally intended for adults, it is often
              read by adolescents for its themes of angst and alienation, and as
              a critique of superficiality in society.[4][5] The novel also
              deals with complex issues of innocence, identity, belonging, loss,
              connection, sex, and depression. The main character, Holden
              Caulfield, has become an icon for teenage rebellion.[6] Caulfield,
              nearly of age, gives his opinion on just about everything as he
              narrates his recent life events. The Catcher has been translated
              widely.[7] About one million copies are sold each year, with total
              sales of more than 65 million books.[8] The novel was included on
              Time's 2005 list of the 100 best English-language novels written
              since 1923,[9] and it was named by Modern Library and its readers
              as one of the 100 best English-language novels of the 20th
              century.[10][11][12] In 2003, it was listed at number 15 on the
              BBC's survey "The Big Read".
            </h1>
          </div>
          <div className="end">
            <div className="flex justify-end">
              <TiDelete className="exit text-5xl relative cursor-pointer" />
            </div>
            <h1 className="text-2xl mt-4 mb-1">Price: $0,000.00</h1>
            <h1 className="text-2xl">Quantity: 1</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="p-2 flex justify-end end-cont">
          <h1 className=" bg-gray-200 text-xl mr-2 price">Total Price:</h1>
          <h1 className="w-32 rounded p-4 text-xl">$0,000.00</h1>
        </div>
      </div>
    </div>
  );
}

export default Cart;
