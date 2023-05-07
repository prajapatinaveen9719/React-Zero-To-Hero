import { restaurantList } from "./config";
import RestaurentCardComponent from "./RestaurentCard";
import { useState } from "react";

const BodyComponent = () => {
  const [searchValue, setSearchValue] = useState("");
  const [restaurents, setRestaurents] = useState(restaurantList);
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
                  // console.log(e.target.value)
                  setSearchValue(e.target.value);
                }}
              />

              <span className="left-pan">
                <i className="fa fa-microphone"></i>
              </span>
            </div>
            <button
              onClick={() => {
                const filtredRestaurentList = filterRestaurent(searchValue);
                setRestaurents(filtredRestaurentList);
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {restaurents.map((restaurant) => {
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

function filterRestaurent(searchText) {

  const data = restaurantList.filter((restaurant) => 
    restaurant.data.name.includes(searchText)
  );
  return data;
}

export default BodyComponent;
