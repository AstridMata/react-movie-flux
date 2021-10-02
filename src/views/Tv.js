import React, {useContext} from "react";
import { Context } from "../store/appContext";
import CardShows from "../components/CardMovies";

const Tv = () => {

    const {store} = useContext(Context);
    // console.log(store.tv);
    return (
      <div>
        <div className="container-fluid foto d-flex">
          <div className="ms-5 ps-5">
            <div className="row">
              {store.tv.map((item) => (
                <CardShows
                  key={item.id}
                  title={item.original_name}
                  image={item.poster_path}
                  vote={item.vote_average}
                  date={item.first_air_date}
                  id={item.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Tv;