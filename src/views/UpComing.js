import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, {useContext} from 'react';
import { Context } from "../store/appContext";


const Upcoming = () => {

  const {store, actions} = useContext(Context);

  const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  // console.log(store.upcoming);
    return ( 
      <Slider {...config}>
      {store.upcoming.map((x, i) => {
        return <div className="card text-white border-0">
        <img
          src={"https://image.tmdb.org/t/p/original" + x.poster_path}
          className="card-img"
          alt="..."
        />
        <div className="card-img-overlay d-flex justify-content-start align-items-end">
        
        </div>
      </div>
      })}
    </Slider>
     )
};
 
export default Upcoming; 