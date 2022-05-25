import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import './Header.css'
import Cookies from "universal-cookie";

const cookies = new Cookies();

class UserHeader extends React.Component {

  async disconnectWallet() {
    console.log("disconnect admin");

    cookies.remove("IsUser");
    cookies.remove("User");
    cookies.remove("IsAdmin");
    cookies.remove("Admin");

    window.location = "/";
  }

  render() {
    return (
      <div className="container-fluid Nav py-1">
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
                  <li className="nav-item">
                    <NavLink className={'nav-link'} to={'/befiler'}>
                      Be Filer
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={'nav-link'} to={'/tax'}>
                      Tax Calculator
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className={'nav-link'} to={'/requested'}>
                      View Request
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={'nav-link'} to={'/profile'}>
                      Profile
                    </NavLink>
                  </li>
                  <li className="nav-item button">
                    <Button
                      onClick={this.disconnectWallet}
                      className="p-0 px-2 py-1  mx-2"
                    >
                      Disconnect Wallet
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}

export default UserHeader;
