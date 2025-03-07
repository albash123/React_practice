/* eslint-disable react-refresh/only-export-components */
import React from "react";
import ReactDOM from "react-dom/client";

const Booklist = () => {
  return (
    <>
      <Book />
    </>
  );
};

const Book = () => {
  return (
    <>
      <h1>This is book </h1>
      <Image></Image>
    </>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/91ZVf3kNrcL._AC_UL254_SR254,254_.jpg"
      alt="book"
    />
  );
};

// Directly create the root and render
const roots = ReactDOM.createRoot(document.getElementById("root"));
roots.render(<Booklist />);
