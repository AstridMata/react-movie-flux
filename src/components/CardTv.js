import { Link} from "react-router-dom";

const CardTv = (props) => {
    console.log(props);
 
    return (
        <div className="card p-0 m-2 bg-transparent border-0 gray" style={{ width: "13rem" }}>
            <img
              src={"https://image.tmdb.org/t/p/original/" + props.image}
            />
            <div className="card-body">
            <Link to={"/shows/" + props.id} className="link-danger" style={{ textDecoration: 'none' }}><h5 className="card-title fs-5 fw-bold">{props.title}</h5></Link>
          </div>
      </div>
    );
}

export default CardTv;