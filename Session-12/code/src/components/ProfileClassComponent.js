import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: "",
      },
    };
    // console.log("Child constructore " + this.props.name);
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/haddercone");
    const json = await data.json();
    // console.log(json);
    this.setState({
      userInfo: json,
    });
    // this.timer = setInterval(() => {
    //   console.log("componentDidMount");
    // }, 1000);
    // console.log("Child  componentDidMount " + this.props.name);
  }
  componentDidUpdate() {
    // console.log("Child componentDidUpdate " + this.props.name);
  }
  componentWillUnmount() {
    // clearInterval(this.timer);
    console.log("componentWillUnmount");
  }
  render() {
    // console.log(count);
    const { name, location, avatar_url } = this.state?.userInfo;
    return (
      <div>
        {/* {console.log("Child render " + this.props.name)} */}
        {/* <h1>Profile Class Component</h1> */}
        <h2>Name : {name}</h2>
        {/* <p>Location : {!location ? "Not Provided" : location}</p> */}
        <img src={avatar_url} />

        {/* <button
          onClick={() => {
            this.setState((counter) => ({
              count: counter.count + 1,
            }));
          }}
        >
          Count
        </button> */}
      </div>
    );
  }
}
export default Profile;
