// components{Home, Shop , singleProduct, Contact , Checkout, Cart, Category with dropdown}
import React, { Component} from 'react'
 import { BrowserRouter as Router,  Link, } from "react-router-dom";
 


class Menu extends Component {
    render() {
        return (
            <Router>
                <div className="header-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="user-menu">
                                    <ul>
                                        <li><Link to="#"><i className="fa fa-user"></i> My Account</Link></li>
                                        <li><Link to="#"><i className="fa fa-heart"></i> Wishlist</Link></li>
                                        <li><Link to="#"><i className="fa fa-user"></i> My Cart</Link></li>
                                        <li><Link to="#"><i className="fa fa-user"></i> Checkout</Link></li>
                                        <li><Link to="#"><i className="fa fa-user"></i> Login</Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/* right side */}
                            <div className="col-md-4">
                                <div className="header-right">
                                    <ul className="list-unstyled list-inline">
                                        <li className="dropdown dropdown-small">
                                            <Link data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle" Link="#">
                                                <span className="key">currency :</span><span className="value">USD </span><b className="caret"></b>
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li><Link to="#">USD</Link></li>
                                                <li><Link to="#">INR</Link></li>
                                                <li><Link to="#">GBP</Link></li>
                                            </ul>
                                        </li>

                                        <li className="dropdown dropdown-small">
                                            <Link data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle" to="#">
                                                <span className="key">language :</span><span className="value">English </span><b className="caret"></b>
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li><Link to="#">English</Link></li>
                                                <li><Link to="#">French</Link></li>
                                                <li><Link to="#">German</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                {/* end header */}

                <div className="site-branding-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="logo">
                                    <h1><Link to="./"><img src={require('../img/logo.png')} alt="brand-logo"/></Link></h1>
                                </div>
                            </div>
                            
                            <div className="col-sm-6">
                                <div className="shopping-item">
                                    <Link to="cart.html">Cart - <span className="cart-amunt">$100</span> <i className="fa fa-shopping-cart"></i> <span className="product-count">5</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div> 
                 {/* <!-- End site branding --> */}

                 <div className="mainmenu-area">
                    <div className="container">
                        <div className="row">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div> 
                            <div className="navbar-collapse collapse">
                                <ul className="nav navbar-nav">
                                    <li className="active"><Link to="index.html">Home</Link></li>
                                    <li><Link to="shop.html">Shop page</Link></li>
                                    <li><Link to="single-product.html">Single product</Link></li>
                                    <li><Link to="cart.html">Cart</Link></li>
                                    <li><Link to="checkout.html">Checkout</Link></li>
                                    <li><Link to="#">Category</Link></li>
                                    <li><Link to="#">Others</Link></li>
                                    <li><Link to="#">Contact</Link></li>
                                </ul>
                            </div>  
                        </div>
                    </div>
                </div>
                 {/* <!-- End mainmenu area --> */}
            </Router>
        )
    }
}

export default Menu
