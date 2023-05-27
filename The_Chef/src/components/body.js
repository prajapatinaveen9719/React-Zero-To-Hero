import useOnline from "../utils/useOnline";
import { swiggy_api_URL } from "./config";
import RestaurentCardComponent from "./RestaurentCard";
import { useEffect, useState } from "react";


const BodyComponent = () => {
  const [searchValue, setSearchValue] = useState("");
  const [restaurents, setRestaurents] = useState([]);
  const [filteredRestaurents, setfilteredRestaurents] = useState([]);

 

  useEffect(() => {
    GetRestaurants();
  }, []);

  async function GetRestaurants() {
    let response = await fetch(swiggy_api_URL);
    let apiRestaurentList = await response.json();
    setRestaurents(apiRestaurentList?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaurents(
      apiRestaurentList?.data?.cards[2]?.data?.data?.cards
    );
  }

  function filterRestaurent(searchText) {
    const data = restaurents.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return data;
  }

  const isOnline=useOnline();

  if(!isOnline)
  return <><h1>Please check your internet connection.....</h1></>

  if(restaurents.length==0)
  return <><h1>Shimmer Effect......</h1></>

  return (
    <>
      <div className="container searchBar">
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="form">
              <i className="fa fa-search"></i>
              <input
                type="text"
                className="form-control form-input"
                placeholder="Search anything..."
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
              />

              <span className="left-pan">
                <i className="fa fa-microphone"></i>
              </span>
              <button
                onClick={() => {
                  const filtredRestaurentList = filterRestaurent(searchValue);
                  setfilteredRestaurents(filtredRestaurentList);
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      {filteredRestaurents.map((restaurant) => {
        return (
          <RestaurentCardComponent
            {...restaurant.data}
            key={restaurant.data.id}
          />
        );
      })}
    </>
  );
};

export default BodyComponent;
