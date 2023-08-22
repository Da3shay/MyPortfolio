import React, { useState } from "react";
import { Button, Drawer, Radio, Space } from "antd";
import { DrawerProps } from "antd/es/drawer";
import { RadioChangeEvent } from "antd/es/radio";
import { bottomNavIcon } from "../Assets/images";
import "./drawer.css";
import { Link } from "react-router-dom";

export default function Drawerr() {
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
    <>
      <div className="icon">
        <img
          style={{ width: "9vh" }}
          className="buttonrotate"
          id="rotat"
          onClick={showDrawer}
          src={bottomNavIcon}
        />
      </div>
      <Drawer
      placement="bottom"
      closeIcon={false}
      height={280}
      destroyOnClose={true}
      maskStyle={{opacity:"30%",background:"#505050"}}
      // onClose={onClose}
      open={open}
    zIndex={50}
      style={{ background: "#0D0D0D",borderRadius:"70px 70px 0 0",border:"0px"}}
    
    >
      <div className="drawerr">
        <div className="drawer_header">
        <Link to="/" style={{ textDecoration: "none" }}>   <div className="drawer_tabs" >HOME</div></Link>
          <div  className="drawer_tabs">ABOUT ME</div>
          <div  className="drawer_tabs"> MY WORK</div>
          <Link to="/connect" style={{ textDecoration: "none" }}> <div  className="drawer_tabs">CONNECT</div></Link>
          <div  className="drawer_tabs">LIGHT MODE </div>
        </div>
        {/* <div className="Nav_button">
          <img style={{width:"9vh"}} onClick={onClose} src={bottomNavIcon} />
        </div> */}
      </div>
        
    </Drawer>
    </>

 
  );
}
