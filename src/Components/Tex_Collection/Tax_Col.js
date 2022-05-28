import React, { useEffect, useState } from 'react'
import './tax.css'
import { useForm } from 'react-hooks-helper'
function Tax() {
  // const defaultData = { IncomeTaxyear: "", MonthlyIncome: "" };
  const [formData, setForm] = useState({
    IncomeTaxyear: '',
    MonthlyIncome: '',
  })
  const [yearly, setyearly] = useState(0)
  const [aftertax, setaftertax] = useState(0)
  const [yearlytax, setYearlytax] = useState(0)
  const [Monthlyincome, setmonthlyincome] = useState(0)
  const [Monthlytax, setmonthlytax] = useState(0)
  const [MonthlyIncomeAfterTax, setMnthIncomeAfterTax] = useState(0)

  // const [data, setData] = useForm(0);
  // const { IncomeTaxyear, MonthlyIncome } = formData;

  const outputdata = () => {
    if(formData.MonthlyIncome < 0)
    {
    alert("Please Enter Positive Numbers Only.")
    }
    else
    {
      setyearly(formData.MonthlyIncome * 12);
    }
  }

  const onchangeData = (e) => {
    const { name, value } = e.target
  

    setForm((predata) => {
      return {
        ...predata,
        [name]: value,
      }
    })
  }

  useEffect(() => {
    if(yearly){
      console.log(yearly)

      if(yearly <= 600000 ){
        let a = yearly;
        let m=yearly/12;
        let b=0
        let c=b/12;
        let x=m-c;
        setmonthlyincome(m);
        setaftertax(yearly - b);
        setYearlytax(b);
        setmonthlytax(c);
        setMnthIncomeAfterTax(x);
      }
      
      else if(yearly > 600000 && yearly <= 1200000){
        let a = yearly - 600000;
        let m=yearly/12;
        let b=5/100 * a
        let c=b/12;
        let x=m-c;
        setmonthlyincome(m);
        setaftertax(yearly - b);
        setYearlytax(b);
        setmonthlytax(c);
        setMnthIncomeAfterTax(x);
      }
      else if(yearly > 1200000 && yearly <= 1800000){
        let a = yearly - 1200000;
        let m=yearly/12;
        let b=(10/100 * a)+30000;
        let c=b/12;
        let x=m-c;
        setmonthlyincome(m);
        setaftertax(yearly - b);
        setYearlytax(b);
        setmonthlytax(c);
        setMnthIncomeAfterTax(x);
      }
      else if(yearly > 1800000 && yearly <= 2500000){
        let a = yearly - 1800000;
        let m=yearly/12;
        let b=(15/100 * a)+90000
        let c=b/12;
        let x=m-c;
        setmonthlyincome(m);
        setaftertax(yearly - b);
        setYearlytax(b);
        setmonthlytax(c);
        setMnthIncomeAfterTax(x);
      }
      else if(yearly >  2500000 && yearly <= 3500000){
        let a = yearly - 2500000;
        let m=yearly/12;
        let b=(18/100 * a)+195000;
        let c=b/12;
        let x=m-c;
        setmonthlyincome(m);
        setaftertax(yearly - b);
        setYearlytax(b);
        setmonthlytax(c);
        setMnthIncomeAfterTax(x);

      }
      else if(yearly >  3500000 && yearly <= 5000000){
        let a = yearly - 3500000;
        let m=yearly/12;
        let b=(20/100 * a)+370000;
        let c=b/12;
        let x=m-c;
        setmonthlyincome(m);
        setaftertax(yearly - b);
        setYearlytax(b);
        setmonthlytax(c);
        setMnthIncomeAfterTax(x);

      }
      else if(yearly >  5000000 && yearly <= 8000000){
        let a = yearly - 5000000;
        let m=yearly/12;
        let b=(23/100 * a)+670000;
        let c=b/12;
        let x=m-c;
        setmonthlyincome(m);
        setaftertax(yearly - b);
        setYearlytax(b);
        setmonthlytax(c);
        setMnthIncomeAfterTax(x);

      }
      else if(yearly >  8000000 && yearly <= 12000000){
        let a = yearly - 8000000;
        let m=yearly/12;
        let b=(25/100 * a)+1345000;
        let c=b/12;
        let x=m-c;
        setmonthlyincome(m);
        setaftertax(yearly - b);
        setYearlytax(b);
        setmonthlytax(c);
        setMnthIncomeAfterTax(x);

      }
      else  {
        let a = yearly - 12000000;
        let m=yearly/12;
        let b=(28/100 * a)+2345000;
        let c=b/12;
        let x=m-c;
        setmonthlyincome(m);
        setaftertax(yearly - b);
        setYearlytax(b);
        setmonthlytax(c);
        setMnthIncomeAfterTax(x);

      }
    }

  },[yearly])

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
          {/* <select
            value={formData.IncomeTaxyear}
            onChange={onchangeData}
            name="IncomeTaxyear"
            className="my-2"
          >
            <option value="">Select Income Tax year</option>
          </select> */}
          <input
            name="MonthlyIncome"
            value={formData.MonthlyIncome}
            onChange={onchangeData}
            
            type="number"
            min="1"
            // pattern="^[0-9]"
            // oninput="validity.valid||(value='');"
            id="m.income"
            placeholder="Enter your monthly income...."
            className="my-2"
          />
          <button onClick={outputdata} className="button">
            Calculate
          </button>
          <div className="container ">
            <div className="row py-5 ">
              <div className="col-md-12 ">
                <div class="media">
                  <label className="lable ">Monthly Income</label>
                  <p>{Monthlyincome}</p>
                </div>
                <div class="media">
                  <label className="lable">Monthly Tax</label>
                  <p>{Monthlytax}</p>
                </div>
                <div class="media">
                  <label className="lable">Income After Tax</label>
                  <p>{MonthlyIncomeAfterTax}</p>
                </div>
                <div class="media">
                  <label className="lable">Yearly Income</label>
                  <p>{yearly}</p>
                </div>
                <div class="media">
                  <label className="lable">Yearly Tax</label>
                  <p>{yearlytax}</p>
                </div>
                <div class="media">
                  <label className="lable">Yearly Income After Tax</label>
                  <p>{aftertax}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  ;
}

export default Tax