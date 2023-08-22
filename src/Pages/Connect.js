import React from "react";
import "./connect.css";
import { emailicon } from "../Assets/images";
import { download } from "../Assets/images";
import Drawerr from "../components/Drawer";
import { user } from "../userdetails";

export default function Connect() {
  return (
    <div className="connect">
      <div className="platforms">
        {user.contactdetails.map((eachuser) => (
          <div className="each_platform">
            <div className="each_platform_number">{eachuser.number}</div>
     <div className="each_platform_content" > <a style={{ textDecoration:"none",color:"inherit"}}  href={eachuser.link}>{eachuser.platform}</a>  </div>    
          </div>
        ))}
        <div className="last_platform">
          <div className="last_platform_left">
            <div>{user.name}</div>
            <div>{user.profession}</div>
            <div>
              <img
                style={{ width: "22px", marginRight: "6px" }}
                src={emailicon}
              />
              {user.email}
            </div>
          </div>

          <div className="last_platform_right">
            <div>
              <img
                style={{ width: "30px", marginRight: "12px" }}
                src={download}
              />
            </div>
            <div style={{ marginTop: "3px" }}> Resume</div>
          </div>
        </div>
      </div>
      <div className="connect_tag">
        <div className="tag_content">
          <span>Connect |</span>
          <span>Connect |</span>
          <span>Connect |</span>
          <span>Connect |</span>
          <span>Connect |</span>
        </div>
        <div className="tag_content">
          <span>Connect |</span>
          <span>Connect |</span>
          <span>Connect |</span>
          <span>Connect |</span>
          <span>Connect |</span>
        </div>
      </div>
      <Drawerr />
    </div>
  );
}
