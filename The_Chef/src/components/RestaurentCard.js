const RestaurentCardComponent = ({cloudinaryImageId,name,cuisines,lastMileTravelString}) => {
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
            <h5 className="card-title">{name}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              {cuisines.join(", ")}
            </li>
            <li className="list-group-item">
              {lastMileTravelString}
            </li>
          </ul>
        </div>
      </>
    );
  };

  export default RestaurentCardComponent;