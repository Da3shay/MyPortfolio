import React, {useState} from "react";
import "./home.css";
import { bottomNavIcon } from "./Assets/images";
import Drawerr from "./components/Drawer";

export default function Home() {

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
       
        if(open===true)
        {
            setOpen(false)
            document.getElementById("rotat").style.rotate = "0deg";
        }
        if(open===false)
        {
            setOpen(true)
            document.getElementById("rotat").style.rotate = "180deg";
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
          Shitiz Aggarwal
        </div>
        <div className="menu">
          <div className="tabs">About Me .</div>
          <div className="tabs">My Work .</div>
          <div className="tabs">Connect .</div>
        </div>
      </div>
      <div  className="section2">
        <div className="section2_title">
          Code to User-Centric: Journey of an Engineer to UI/UX Designer
        </div>
        <div  className="section2_body">
          Transforming complexity into simplicity, I'm Shitiz Aggarwal, a
          seasoned UX Designer with over 2 years of experience. With a dynamic
          background that spans both freelancing and collaborating with
          companies in diverse sectors such as Web3, Healthcare, Marketplace,
          Education, and more, I've honed my skills in blending tech roots with
          creative flair. Let's work together to craft user-centric digital
          journeys that don't just dazzle but deeply resonate!
        </div>
     
      </div>
      <div className="icon">
       <img style={{width:"9vh"}} className="buttonrotate" id="rotat" onClick={showDrawer} src={bottomNavIcon}/> 
        </div>
    <Drawerr setOpen={setOpen} open={open}/>
 
    </div>
  );
}
