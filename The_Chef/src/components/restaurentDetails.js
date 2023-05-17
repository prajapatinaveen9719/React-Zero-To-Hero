import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {swiggy_menu_api_URL} from './config'




const RestaurentDetailComponent = () => {
  const { ...param } = useParams();

  useEffect(() => {
    getRestaurentdetails();
  }, []);

  async function getRestaurentdetails(){
    const data= await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6351575&lng=77.32831449999999&submitAction=ENTER&restaurantId=116059');
   const json=await data.json()


}

  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <h1>First Block {param.id}</h1>
        </div>
        <div className="col-md-6">
          <h1>Second Block</h1>
        </div>
      </div>
    </>
  );
};

export default RestaurentDetailComponent;
