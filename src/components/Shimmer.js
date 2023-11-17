import React from "react";
import "../styles/style.css";
const Shimmer = () => {
    let count = 20
  return (
    <section className="shimmer_sec">
      <div className="container">
      <div className="shimmer_wrapper">
      {[...Array(count)].map((_, index) => (
         <div className="shimmer_box" key={index}>
         <div className="head_skull"></div>
         <div className="content_skull"></div>
        </div>
        ))}
        </div>
        </div>
      
    </section>
  );
};

export default Shimmer;
