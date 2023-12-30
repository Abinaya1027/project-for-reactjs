import React from "react";
// import {Card} from 'react-bootstrap';
import "./nav.css";
import Img1 from "./c.jpg";
import Img2 from "./c++.png";
import Img3 from "./j.jpg";
import Img4 from "./python.jpg";

function Courses() {
  return (
    <>
<div className="card2">
    <h5><em className="pur">Purchased Courses</em></h5>
    <div className="cpro">
    <p className="c">145 / 338</p>
    <div className="circle">
    <img className="pic1" src={Img1}/>
     </div>
    <h6 className="e">Expires @ 12-jun-24</h6>
    </div>
    <div className="cpls">
      <p className="cpls1">145 / 338</p>
      <div className="circle">
    <img className="pic2" src={Img2}/>
    </div>
    <h6 className="e1">Expires @ 12-jun-24</h6>
   </div>
   <div className="java">
    <p className="java1">145 / 338</p>
    <div className="circle">
    <img className="pic3" src={Img3}/>
    </div>
    <h6 className="e2">Expires @ 12-jun-24</h6>
    </div>
    <div className="python">
      <p className="python1">145 / 338</p>   
       <div className="circle">
       <img className="pic4" src={Img4}/>
  </div>
  <h6 className="e3">Expires @ 12-jun-24</h6>

  </div>
  </div>
    </>
  )
}
export default Courses;