import { restaurantList } from "./config"
import RestaurentCardComponent from "./RestaurentCard";

const BodyComponent = () => {
    return (
      <>
        {restaurantList.map((restaurant) => {
          return <RestaurentCardComponent {...restaurant.data} />;
        })}
      </>
    );
  };

  export default BodyComponent;