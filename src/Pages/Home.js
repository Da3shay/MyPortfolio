import React, { useState } from "react";
import "./home.css";
import { bottomNavIcon } from "../Assets/images";
import Drawerr from "../components/Drawer";

import { user } from "../userdetails";


export default function Home() {


  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    if (open === true) {
      setOpen(false);

      document.getElementById("rotat").style.rotate = "0deg";
      document.getElementById("rotat").style.transitionDuration = "0.7s";
    }
    if (open === false) {
      setOpen(true);
      document.getElementById("rotat").style.rotate = "180deg";
      document.getElementById("rotat").style.transitionDuration = "0.7s";
    }
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="Home">
      <div className="section1">
        <div className="Name">
          Hello! I'm <br />
          {user.name}
        </div>
        <div className="menu">
          <div className="tabs" id="text" >About Me .</div>
          <div className="tabs">My Work .</div>
          <div className="tabs">Connect .</div>
        </div>
      </div>
      <div className="section2">
        <div className="section2_title">
         {user.home_title}
        </div>
        <div className="section2_body">
        {user.home_body}
        </div>
      </div>
      <div className="icon">
        <img
          style={{ width: "9vh" }}
          className="buttonrotate"
          id="rotat"
          onClick={showDrawer}
          src={bottomNavIcon}
        />
      </div>
      <Drawerr setOpen={setOpen} open={open} />
  
    </div>
  );
}
