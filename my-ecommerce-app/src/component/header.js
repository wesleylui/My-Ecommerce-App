import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div>
            <header class="header">
                <div class="logo">
                    <img src={process.env.PUBLIC_URL + "images/logo.png"} alt="Company Logo"></img>
                </div>
                <div class="company-name">
                    LeShop
                </div>
            </header>
            <nav>
                <Link to ="/" class="nav-link">Home</Link>
                <Link to ="/ProductPage" class="nav-link">Products</Link>
                <Link to ="/LoginPage" class="nav-link">Login</Link>
            </nav>
        </div>
    );
}

export default Header;