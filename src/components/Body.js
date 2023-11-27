import React, { useState, useEffect } from "react";
import "../styles/style.css";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json.data.cards[2].card.card.gridElements);
    const restaurants =json?.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants;
      // console.log(restaurants)
    setResData(restaurants);
    setFilterRes(restaurants);
  };
  
   const onlineStatus = useOnlineStatus()
    
   if(onlineStatus === false) return <h1>you are offline check your internet connection!!!!</h1>
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
            return <div className="cards"><Link to={"/restraunts/"+res.info.id}>
              <RestrauntCard {...res.info} key={res.info.id} /></Link> </div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
