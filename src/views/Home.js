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
          <h3 style={{textAlign: 'center', marginTop: "4rem",}}>Up Coming</h3>
            <UpComing/>
          </div>
          <div>
          <h3 style={{textAlign: 'center', marginTop: "4rem",}}>Trending</h3>
          
            <Trending/>
          </div>
        </>
     );
}
 
export default Home; 