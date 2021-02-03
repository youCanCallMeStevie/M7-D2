import React from 'react';
import {Navbar} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faNetworkWired} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";



function NavBar() {
    return (
        <div>
         <Navbar className="navbar-container">
         <Link to={`/`}>
             <Navbar.Brand href="#home">
          <FontAwesomeIcon icon={faNetworkWired}  style={{color: 'whitesmoke'}} className="icon-padding"/>
        </Navbar.Brand>
        </Link>
        <h3 className="logoTitle">Strive Jobs</h3>
      </Navbar>
        </div>
    )
}

export default NavBar
