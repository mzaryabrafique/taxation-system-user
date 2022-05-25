import React from "react";
import './Footer.css'
import { FaFacebook, FaLinkedinIn, FaPhone, FaTwitter } from 'react-icons/fa'
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg">
    <div className="container-fluid py-5">
      <div className="row py-4">
        <div className="col-md-3  col--1">
          <h1 className="font-italic">GO FILER</h1>
          <ul className="list-inline mt-4 py-2">
              <h3>Fellow uS</h3>
            <li className="list-inline-item"><FaTwitter/></li>
            <li className="list-inline-item"><FaFacebook/></li>
            <li className="list-inline-item"><FaLinkedinIn/></li>
          </ul>
        </div>
        <div className="col-md-3  col--2">
          <ul className="list-unstyled px-5 text-start mb-0 footer">
          <Link  to={'/'} > <li className="mb-2"> HOME </li></Link> 
          <Link to={'/abouts'} >  <li className="mb-2">ABOUT US </li></Link> 
          <Link to={'/contectus'} >  <li className="mb-2">CONTENCT US </li></Link> 
          <Link to={'/befiler'} >  <li className="mb-2">BE FILER </li></Link> 
          <Link to={'/tax'} >   <li className="mb-2">TAX COLLECTION </li></Link> 

          </ul>
        </div>
        <div className=" col-md-3  col--3">
          <ul className="list-unstyled px-5    text-start mb-0">
            <li className="mb-2">Terms and Conditions </li>
            <li className="mb-2">Privacy Policy </li>
            <li className="mb-2">Cookie and Data Protection</li>
            <li className="mb-2">Complaints Policy  </li>
            <li className="mb-2">FQA  </li>

          </ul>
        </div>
        <div className="col-md-3 col--4 ">
          <h6 className="text-uppercase py-4 font-weight-bold mb-4 pt-3">For Any Query</h6>
          <div className="icontext d-flex justify-content-center align-items-center">
              <div className="icon d-flex justify-content-center align-items-center">

          <FaPhone className="boorder"/> 
              </div>
          <h1> 040-8819747</h1> 
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
