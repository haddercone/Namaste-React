import React  from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'))


/**
 * Application design
 * 
 * Layout:
 *  - head
 *   - search
 *   - logo
 *   - menu
 * 
 *  - body
 *   - restauants
 *   
 *  - footer
 * 
 */
const Title = () => (
    <img
      className="logo"
      alt="logo"
      src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
    />
  );

const Head = () => {
    return (
        <div className="head">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}
const RestaurantCard = ( 
    name,
    cloudinaryImageId,
    area,
    cuisines,
    lastMileTravel,
    costForTwoString,
    address,
    avgRating,) => {
    
        

}   
const Body =() => {
    return (
        <>
            
        </>
    );
}
const AppLayout = () => {
    return (
        <>
            <Head />
            <Body />
        </>
    );
}

root.render(<AppLayout />)