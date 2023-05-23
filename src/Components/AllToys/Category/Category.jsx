import React from "react";

import "./Category.css";



const Category = () => {
  return (
    <div className="main-category-container p-5">
      <h1 className="text-center p-5 text-white category-title">  Toys Category</h1>
      <div className="category-container row ">
        <div className="card">
          <img src="" alt="" />
          
          <p className="text-2xl text-white">Dinosaur</p>
        </div>
        <div className="card">
          
        <p className="text-2xl text-white">Teddy Bear</p>
        </div>
        <div className="card">
          
        <p className="text-2xl text-white">Unicorn</p>
        </div>
       
      </div>
    </div>
  );
};

export default Category;