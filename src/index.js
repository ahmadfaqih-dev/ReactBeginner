import React from "react";
import ReactDOM, { render } from "react-dom";
import App from "./App";

//tag name
const element = <h1> Hello </h1>;

// component
const element2 = <App nama="React Apps" />;

// react fregment (dapet membungkus 2 atau lebih element)
const element3 = (
  <>
    <h1> React </h1>
    <h2> Beginner </h2>
    <p> Bismillah belajar react</p>
  </>
);

const domElement = document.getElementById("root");

ReactDOM.render(element2, domElement);
