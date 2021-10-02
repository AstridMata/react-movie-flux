import { Context } from "../store/appContext";
import React, { useContext } from "react";
import CardMovies from "../components/CardMovies";

const Movies = () => {

    const { store } = useContext(Context);
    console.log(store.movies);
    return (
        <div className="container-fluid kenburns-top">
            <div className="d-flex ms-5 ps-5">
                <div className="row">
                    {store.movies.map((item) => <div key={item.id} className="col-sm-6">
                        <CardMovies
                            title={item.original_title}
                            image={item.poster_path}
                            id={item.id} />
                    </div>)}
                </div>
            </div>
        </div>
    );
}

export default Movies;