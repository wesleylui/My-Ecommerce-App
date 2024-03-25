import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div>
            <header class="header">
                <div class="logo">
                    <img src={process.env.PUBLIC_URL + "images/logo.png"} alt="Company Logo"></img>
                    {/*<!-- TODO: fix image path -->*/}
                </div>
                <div class="company-name">
                    Company Name
                </div>
            </header>
            <nav>
                <Link to ="/" class="nav-link">Home</Link>
                <Link to ="/ProductPage" class="nav-link">Products</Link>
                <Link to ="/" class="nav-link">Login</Link>
            </nav>
        </div>
    );
}

export default Header;