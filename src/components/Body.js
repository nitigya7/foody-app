import React, { useState, useEffect } from "react";
import "../styles/style.css";
import RestrauntCard from "./RestrauntCard";
const Body = () => {
  const [resData, setResData] = useState([]);
   const topRate = ()=>{
     const filterList = resData.filter(res=> res.info.avgRating > 4.2)
   setResData(filterList)
   }
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
    setResData(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="res_wrapper">
      <div className="container">
        <button onClick={()=>topRate()}>top raeted restaurant</button>
        <div className="row">
          {resData.map((res) => {
            return <RestrauntCard {...res.info} key={res.info.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
