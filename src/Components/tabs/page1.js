import React from "react";
import "./page.css";
function Page1({ formData, setForm }) {
  const {
    firstName,
    lastName,
    emailAddress,
    phoneNumber,
    CNIC,
    DateofBirth,
    Occupation,
    City,
    Address,
  } = formData;
  return (
    <div className="container bx p-5 my-4">
      <div className="row">
        <div className="col-md-12">
          <h4>Personal Information</h4>
        </div>
      </div>
      <div className="row py-4">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6 page px-4">
              <h6>* First Name</h6>
              <input name='firstName' type="text" value={firstName} onChange={setForm} />
            </div>
            <div className="col-md-6 page  px-4">
              <h6>* Last Name</h6>
              <input  name='lastName' type="text" value={lastName} onChange={setForm} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 page px-4">
              <h6>* Email Address</h6>
              <input name='emailAddress' type="text" value={emailAddress} onChange={setForm} />
            </div>
            <div className="col-md-6 page  px-4">
              <h6>* Phone Number</h6>
              <input name='phoneNumber' type="text"  value={phoneNumber} onChange={setForm} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 page px-4">
              <h6>* CNIC</h6>
              <input name='CNIC' type="text"  value={CNIC} onChange={setForm} />
            </div>
            <div className="col-md-6 page  px-4">
              <h6>* Date of Birth</h6>
              <input name='DateofBirth' type="Date"  value={DateofBirth} onChange={setForm} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 page px-4">
              <h6>* Occupation</h6>
              <input name='Occupation' type="text" value={Occupation} onChange={setForm} />
            </div>
            <div className="col-md-6 page  px-4">
              <h6>* City</h6>
              <input name='City' type="text"  value={City} onChange={setForm}  />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 page px-4">
              <h6>* Address</h6>
              <textarea name='Address' cols="30" rows="10"  value={Address} onChange={setForm} ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
