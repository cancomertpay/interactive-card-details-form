import React from "react";
import mobileImg from "../assets/images/bg-main-mobile.png";
import desktopImg from "../assets/images/bg-main-desktop.png";

function GradientImg({ mobile }) {
  const responsiveImg = mobile ? mobileImg : desktopImg;
  return (
    <div className={`bg-main ${mobile ? "desktop-hidden" : "mobile-hidden"}`}>
      <img src={responsiveImg} alt="background-gradient" />
    </div>
  );
}

export default GradientImg;
