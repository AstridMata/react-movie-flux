import React, {useContext} from 'react';
import { Context } from "../store/appContext";
import { Link} from "react-router-dom";


const CardMovies = (props) => {

  const {actions} = useContext(Context);
  
    return (
      <div
        className="card p-0 m-2 bg-transparent border-0 shadow-lg gray"
        style={{ width: "13rem" }}
      >
        <img src={"https://image.tmdb.org/t/p/original/" + props.image} />
        <div className="card-body">
          <Link
            to={"/movies/" + props.id}
            className="link-danger"
            style={{ textDecoration: "none" }}
          >
            <button type="button" className="btn btn-outline-warning me-5">More</button>
          </Link>
          <button type="button" className="btn btn-outline-danger ms-3" onClick={() => {
								actions.addFav(props.title);
							}}>+</button>
        </div>
      </div>
    );
}
 
export default CardMovies;