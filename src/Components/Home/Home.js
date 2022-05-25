import React from "react";
import {useForm} from 'react-hooks-helper'
import { Link } from 'react-router-dom'
import "./home.css";
function Home() {
  const defaultData={name:"",email:"",message:""}
  const [formData,setForm]=useForm(defaultData)
  const{name,email,message}=formData
  return (
    <>
    <section className="pt-5 pb-5 mt-0 align-items-center d-flex bg-dark header">
      <div className="container-fluid">
        <div className="row  justify-content-center align-items-center d-flex text-center h-100">
          <div className="col-12 col-md-8  h-50 ">
            <h1 className="display-2   text-light mb-2 mt-5">
              <strong>Welcome</strong>{" "}
            </h1>
            <div className="btn-container-wrapper p-relative d-block  zindex-1">
            <div className="col-md-12 button">
            <Link to={'/befiler'} > <button>Click Me</button> </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="container-fluid">
      <div className="container">
        <div className="row p-5 top">
          <div className="col-md-6 img">
            <img src="./images/What-is-Business-Finance.jpg" alt=""  />
          </div>
          <div className="col-md-6 text">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, autem.</p>
          </div>
        </div>
        <div className="row p-5 back">
        <div className="col-md-6 text">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, autem.</p>
          </div>
          <div className="col-md-6 img">
            <img src="./images/What-is-Business-Finance.jpg" alt=""  />
          </div>
         
        </div>
        <div className="row p-5 text-center ">
        <div className="col-md-12 ">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, autem.</p>
            <div className="row about py-3">
              <div className="col-md-6">
                <input name='name' value={name} onChange={setForm} type="text" placeholder="Name" />
              </div>
              <div className="col-md-6">
                <input name='email' value={email} onChange={setForm} type="text" placeholder="Email" />
              </div>

            </div>
            <div className="row py-3">
              <div className="col-md-12 textarea">
                <textarea placeholder="Message"value={message} onChange={setForm} name="message"  cols="30" rows="10"></textarea>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 button">
                <button onClick={()=>{alert(name+" "+email+" "+ message)}}> Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}

export default Home;
