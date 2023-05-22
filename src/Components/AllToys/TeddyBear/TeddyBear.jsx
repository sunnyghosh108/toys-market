import React from 'react';
import {  useLoaderData } from 'react-router-dom';
import './TeddyBear.css';
const TeddyBear = ({toys,setToys,toy}) => {

    

    const teddyBear =useLoaderData();
    const {_id,name,photo,details,price,quantity,ratings,seller,available}=toy;
    return (
        <div className="job col-md-12 col-sm-12 col-lg-6 ">
        <div className="row d-flex justify-content-center align-items-center single-card">
          <div className="col-md-4">
            <img
              className="w-100"
              src="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className="col-md-8 card-right">
            <h2>{name}</h2>
            <p>{details}</p>
            <div className="all-skils d-flex  flex-wrap justify-content-around align-items-center">
              {skills?.map((skill) => (
                <button className="bg-dark text-white p-1">{skill?.value}</button>
              ))}
            </div>
            <div className="card-footer text-start p-4 mt-3 d-flex justify-content-between ">
              <div className="div">salary: {salary} BDT</div>
              <div>Deadline: {deadline}</div>
            </div>
            <div className="d-flex justify-content-around">
              <p>vacancy:{vacancy}</p>
              <p>Category: {category}</p>
            </div>
            <div className="text-end">
              <button>
                Apply <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default TeddyBear;