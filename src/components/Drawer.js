import React, { useState } from "react";
import { Button, Drawer, Radio, Space } from "antd";
import { DrawerProps } from "antd/es/drawer";
import { RadioChangeEvent } from "antd/es/radio";
import { bottomNavIcon } from "../Assets/images";
import "./drawer.css";

export default function Drawerr({ setOpen, open }) {
//   const showDrawer = () => {
//     setOpen(true);
//   };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Drawer
      placement="bottom"
  
     height={280}
      destroyOnClose={true}
      maskStyle={{opacity:"20%",background:"#505050"}}
      onClose={onClose}
      open={open}
    zIndex={50}
      style={{ background: "#0D0D0D",borderRadius:"100px 100px 0 0",border:"0px"}}
    
    >
      <div className="drawerr">
        <div className="drawer_header">
          <div>Home</div>
          <div>About Me</div>
          <div>My Work</div>
          <div>Connect</div>
          <div>Light Mode </div>
        </div>
        {/* <div className="Nav_button">
          <img style={{width:"9vh"}} onClick={onClose} src={bottomNavIcon} />
        </div> */}
      </div>
    </Drawer>
  );
}
