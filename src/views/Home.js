import React from "react";
import Carousel from "../components/Carousel";
import Trending from "./Trending";
import UpComing from "./UpComing.js";


const Home = () => {
    return ( 
        <>
        <div className="container-fluid ps-0 pe-0 border-0 row">
            <Carousel/>
          </div>
          <div>
            <h1>Upcoming-Movies</h1>
            <UpComing/>
          </div>
          <div>
            <h2>Trending</h2>
            <Trending/>
          </div>
        </>
     );
}
 
export default Home; 