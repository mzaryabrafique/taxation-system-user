import React, { Component } from "react";
import "./requests.css";
import Table from 'react-bootstrap/Table'
import contract from "../../../build/contracts/Taxation.json";
import { ethers } from "ethers";
const BigNumber = require('bignumber.js');

class UserRequests extends React.Component {

  async componentDidMount() {
    await this.getRequestDetails();
  }

  constructor(props) {
    super(props);
    this.state = {
      status: [],
      owner: [],
      dummy: "",
    }
  }

  async getRequestDetails() {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const accounts = await provider.send("eth_requestAccounts", []);

    const deployedNetwork = contract.networks[5777];
    const taxContract = new ethers.Contract(deployedNetwork.address, contract.abi, provider);

    const lengthls = await taxContract._filersIds();
    let arrlength = new BigNumber(lengthls._hex).s;
    console.log("length", new BigNumber(lengthls._hex).s);
    for (let i = 0; i <= arrlength; i++) {
      const list = await taxContract["userList"](i);
      console.log("userList", list);

      const taxDetail = await taxContract.getFiler(list);
      console.log("Tax Owner", taxDetail[0]);
      this.state.owner.push(taxDetail[0].toString())

      const taxRemDetail = await taxContract.getFilerRemainingData(list);
      console.log("Tax Status", taxRemDetail[6]);
      this.state.status.push(taxRemDetail[6].toString())
      this.setState({ dummy: "dummy" });
    }


  }

  async verifyRequest(address) {
    console.log("addr", address)
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner()

    const deployedNetwork = contract.networks[5777];

    const taxContract = new ethers.Contract(deployedNetwork.address, contract.abi, provider);

    const taxContractWithSigner = taxContract.connect(signer);
    taxContractWithSigner.verifyFiler("0x7343343121Ff36569A8d78Ee1B8bbB569E0115C6")
  }


  render() {
    return (
      <div className="container" >
        <div className="row d-flex justify-content-center py-5">
          <div className="col-md-3 tax">
            <h1>User Requests</h1>
          </div>
        </div>
        <div className="row tax d-flex justify-content-center">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Owner</th>
                <th>Is Verified</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.owner.map((val, i) => (
                <tr key={i} style={i % 2 == 0 ? { visibility: 'hidden' } : { visibility: 'visible' }}>
                  <td>{val}</td>
                  <td style={{ color: 'green' }}>{this.state.status[i]}</td>
                  <td>
                    <button onClick={this.verifyRequest}>
                      Approve Request
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div >
    );
  }
}

export default UserRequests;
