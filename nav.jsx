import React from 'react';
import { Navbar, Form, FormControl,Image} from 'react-bootstrap';
import "./nav.css"
import Img1 from "../src/assets/nav.jpg";
import Img2 from "./img.jpg.png"
function CustomNavbar() {
  return (
    <>
    
    <Navbar className='nav'  variant="dark">
    <Image className='img1 m-1 p-1' src={Img1} alt="Sample Image" rounded />
    <div className='d2'>
    <p className="text-light pt-2">BASE <span className='text fs-4'>2</span> GEEKS </p>
    </div>
    <div className="line"></div>
    <div className='d1'>
      <Navbar.Brand className='p-3 m-2' href="#home">Prepare</Navbar.Brand>
      <Navbar.Brand className='p-3 m-2' href="#home">Certify</Navbar.Brand>
      <Navbar.Brand className='p-3 m-2' href="#home">Leader board</Navbar.Brand>
      <Navbar.Brand className='p-3 m-2' href="#home">Purchase</Navbar.Brand>
      <div className='in'>
    </div>
      <Form className='in'>
      <Form.Group controlId="exampleForm.ControlInput1">
        <FormControl className='input h-25' type="text"  />
      </Form.Group>
    </Form>
    <i className="i1 fa-solid fa-magnifying-glass"></i>
    <i className="i2 fa-regular fa-bookmark fa-lg"></i>
    <i className="i3 fa-regular fa-bell fa-lg"></i>
    <div className="note p-1"><div className="note2">2</div></div>
    <Image className='img2 ' src={Img2}></Image>
    </div>
    </Navbar>
    </>
  );
}

export default CustomNavbar;
