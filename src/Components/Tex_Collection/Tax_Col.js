import React from "react";
import "./tax.css";
import { useForm } from "react-hooks-helper";
function Tax() {
  const defaultData = { IncomeTaxyear: "", MonthlyIncome: "" };
  const [formData, setForm] = useForm(defaultData);
  const { IncomeTaxyear, MonthlyIncome } = formData;
  return (
    <div className="container">
      <div className="row d-flex justify-content-center py-5">
        <div className="col-md-3 tax">
          <h1>Income Tax Calculator</h1>
        </div>
      </div>
      <div className="row tax d-flex justify-content-center">
        <div className="col-md-4 tax1 p-5">
          <p>
            A part from compliance, signing up with our online tax return portal
            allows you to access and easy to use tax return calculator that lays
            out all figures for you, in a comprehensible manner. Our salary taxk
            calculator is constantly updated with the latest regulations and tax
            rates in Pakistan
          </p>
        </div>
        <div className="col-md-5 p-5  page input d2">
          <select
            value={IncomeTaxyear}
            onChange={setForm}
            name="IncomeTaxyear"
            className="my-2"
          >
            <option value="">Select Income Tax year</option>
          </select>
          <input
            name="MonthlyIncome"
            value={MonthlyIncome}
            onChange={setForm}
            className="my-2"
            type="text"
            placeholder="Enter your monthly income...."
          />
          <button onClick={() => alert(MonthlyIncome)} className="button">
            Calculate
          </button>
          <div className="container ">
          <div className="row py-5 ">
            <div className="col-md-12 ">
              <div class="media">
                <label className="lable ">Monthly Salary</label>
                <p>Canada</p>
              </div>
              <div class="media">
                <label className="lable">Monthly Tax</label>
                <p>Canada</p>
              </div>
              <div class="media">
                <label className="lable">Salary After Tax</label>
                <p>Canada</p>
              </div>
              <div class="media">
                <label className="lable">Yearly Salary</label>
                <p>Canada</p>
              </div>
              <div class="media">
                <label className="lable">Yearly Tax</label>
                <p>Canada</p>
              </div>
              <div class="media">
                <label className="lable">Yearly Salary After Tax</label>
                <p>Canada</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tax;
