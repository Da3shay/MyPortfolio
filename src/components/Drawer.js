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
          <div className="drawer_tabs">HOME</div>
          <div  className="drawer_tabs">ABOUT ME</div>
          <div  className="drawer_tabs"> MY WORK</div>
          <div  className="drawer_tabs">CONNECT</div>
          <div  className="drawer_tabs">LIGHT MODE </div>
        </div>
        {/* <div className="Nav_button">
          <img style={{width:"9vh"}} onClick={onClose} src={bottomNavIcon} />
        </div> */}
      </div>
    </Drawer>
  );
}
