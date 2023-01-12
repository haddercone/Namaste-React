import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Body from "./components/Body";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <>
      <Head />
      <Body />
      <Footer />
    </>
  );
};

root.render(<AppLayout />);
