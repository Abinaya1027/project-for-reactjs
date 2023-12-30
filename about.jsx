import React from "react";
import {Card} from 'react-bootstrap';
import "./nav.css";

function About() {
  return (
    <>
<div className="card2">
  <div className="card-body">
    <h6><em className="em1">About</em></h6>
    <u className="id"><p>Mail Id</p></u>
    <p className="id1">Santhosh@gmail.com</p>
    <u className="edu"><p>Education</p></u>
    <p className="edu1">As-Salam college of engineering and <br></br> technology</p>
      <u className="out"><p>Year of Passed out</p></u>
      <p className="out1">2024</p>
  </div>
</div>
    </>
  )
}
export default About;