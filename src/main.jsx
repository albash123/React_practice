/* eslint-disable react-refresh/only-export-components */
import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const myBooks = [
  {
    id: 1,
    name: "Books1",
    price: 20.999,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/91ZVf3kNrcL._AC_UL254_SR254,254_.jpg",
  },
  {
    id: 2,
    name: "Books2",
    price: 20.999,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/91ZVf3kNrcL._AC_UL254_SR254,254_.jpg",
  },
  {
    id: 3,
    name: "Books3",
    price: 20.999,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/91ZVf3kNrcL._AC_UL254_SR254,254_.jpg",
  },
];
const Booklist = () => {
  return (
    <div className="Book-list">
      {myBooks.map((item) => (
        <Book key={item.id} {...item} />
      ))}
    </div>
  );
};

const Book = ({ image, name, price }) => {
  return (
    <div className="book">
      <img src={image} alt={name} style={{ width: "200px", height: "200px" }} />
      <h1>{name}</h1>
      <h4>${price.toFixed(2)}</h4>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
