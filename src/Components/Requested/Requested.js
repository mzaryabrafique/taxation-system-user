import React, { useEffect, useState } from "react";
import "./requests.css";
import { useForm } from "react-hooks-helper";
import Table from 'react-bootstrap/Table'
import contract from "../../build/contracts/Taxation.json";
import { ethers } from "ethers";
const BigNumber = require('bignumber.js');

function Requested() {
  const defaultData = { IncomeTaxyear: "", MonthlyIncome: "" };
  const [formData, setForm] = useForm(defaultData);
  const { IncomeTaxyear, MonthlyIncome } = formData;


  async function getRequestDetails() {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const accounts = await provider.send("eth_requestAccounts", []);

    const deployedNetwork = contract.networks[5777];
    const taxContract = new ethers.Contract(deployedNetwork.address, contract.abi, provider);

    const taxID = await taxContract.getFilerId(accounts[0]);
    console.log("Tax Id", taxID);
  }

  useEffect(() => {
    async function getRequestDetails() {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const accounts = await provider.send("eth_requestAccounts", []);

      console.log(accounts[0]);

      const deployedNetwork = contract.networks[5777];
      const taxContract = new ethers.Contract(deployedNetwork.address, contract.abi, provider);

      const taxID = await taxContract.getFilerId(accounts[0]);
      console.log("Tax Id", new BigNumber(taxID._hex).s);
    }

    getRequestDetails()
  }, [])

  return (
    <div className="container">
      <div className="row d-flex justify-content-center py-5">
        <div className="col-md-3 tax">
          <h1>Request Status</h1>
        </div>
      </div>
      <div className="row tax d-flex justify-content-center">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Owner</th>
              <th>Is Verified</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Requested;
