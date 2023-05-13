import {useParams} from "react-router-dom"

const RestaurentDetailComponent = () => {
    const {id}=useParams();
    console.log(id);
    const {...param}=useParams();
    //console.log(param);
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <h1>First Block {param.id}</h1>
        </div>
        <div className="col-md-6">
          <h1>Second Block{id}</h1>
        </div>
      </div>
    </>
  );
};

export default RestaurentDetailComponent;
