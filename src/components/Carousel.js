import React, { useContext } from 'react';
import { Context } from "../store/appContext";

const Carousel = () => {
  const { store } = useContext(Context);

  return (
    <div id="carouselExampleCaptions" className="carousel slide border-0 position-relative pe-0"
      data-bs-ride="carousel">
      {store.home?.map((item, index) =>  
        index === 0 ? 
          <div className="carousel-item active">
            <img
              src={
                "https://image.tmdb.org/t/p/original" + item.backdrop_path
              }
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
                <h1 style={{ fontSize: "5rem" }}>WELCOME</h1>
                <p>Many options to enjoy</p>
              </div>
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
         : 
          <div className="carousel-item">
            <img
              src={
                "https://image.tmdb.org/t/p/original" + item.backdrop_path
              }
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
                <h1 style={{ fontSize: "5rem" }}>WELCOME</h1>
                <p>Many options to enjoy</p>
              </div>
            
                </div>
        
      )}
      <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button> 
    </div>
  );
}

export default Carousel;

