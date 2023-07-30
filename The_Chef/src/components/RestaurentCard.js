import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";
import { useContext } from "react";


const RestaurentCardComponent = ({cloudinaryImageId,name,cuisines,lastMileTravelString,id}) => {
  const user=useContext(UserContext)
    return (
      <>
        <div className="card restaurentCard" style={{ width: "18rem" }}>
          <img
            src={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
              cloudinaryImageId
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <Link to={"/restaurent/"+id}>
         
            <h5 className="card-title">{name}</h5>
            </Link>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              {cuisines}
              {id}
            </li>
            <li className="list-group-item">
              {lastMileTravelString}
            </li>
            <li className="list-group-item">
              {user.email}
            </li>
          </ul>
        </div>
      </>
    );
  };

  export default RestaurentCardComponent;