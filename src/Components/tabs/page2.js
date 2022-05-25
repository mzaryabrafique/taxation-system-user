import React, { useState } from "react";
import "./page.css";
import Switch from "react-switch";
function Page2({ formData, setForm }) {
  const {
    Salary,
    Business,
    Agriculture,
    FreeLancing,
  } = formData;

 const [salaryCheck, setsalaryCheck] = useState(true)
 const [businessCheck, setbusinessCheck] = useState(true)
 const [agriCheck, setagriCheck] = useState(true)
 const [freelanceCheck, setfreelanceCheck] = useState(true)
 
  const handleChangeSalary = (nextChecked) => {
    setsalaryCheck(nextChecked);
  };
  const handleChangeBusin = (nextChecked) => {
    setbusinessCheck(nextChecked);
  };
  const handleChangeAgri = (nextChecked) => {
    setagriCheck(nextChecked);
  };
  const handleChangeFree= (nextChecked) => {
    setfreelanceCheck(nextChecked);
  };
  return (
    <div className="container bx p-5 my-4">
      <div className="row">
        <div className="col-md-12">
          <h4>Source of Income</h4>
        </div>
      </div>
      <div className="row py-4">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6 page px-4">
              <div className="row">
                <div className="col-md-6">
                  <h6>Salary</h6>
                </div>
                <div className="col-md-6">
                </div>
              </div>
              <input name='Salary' type="text" value={Salary} onChange={setForm}  />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 page px-4">
              <div className="row">
                <div className="col-md-6">
                  <h6>Business</h6>
                </div>
                <div className="col-md-6">
                </div>
              </div>
              <input name='Business' type="text" value={Business} onChange={setForm} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 page px-4">
              <div className="row">
                <div className="col-md-6">
                  <h6>Agriculture</h6>
                </div>
                <div className="col-md-6">
                  
                </div>
              </div>
              <input  name='Agriculture' type="text" value={Agriculture} onChange={setForm}       />     </div>
            <div className="col-md-6 page px-4">
              <div className="row">
                <div className="col-md-6">
                  <h6>FreeLancing</h6>
                </div>
                <div className="col-md-6">
                </div>
              </div>
              <input name='FreeLancing' type="text"  value={FreeLancing} onChange={setForm}  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2;
