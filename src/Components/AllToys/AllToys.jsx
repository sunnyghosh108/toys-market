import React, { useEffect, useState } from 'react';

//import { FaArrowRight } from "react-icons/fa";
import TeddyBear from './TeddyBear';




const AllToys = () => {
  
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("remote");

  useEffect(() => {
    fetch(`/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
 
    return (
          <div>
      <h1 className="title text-center mt-5 p-5">All Toys category</h1>
      <div className="tab-container text-center">
        <div className="text-center w-100 m-auto">
          <div className="tabs d-flex justify-content-center align-items-center">
            <div
              onClick={() => handleTabClick("remote")}
              className={`tab  tab2 remote ${
                activeTab == "remote" ? " bg-danger text-white" : ""
              }`}
            >
              Teddy Bear
            </div>
            <div
              onClick={() => handleTabClick("offline")}
              className={`tab  tab2 Offline ${
                activeTab == "offline" ? " bg-danger text-white" : ""
              }`}
            >
             Dinsaour toys
            </div>
            <div
              onClick={() => handleTabClick("offline")}
              className={`tab  tab2 Offline ${
                activeTab == "offline" ? " bg-danger text-white" : ""
              }`}
            >
             Unicorn toys
            </div>
          </div>
        </div>
      </div>
      <div className="jobs-container mt-5 row">
        {toys?.map((toy) => (
          <TeddyBear toy={toy}></TeddyBear>
        ))}
      </div>
    </div>
    );
};

export default AllToys;