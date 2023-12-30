import React from "react";
import { CardBody } from "react-bootstrap";
import "./nav.css";
import Img1 from "./test.jpg";
import Img2 from "./achi.jpg";
import Img3 from "./win.jpg";

function End() {
  return (
    <>
    <div className="card3">
      <div className="code"></div>
      <div className="code2"></div>
      <img className="pht1" src={Img1} /><em className="t"><h6>Test</h6></em>
      <img className="pht2" src={Img2} /><em className="a"><h6>Achievement</h6></em>
      <img className="pht3" src={Img3} /><em className="l"><h6>Leader Board</h6></em>
    </div>
    </>
  )
}
export default End;