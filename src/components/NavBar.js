import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

import logo from '../images/logo.png';

class NavBar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <Link className="Navbar__brand" to="/">
                        <img className="Navbar__brand-logo" src={logo} alt="" />
                        <span className="font-weight-light">Validador</span>
                        <span className="font-weight-bold"> de números de cédula</span>
                    </Link>
                </div>
            </div>
        )
    }        
}

export default NavBar;