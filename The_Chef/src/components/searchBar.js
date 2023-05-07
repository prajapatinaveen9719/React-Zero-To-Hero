import { useState } from "react";
import { restaurantList } from "./config";

const SearchBarComponent = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchRestaurent, setSearchRestaurent] = useState("");

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
                setSearchRestaurent(filtredRestaurentList);
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

function filterRestaurent(searchText) {
  restaurantList.filter(() => {
    return (restaurantList.data.name = searchText);
  });
}

export default SearchBarComponent;
