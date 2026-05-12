import Navbar from "../Components/Navbar";
import ScrollToTop from "../Components/ScrollToTop";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import DataContextProvider from "../Store/DataContextProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

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
      <SpeedInsights />
    </DataContextProvider>
  );
};

export default Portfolio;
