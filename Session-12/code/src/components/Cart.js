import { useSelector, useDispatch } from "react-redux";
import { IMAGE_CDN_URL } from "../config";
import { addItem, removeItem, clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const remove = (item) => {
    dispatch(removeItem(item));
  };
  // console.log(cartItems);
  return (
    <>
      <div className="my-5 w-4/5 m-auto">
        <p className="font-bold text-2xl">
          Your Cart: {cartItems.length} items
        </p>{" "}
        <hr className="my-1 border-gray-700" />
        <button
          disabled={cartItems.length > 0 ? false : true}
          className="bg-red-700 px-3 py-2 text-white font-bold"
          onClick={() => dispatch(clearCart())}
        >
          Clear cart
        </button>
        <div className="flex flex-wrap">
          {cartItems.map((item) => {
            return (
              <div key={item?.id} className="m-3">
                <img
                  className="md:w-56"
                  src={IMAGE_CDN_URL + item?.cloudinaryImageId}
                />
                <p className="my-2 font-bold">{item?.name}</p>

                <div className="flex justify-between">
                  Rs. {item?.price / 100}{" "}
                  <button onClick={() => remove(item)}>Remove</button>{" "}
                </div>
              </div>
            );
          })}
        </div>
        <p className="font-bold text-2xl">
          Total price:{" "}
          {cartItems.length &&
            cartItems
              .map((item) => Math.floor(item?.price / 100))
              .reduce((acc, curr) => acc + curr)}
        </p>
      </div>
    </>
  );
};

export default Cart;
