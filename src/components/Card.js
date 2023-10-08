import React from "react";
import { BsFillBagFill } from "react-icons/bs";

const Card = ({ img, title, star, reviews, price, category, size, in_stock }) => {
  // Define a fixed width and height for the images
  const imageStyle = {
    width: "200px", // Adjust the width as needed
    height: "200px", // Adjust the height as needed
  };

  // Define styles for the category and stock status
  const categoryStyle = {
    backgroundColor: "white",
    borderRadius: "10px",
    border: "1px solid #ccc",
    padding: "5px 10px",
    display: "inline-block",
    marginRight: "5px",
    marginBottom: "5px",
    fontSize: "12px"
  };

  const stockStyle = {
    borderRadius: "10px",
    padding: "5px",
    display: "inline-block",
    color: "white",
    fontWeight: "bold",
    textTransform: "capitalize",
    backgroundColor: in_stock ? "green" : "red",
    fontSize: "12px",
    marginLeft: "50px",
  };

  return (
    <section className="card">
      <img src={img} alt={title} className="card-img" style={imageStyle} />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          {star} {star} {star} {star}
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">Ksh {price}</div>
          <div className="size">Size: {size}</div>
        </section>
        <br></br>
        <div className="category" style={categoryStyle}>
          {category}
        </div>
        <div className="stock" style={stockStyle}>
          {in_stock ? "Available" : "Out of Stock"}
        </div>
        <div className="bag">
          <BsFillBagFill className="bag-icon" />
        </div>
      </div>
    </section>
  );
};

export default Card;
