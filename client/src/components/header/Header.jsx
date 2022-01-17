import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
          <span className="headerTitleSm">My Personal</span>
          <span className="headerTitleLg">Blog</span>
      </div>

      <img className="headerImg" src="./pictures/nyc.jpg" alt=""></img>
    </div>
  )
}
