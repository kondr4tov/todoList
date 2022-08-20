import React from "react";
import BottomNavigation from "../BottomNavigation/BottomNavigation";
import "./Footer.css"


const Footer = () => (
  <div className="footer">
    <BottomNavigation />
    <p>This is some content in sticky footer</p>
  </div>
);

export default Footer;