import React from "react";
import "./header.styles.scss";
import logoWhite from "../../assets/img/logo-white.png";

import CustomButton from "./customButton/CustomButton";

function Header() {
  return (
    <div className="header">
      <div className="logo-box">
        <img src={logoWhite} alt="Logo" className="logo" />
      </div>
      <div className="text-box">
      <h1 className="heading-primary">
      <span className="heading-primary--main">OUTDOORS</span> <span className="heading-primary--sub">IS WHERE LIFE HAPPENS</span>
        </h1>
        <CustomButton/>
      </div>

    </div>
  );
}

export default Header;
