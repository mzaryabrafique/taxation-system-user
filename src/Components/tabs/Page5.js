import React, { useState } from 'react'
import Switch from "react-switch"
function Page5({ formData, setForm }) {
  const {  
     TypeOfproperty,
    AddressProperty,
    AmountProperty,
    VehicleTYpe,
    RegNo,
    Amount,
    SelectBank5,
    AccountNo5,
    Amount5,
    CashAmount5,} =formData;
    const [propertyCheck, setpropertyCheck] = useState(true)
    const [vehicleCheck, setvehicleCheck] = useState(true)
    const [bankCheck, setbankCheck] = useState(true)
    const [cashCheck, setcashCheck] = useState(true)
  
    
     const handleChangeProperty = (nextChecked) => {
        setpropertyCheck(nextChecked);
     };
     const handleChangeVehicle = (nextChecked) => {
        setvehicleCheck(nextChecked);
     };
     const handleChangeBank = (nextChecked) => {
        setbankCheck(nextChecked);
     };
     const handleChangeCash = (nextChecked) => {
        setcashCheck(nextChecked);
     };
  return (
    <div className="container bx p-5 my-4">
    <div className="row">
      <div className="col-md-12">
        <h4>Withhold Taxkes</h4>
      </div>
    </div>
    <div className="row py-4">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-6 page input px-4">
            <div className="row">
              <div className="col-md-6">
                <h6>Bank Transaction</h6>
              </div>
              <div className="col-md-6">
                <Switch
                  onColor="#2f659b"
                  onChange={handleChangeProperty}
                  checked={propertyCheck}
                  uncheckedIcon={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        fontSize: 12,
                        color: "#fff",
                        fontWeight: 700,
                        paddingRight: 2,
                      }}
                    >
                      OFF
                    </div>
                  }
                  checkedIcon={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        fontSize: 12,
                        fontWeight: 700,
                        color: "#fff",
                        paddingRight: 2,
                      }}
                    >
                      NO
                    </div>
                  }
                />
              </div>
            </div>
            <select name='TypeOfproperty'  value={TypeOfproperty} onChange={setForm}   disabled={propertyCheck}  className='my-2' >
              <option value="">Select Property Type</option>
            </select>
            <input name='AddressProperty'  value={AddressProperty} onChange={setForm}    className='my-2' type="text" placeholder='Address' disabled={propertyCheck}  />
            <input name='AmountProperty'  value={AmountProperty} onChange={setForm}   className='my-2' type="text" placeholder='Amount' disabled={propertyCheck}  />
            <button>Add</button>
          </div>
          <div className="col-md-6 page input px-4">
            <div className="row">
              <div className="col-md-6">
                <h6>Vehicle</h6>
              </div>
              <div className="col-md-6">
                <Switch
                  onColor="#2f659b"
                  onChange={handleChangeVehicle}
                  checked={vehicleCheck}
                  uncheckedIcon={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        fontSize: 12,
                        color: "#fff",
                        fontWeight: 700,
                        paddingRight: 2,
                      }}
                    >
                      OFF
                    </div>
                  }
                  checkedIcon={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        fontSize: 12,
                        fontWeight: 700,
                        color: "#fff",
                        paddingRight: 2,
                      }}
                    >
                      NO
                    </div>
                  }
                />
              </div>
            </div>
                 <select name='VehicleTYpe'  value={VehicleTYpe} onChange={setForm}  disabled={vehicleCheck}  className='my-2' >
              <option value="">Vehicle Type</option>
            </select>
            <input  name='RegNo'   value={RegNo} onChange={setForm}  className='my-2' type="text" placeholder='Reg No.' disabled={vehicleCheck}  />
            <input name='Amount'  value={Amount} onChange={setForm}   className='my-2' type="text" placeholder='Amount' disabled={vehicleCheck}  />
            <button>Add</button>
          </div>
           <div className="col-md-6 page input px-4">
            <div className="row">
              <div className="col-md-6">
                <h6>Bank</h6>
              </div>
              <div className="col-md-6">
                <Switch
                  onColor="#2f659b"
                  onChange={handleChangeBank}
                  checked={bankCheck}
                  uncheckedIcon={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        fontSize: 12,
                        color: "#fff",
                        fontWeight: 700,
                        paddingRight: 2,
                      }}
                    >
                      OFF
                    </div>
                  }
                  checkedIcon={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        fontSize: 12,
                        fontWeight: 700,
                        color: "#fff",
                        paddingRight: 2,
                      }}
                    >
                      NO
                    </div>
                  }
                />
              </div>
            </div>
                 <select name='SelectBank5' value={SelectBank5} onChange={setForm}  disabled={bankCheck}  className='my-2' >
              <option value="">Select Bank</option>
            </select>
            <input name='AccountNo5' value={AccountNo5} onChange={setForm}  className='my-2' type="text" placeholder='Account No' disabled={bankCheck}  />
            <input name='Amount5' value={Amount5} onChange={setForm}  className='my-2' type="text" placeholder='Amount' disabled={bankCheck}  />
            <button>Add</button>
          </div>
           <div className="col-md-6 page input px-4">
            <div className="row">
              <div className="col-md-6">
                <h6>Cash Balance</h6>
              </div>
              <div className="col-md-6">
                <Switch
                  onColor="#2f659b"
                  onChange={handleChangeCash}
                  checked={cashCheck}
                  uncheckedIcon={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        fontSize: 12,
                        color: "#fff",
                        fontWeight: 700,
                        paddingRight: 2,
                      }}
                    >
                      OFF
                    </div>
                  }
                  checkedIcon={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        fontSize: 12,
                        fontWeight: 700,
                        color: "#fff",
                        paddingRight: 2,
                      }}
                    >
                      NO
                    </div>
                  }
                />
              </div>
            </div>
            <input name='CashAmount5' value={CashAmount5} onChange={setForm}  className='my-2' type="text" placeholder='Amount' disabled={cashCheck}  />
            <button>Add</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Page5