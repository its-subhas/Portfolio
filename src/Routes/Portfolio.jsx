import Navbar from "../Components/Navbar";
import ScrollToTop from "../Components/ScrollToTop";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import DataContextProvider from "../Store/DataContextProvider";
import { Analytics } from "@vercel/analytics/react";

const Portfolio = () => {
  return (
    <DataContextProvider>
      <div className="mainContainer">
        <Navbar />
        <ScrollToTop />
        <Outlet />
        <Footer />
      </div>
      <Analytics />
    </DataContextProvider>
  );
};

export default Portfolio;
