import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { swiggy_menu_api_URL } from "./config";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurentDetailComponent = () => {
  const [restaurentMenuList, setRestaurentmenuList] = useState([]);
  const dispatch=useDispatch()

  const { id } = useParams();

  useEffect(() => {
    getRestaurentdetails();
  }, []);

  async function getRestaurentdetails() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6351575&lng=77.32831449999999&submitAction=ENTER&restaurantId=" +
        id
    );
    const json = await data.json();
    console.log(json);

    setRestaurentmenuList(
      //json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        .card.carousel
    );
  }

  function addMenuItem(item) {
    dispatch(addItem(item))
  }

  if (!restaurentMenuList || restaurentMenuList.length === 0) {
    return (
      <>
        <h1>Shimmer Effect......</h1>
      </>
    );
  }

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2">
        {restaurentMenuList.map((item) => (
          <div
            className="card restaurentCard"
            style={{ width: "18rem" }}
            key={item.dish.info.id}
          >
            <h3>{item.dish.info.name}</h3>
            <img
              src={
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                item.dish.info.imageId
              }
              className="card-img-top"
              alt="..."
            />
            <h3>Price : {item.dish.info.price / 100}</h3>
            <button
              onClick={() => {
                addMenuItem(item);
              }}
            >
              Add Item
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default RestaurentDetailComponent;
