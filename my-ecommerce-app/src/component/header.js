import React from 'react';
import './styles.css';

function Header() {
    return (
        <div>
            <header class="header">
                <div class="logo">
                    <img src="./my-ecommerce-app/public/images/logo.png" alt="Company Logo"></img>
                    {/*<!-- TODO: fix image path -->*/}
                </div>
                <div class="company-name">
                    Company Name
                </div>
            </header>

            <nav>
                <a href="/" class="nav-link">Home</a>
                <a href="products.html" class="nav-link">Products</a> 
                <a href="login.html" class="nav-link">Login</a>
            </nav>
        </div>
    );
}

export default Header;