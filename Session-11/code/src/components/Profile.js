import { useState } from "react";

const Profile = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Profile Function Component</h1>
      <h2>Name: {name}</h2>
      <p>Count : {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>click</button>
    </div>
  );
};
export default Profile;
