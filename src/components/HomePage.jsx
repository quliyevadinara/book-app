import React from "react";
import CardBox from "./CardBox"

const HomePage = () => {
  return (
      <> 
    <div className="header">
      <div className="row1">
        {/* <h1>A room without books is like<br/> a body without a soul.</h1> */}
      </div>
      { <div className="row2">
      <h1>A room without books is like<br/> a body without a soul.</h1>
        {/* <h2>Find Your Book</h2>
        <div className="search">
          <input type="text" placeholder="Enter Your Book Name" />
          <button><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <img src="./images/bg2.png" alt="" /> */}
      </div> }
    </div>
      <div className="container">
      <CardBox/>
      <CardBox/>
      <CardBox/>
      <CardBox/>
      <CardBox/>
      <CardBox/>
      <CardBox/>
      <CardBox/>
      </div>
      </>
  );
};

export default HomePage;
