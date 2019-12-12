// components{Home, Shop , singleProduct, Contact , Checkout, Cart, Category with dropdown}
import React, { Component} from 'react'
 import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
 


class Menu extends Component {
    render() {
        return (
            <Router>
                <div class="header-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8">
                                <div class="user-menu">
                                    <ul>
                                        <li><Link to="#"><i class="fa fa-user"></i> My Account</Link></li>
                                        <li><Link to="#"><i class="fa fa-heart"></i> Wishlist</Link></li>
                                        <li><Link to="#"><i class="fa fa-user"></i> My Cart</Link></li>
                                        <li><Link to="#"><i class="fa fa-user"></i> Checkout</Link></li>
                                        <li><Link to="#"><i class="fa fa-user"></i> Login</Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/* right side */}
                            <div class="col-md-4">
                                <div class="header-right">
                                    <ul class="list-unstyled list-inline">
                                        <li class="dropdown dropdown-small">
                                            <Link data-toggle="dropdown" data-hover="dropdown" class="dropdown-toggle" href="#">
                                                <span class="key">currency :</span><span class="value">USD </span><b class="caret"></b>
                                            </Link>
                                            <ul class="dropdown-menu">
                                                <li><Link to="#">USD</Link></li>
                                                <li><Link to="#">INR</Link></li>
                                                <li><Link to="#">GBP</Link></li>
                                            </ul>
                                        </li>

                                        <li class="dropdown dropdown-small">
                                            <Link data-toggle="dropdown" data-hover="dropdown" class="dropdown-toggle" to="#">
                                                <span class="key">language :</span><span class="value">English </span><b class="caret"></b>
                                            </Link>
                                            <ul class="dropdown-menu">
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
            </Router>
        )
    }
}

export default Menu
