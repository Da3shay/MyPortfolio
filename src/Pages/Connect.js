import React from "react";
import "./connect.css";
import Drawerr from "../components/Drawer";
import { emailicon } from "../Assets/images";
import { download } from "../Assets/images";

export default function Connect() {
  return (
    <div className="connect">
      <div className="platforms">
        <div className="each_platform">
          <div className="each_platform_number">01</div>
          <div className="each_platform_content">Dakshay</div>
        </div>
        <div className="each_platform">
        <div className="each_platform_number">02</div>
          <div className="each_platform_content">Dakshay</div>
        </div>
        <div className="each_platform">
        <div className="each_platform_number">03</div>
          <div className="each_platform_content">Dakshay</div>
        </div>
        <div className="each_platform">
        <div className="each_platform_number">04</div>
          <div className="each_platform_content">Dakshay</div>
        </div>
        <div className="last_platform">
          <div className="last_platform_left">
            <div>Shitiz Aggarwal</div>
            <div>UX Designer</div>
            <div>
              <img style={{width:"22px",marginRight:"6px"}} src={emailicon}/>
              shitiz@gmail.com</div>
            </div>
            <div className="last_platform_right">
             <div><img style={{width:"30px",marginRight:"12px"}} src={download}/></div> 
         <div style={{marginTop:"3px"}}> Resume</div>   
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

    </div>
  );
}
