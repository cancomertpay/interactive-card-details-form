import React from "react";
import mobileImg from "../assets/images/bg-main-mobile.png";
import desktopImg from "../assets/images/bg-main-desktop.png";

function GradientImg() {
  return (
    <>
      <div className={`bg-main desktop-hidden`}>
        <img src={mobileImg} alt="background-gradient" />
      </div>
      <div className={`bg-main mobile-hidden desktop-block`}>
        <img src={desktopImg} alt="background-gradient" />
      </div>
    </>
  );
}

export default GradientImg;
