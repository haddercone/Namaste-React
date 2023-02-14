import { useSelector, useDispatch } from "react-redux";
import { IMAGE_CDN_URL } from "../config";
import { incrementItem, decrementItem, clearCart } from "../utils/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  return (
    <>
      <div className="my-5 md:w-4/5 md:m-auto ">
        <p className="font-bold text-2xl">Your Cart</p>{" "}
        <hr className="my-1 border-gray-700" />
        {cartItems.length < 1 ? null : (
          <button
            disabled={cartItems.length > 0 ? false : true}
            className="mt-2 border-2 border-red-700 px-3 py-2 text-red-700 font-bold"
            onClick={() => dispatch(clearCart())}
          >
            Clear cart
          </button>
        )}
        <div className="flex flex-col md:w-2/3 justify-center w-full m-auto">
          {cartItems.map((item) => {
            return (
              <div
                key={item?.id}
                className="m-3 ml-0 shadow-md  p-2 md:w-2/3 gap-5  flex justify-between  flex-col md:flex-row "
              >
                <img
                  className="md:w-20"
                  src={IMAGE_CDN_URL + item?.cloudinaryImageId}
                />
                <div>
                  <p className="my-2 font-bold">{item?.name}</p>

                  <p className="font-bold mb-2">Rs. {item?.price / 100} </p>
                </div>
                <div>
                  <button
                    className="text-white btn px-3 py-1 bg-gray-900 mr-2"
                    onClick={() => dispatch(decrementItem(item))}
                  >
                    -
                  </button>
                  {item.itemCount}
                  <button
                    className="text-white btn px-3 py-1 bg-gray-900 ml-2"
                    onClick={() => dispatch(incrementItem(item))}
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {cartItems.length == 0 ? null : (
          <div className="text-left w-4/5">
            <p className="font-bold text-2xl">
              Total price: Rs.{" "}
              {cartItems.length &&
                cartItems
                  .map((item) =>
                    Math.floor((item.itemCount * item?.price) / 100)
                  )
                  .reduce((acc, curr) => acc + curr, 0)}
            </p>
            <button className="p-2   bg-gray-900 text-white mt-2">
              Checkout&nbsp;&nbsp;&nbsp;
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
