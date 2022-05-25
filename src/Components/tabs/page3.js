import React, { useState } from 'react'
import Switch from "react-switch";
function Page3({ formData, setForm }) {
  const {
    AccountNo,
    VehicleReg,
    VehicleName,
    vehicalMarketValue,
    AmountProperty, CashAmount5 } = formData;
  return (
    <div className="container bx p-5 my-4">
      <div className="row py-4">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6 page input px-4">
              <div className="row">
                <div className="col-md-6">
                  <h6>Bank Transaction</h6>
                </div>

              </div>
              <input name='AccountNo' value={AccountNo} onChange={setForm} className='my-2' type="text" placeholder='Account No.' />
            </div>
            <div className="col-md-6 page input px-4">
              <div className="row">
                <div className="col-md-6">
                  <h6>Vehicle</h6>
                </div>
              </div>
              <input name='VehicleName' value={VehicleName} onChange={setForm} className='my-2' type="text" placeholder='Vehicle Name' />
              <input name='VehicleReg' value={VehicleReg} onChange={setForm} className='my-2' type="text" placeholder='Vehicle Registration No.' />
              <input name='vehicalMarketValue' value={vehicalMarketValue} onChange={setForm} className='my-2' type="text" placeholder='Vehical Market Value' />

            </div>
            <div className="col-md-6 page input px-4">
              <div className="row">
                <div className="col-md-6">
                  <h6>Property</h6>
                </div>
              </div>
              <input name='AmountProperty' value={AmountProperty} onChange={setForm} className='my-2' type="text" placeholder='Amount of Property' />
            </div>
            <div className="col-md-6 page input px-4">
              <div className="row">
                <div className="col-md-6">
                  <h6>Cash</h6>
                </div>
              </div>
              <input name='CashAmount5' value={CashAmount5} onChange={setForm} className='my-2' type="text" placeholder='Cash' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default Page3