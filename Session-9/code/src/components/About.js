// import { Outlet } from "react-router-dom";
import ProfileFunctionComponent from "./Profile";
import Profile from "./ProfileClassComponent";
import { Component } from "react";

// const About = () => {
//   return (
//     <>
//       <p>About page</p>
//       <ProfileFunctionComponent name={"Robin from function component"} />
//       <Profile name={"Robin from class component"} />
//       {/* <Outlet /> */}
//     </>
//   );
// };

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor");
  }
  componentDidMount() {
    // Best place to make API call beacuse it runs after
    // first render to load the data
    // console.log("Parent componentDidMount");
  }
  render() {
    return (
      <>
        {/* {console.log("Parent render")} */}
        <h1>About Me</h1>
        {/* <ProfileFunctionComponent name={"Robin from function component"} /> */}
        <Profile name={"First Child "} />
        {/* <Profile name={"Second Child "} /> */}
      </>
    );
  }
}

/**
 * React life cycle sequense for the above components:
 *                        ====|
 * 1.Parent constructor         |
 * 2.Parent render              |
 *    3.First child constructor |  ==> Render phase
 *    4.First child render      |
 *    5.Second constructor      |
 *    6.Second render           |
 *                        ====|
 *
 *    [ DOM IS UPDATED FOR THE CHILDREN ]
 *                                   ===|
 *    7.First Child ComponentDidMount     |
 *    8.Second Child ComponentDidMount    |  ==> Commit phase
 * 9.Parent ComponentDidMount             |
 *                                   ===|
 */
export default About;
