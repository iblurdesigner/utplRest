import React from 'react';
import './styles/Navbar.css';

import logo from '../images/logo.png';

class NavBar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <a className="Navbar__brand" href="/">
                        <img className="Navbar__brand-logo" src={logo} alt="" />
                        <span className="font-weight-light">Validador</span>
                        <span className="font-weight-bold"> de números de cédula</span>
                    </a>
                </div>
            </div>
        )
    }        
}

export default NavBar;