import React, { useState, useEffect } from "react";
import "../styles/style.css";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
const Body = () => {
  const [resData, setResData] = useState([]);
  const [filterRes, setFilterRes] = useState([]);
  const [sform, setSform] = useState("");

  const Handlefilter = (e) => {
    e.preventDefault(); 
    let filteredList = resData.filter((item) => {
      return item.info.name.toLowerCase().includes(sform.toLowerCase());
    });
    setFilterRes(filteredList)
    setSform("")

  };
  const Handleform = (e) => {
    setSform(e.target.value);
  };
  const topRate = () => {
    const filterList = resData.filter((res) => res.info.avgRating > 4.2);
    setFilterRes(filterList);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants =
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      console.log(restaurants)
    setResData(restaurants);
    setFilterRes(restaurants);
  };
  

   return filterRes.length === 0 ? <Shimmer /> : (
    <div className="res_wrapper">
      <div className="container">
        <div className="top_bar">
          <button onClick={() => topRate()} className="cta">
            top raeted restaurant
          </button>
          <div className="search_bar">
            <form>
              <input
                type="text"
                placeholder="search"
                onChange={Handleform}
                value={sform}
              ></input>
              <button className="cta" onClick={(e) => Handlefilter(e)}>
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="row">
          {filterRes.map((res) => {
            return <RestrauntCard {...res.info} key={res.info.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
