import React, { useState } from "react";
import "../styles/style.css"
const Header = () => {

   const[logBtn, SetLogBtn] = useState("login")

   const HandleLogBtn = ()=>{
    logBtn === "login"? SetLogBtn("logout"): SetLogBtn("login")
   }
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
              <li>home</li>
              <li>contact</li>
              <li>card</li>
              <li>about</li>
              <button className="cta" onClick={()=>{HandleLogBtn()}}>{logBtn}</button>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
