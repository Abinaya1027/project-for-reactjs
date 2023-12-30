import React from "react";
import {Card} from 'react-bootstrap';
import "./nav.css";
import Img1 from "./img.jpg.png";
import Img2 from "../src/assets/link.jpg";
import Img3 from "../src/assets/git.jpg.png";
import Img4 from "./about.png";
function Cards() {
  return (
    <div className="card1">
    <i className="pin fa-sharp fa-regular fa-pen-to-square fa-lg"></i>
    <i className="share fa-sharp fa-regular fa-share-from-square fa-lg"></i>
        <h1 className="t1 text-light"><span className="head">S</span>anthosh</h1>
      <h6 className="t3 text-light">I am a Developer</h6>
      <img src={Img1} className="c1" alt="Card Image" />
      <p className="t2 text-light">@sandy123</p>
      <div className="lines">   
      </div>
      <div className="card-body">
        <p className="card-text"></p>
        <img src={Img2} className="c2" alt="Card Image" />
        <img src={Img3} className="c3" alt="Card Image" />  
        <div className="cd1">
          <h6 className="n1">200</h6>
          <p className="para1">Followings</p>
         <h6 className="n2">200</h6>
          <p className="para2">Followers</p>
        </div>
        <div className="cd2"></div>
      </div>
      <div className="about">
        <img src={Img4} />
      </div>
    </div>
  );
}
export default Cards;