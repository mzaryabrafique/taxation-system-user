import React, { useState } from 'react'
import Page1 from './page1'
import Page2 from './page2'
import Page3 from './page3'
import Page4 from './Page4'
import './style.css'
import { Tabs, Tab, Button } from 'react-bootstrap'
import Page5 from './Page5'
import Page6 from './Page6'
import { useForm } from 'react-hooks-helper'
import contract from "../../build/contracts/Taxation.json";
import { ethers } from "ethers";

function Main() {
  const [key, setKey] = useState(1)
  const defaultData = {
    Salary: '',
    Rent: '',
    Business: '',
    Commission: '',
    Agriculture: '',
    FreeLancing: '',

    AccountNo: '',

    vehicalRegNo: '',
    VehicleName: '',
    vehicalMarketValue: '',

    vehicalRegistrationCopy: '',

    AmountProperty: '',
    CashAmount5: '',
  }

  const [formData, setForm] = useForm(defaultData)
  const props = { formData, setForm }
  var ShowObj = {
    Salary: formData.Salary,
    Rent: formData.Rent,
    Business: formData.Business,
    Commission: formData.Commission,
    Agriculture: formData.Agriculture,
    FreeLancing: formData.FreeLancing,

    AccountNo: formData.AccountNo,

    VehicleName: formData.VehicleName,
    VehicleReg: formData.VehicleReg,
    vehicalMarketValue: formData.vehicalMarketValue,
    vehicalRegistrationCopy: formData.vehicalRegistrationCopy,

    AmountProperty: formData.AmountProperty,

    CashAmount5: formData.CashAmount5,
  }

  async function becomeFiler() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner()

    const deployedNetwork = contract.networks[5777];

    const taxContract = new ethers.Contract(deployedNetwork.address, contract.abi, provider);

    const taxContractWithSigner = taxContract.connect(signer);


    console.log(ShowObj.Salary);
    console.log(ShowObj.Business);
    console.log(ShowObj.Agriculture);
    console.log(ShowObj.FreeLancing);
    console.log(ShowObj.AccountNo);
    console.log(ShowObj.VehicleName);
    console.log(ShowObj.vehicalMarketValue);
    console.log(ShowObj.VehicleReg);
    console.log(ShowObj.AmountProperty);
    console.log(ShowObj.CashAmount5);

    taxContractWithSigner
      .becomeFiler(
        ShowObj.Salary,
        ShowObj.Business,
        ShowObj.Agriculture,
        ShowObj.FreeLancing,
        ShowObj.AccountNo,
        ShowObj.VehicleName,
        ShowObj.vehicalMarketValue,
        ShowObj.VehicleReg,
        ShowObj.AmountProperty,
        ShowObj.CashAmount5
      )

  }




  return (
    <div className="tabs container-fluid d-flex align-items-center justify-content-center flex-column p-4 ">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-5"
      >
        <Tab eventKey="1" title="1 " disabled>
          <Page2 {...props} />
          <Button
            className="button"
            onClick={() => {
              parseInt(key) < 6 && setKey(parseInt(key) + 1)
            }}
          >
            Next
          </Button>
        </Tab>
        <Tab eventKey="2" title="2" disabled>
          <Page3 {...props} />
          <Button
            className="button"
            onClick={becomeFiler}
          >
            Submit
          </Button>
          <Button
            className="button"
            onClick={() => {
              parseInt(key) > 1 && setKey(parseInt(key) - 1)
            }}
          >
            Previous
          </Button>
        </Tab>
      </Tabs>
    </div>
  )
}

export default Main
