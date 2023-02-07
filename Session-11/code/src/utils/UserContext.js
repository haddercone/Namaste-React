import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy user",
    email: "dummyemail@gmail.com",
  },
});

UserContext.displayName = "UserContext";

export default UserContext;
