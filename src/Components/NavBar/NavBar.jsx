import React from 'react';
import {Navbar} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <div>
         <Navbar className="align-items-end w-100">
         <Link to={`/`}>
             <Navbar.Brand href="#home">
          <FontAwesomeIcon icon={faSearch}/>
        </Navbar.Brand>
        </Link>
        <h3 className="logoTitle">Strive Jobs</h3>
      </Navbar>
        </div>
    )
}

export default NavBar
