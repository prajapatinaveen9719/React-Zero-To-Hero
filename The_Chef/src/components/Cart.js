import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <>
      <div>
        <button
          onClick={() => {
            handleClearCart();
          }}
        >
          Clear Cart
        </button>
      </div>
      <div className="row row-cols-1 row-cols-md-2">
        {cartItems.map((item) => (
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
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
