import React from "react";
import data from "./data";

function Card() {
  return (
    <>
      {data.map((d) => {
        return (
          <div className="flex justify-center m-1 max-w-xs">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img className="rounded-t-lg" src={d.images[0].src} alt="" />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  ${d.sale_price}
                </h5>
                <p className="text-gray-700 text-base mb-4">{d.name}</p>
                <button
                  type="button"
                  className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  ADD
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;
