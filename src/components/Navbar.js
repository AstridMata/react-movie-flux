import React,  {useContext} from 'react';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Navbar = () => {
  
  const { store, actions } = useContext(Context);

  return (

    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <div className="container-fluid">
      <Link className="navbar-brand" to="/">What do you see today?</Link>
      <button className="navbar-toggler" type ="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#">
    <img src="https://cdn5.vectorstock.com/i/thumb-large/27/19/black-cat-popcorn-box-cute-cartoon-funny-vector-34092719.jpg" style={{width:`3rem`},{height:`3rem`}}></img>
  </a>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
      <li className="nav-item">
      <Link className="nav-link active" aria-current="page" to="/Movies">Movies</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/Tv">Tv</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/People">People</Link>
      </li>
      </ul>
      <div className="dropdown dropleft">
      <button
      className="btn dropdown-toggle btn-outline-info"
      type="button"
      id="dropdownMenuButton"
      role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Favoritos
      </button>
      
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    {store.favoritos.map((item, index) => {
      return (
        <div key={index}>
      <Link className="dropdown-item" to="/">
    {item}
    </Link>
      <button
      className="btn"
      onClick={() => actions.removFav(item)}></button>
      </div>
    );
    })}
      </div>
      </div>
      </div>
      </div>

    </nav>
  );
}

export default Navbar;

