import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import './Header.css'
import Web3 from "web3";
import contract from "../../build/contracts/Taxation.json";

import Cookies from "universal-cookie";

const cookies = new Cookies();

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      click: false,
      button: true,
    };
  }

  async connectWallet() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Please install Metamask to continue!"
      );
    }

    // interaction with smart contract to get accounts
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = contract.networks[networkId];
    const instance = new web3.eth.Contract(
      contract.abi,
      deployedNetwork && deployedNetwork.address
    );

    const auth = await instance.methods.checkAuth(accounts[0]).call();
    const admin = await instance.methods.adminMain().call();

    console.log("Auth", auth);
    console.log("Admin: ", admin);
    console.log("Accounts: ", accounts[0]);

    if (auth) {
      cookies.remove("IsUser");
      cookies.remove("User");

      cookies.set("IsAdmin", auth, { path: "/" });
      cookies.set("Admin", auth, { path: "/" });

      console.log(cookies.get("IsAdmin"));
      console.log(cookies.get("Admin"));
      window.location = "/";
    } else {
      cookies.remove("IsAdmin");
      cookies.remove("Admin");

      cookies.set("IsUser", !auth, { path: "/" });
      cookies.set("User", !auth, { path: "/" });

      console.log(cookies.get("IsUser"));
      console.log(cookies.get("User"));
      window.location = "/";
    }
  }

  render() {
    return (
      <div className="container-fluid Nav py-1" >
        <div className="container">
          <nav className="navbar navbar-expand-lg  navbar-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                GO FILER
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end align-items-center"
                id="navbarNav"
              >
                <ul className="navbar-nav ">
                  <li className="nav-item">
                    <NavLink className={'nav-link'} to={'/'}>
                      Home
                    </NavLink>
                  </li>

                  <li className="nav-item button">
                    <button
                      onClick={this.connectWallet}
                      className="p-0 px-2 py-1  mx-2"
                    >
                      Connect Wallet
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div >
      </div >
    )
  }
}

export default Header;
