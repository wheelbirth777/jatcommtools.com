import logo from "./logo.svg";
import "./App.css";
import data from "./data";

import Carousel2 from "./carousel2";

import axios from "axios";
import { useEffect, useState } from "react";

import { getByTitle } from "@testing-library/react";
import Card from "./card";
import NavBar from "./nav";
import Test from "./test";

function App() {
  return (
    <>
      <div className="my-wrapper">
        <div className="my-navbar">
          <NavBar />
        </div>

        <div className="my-banner">
          <Carousel2 />
        </div>

        <div className="my-container">
          <Card />
        </div>
      </div>
      <div className="h-20 my-footer">
        <h2 className="text-center">
          <Test todo={data} />
        </h2>
      </div>
    </>
  );
}

export default App;
