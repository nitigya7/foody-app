import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import "../styles/style.css"
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {

   const[logBtn, SetLogBtn] = useState("login")
   const onlineStatus = useOnlineStatus()
   const {logdin} = useContext(UserContext)
   console.log(logdin)
   const HandleLogBtn = ()=>{
    logBtn === "login"? SetLogBtn("logout"): SetLogBtn("login")
   }
  //  by using useSelector we subscribing our store
   const cart = useSelector((store)=> store.cart.items)
  return (
    <header className="site_header">
      <div className="container">
        <div className="header_wrapper">
          <div className="header_logo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9bhreRvbNVmNbk_SgwgfyGVHSt2DNbSY4BE6hmlO86aiWjyQyqFtGsJuYrpUxIG0q_8s&usqp=CAU"
              alt="app_logo"
            />
          </div>
          <div className="header_menu">
            <ul>
              <li>online status: {onlineStatus? <FaCheckCircle style={{color: "green"}}/>: <FaCircleXmark style={{color: "red"}}/>} </li>
              <li><Link to={"/"}>home</Link></li>
              <li>contact</li>
              <li>cart: ({cart.length})</li>
              <li>{logdin}</li>
              <li><Link to="/about">about</Link> </li>
              <li><Link to={"/grocery"}>grocery</Link> </li>
              <button className="cta" onClick={()=>{HandleLogBtn()}}>{logBtn}</button>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
