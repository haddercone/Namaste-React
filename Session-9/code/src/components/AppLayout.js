import Head from "./Head";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Head />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
