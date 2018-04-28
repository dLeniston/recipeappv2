import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//import '../css/Navbar.css';

class Header extends Component{
    renderContent(){
                return [
                    <li><a href="/recipes/new">New Recipe</a></li>,
                    <li><a href="#">Logout</a></li>
                ];
    }
    
    render(){
        return(
         <nav style={{background: "#3498DB"}}>
            <div className="nav-wrapper">
                <li
                    className="left brand-logo navbar-logo" style={{paddingLeft: "10px", fontFamily: "Lobster"}}
                >
                    RecipeApp
                </li>
                <ul className="right">
                    {this.renderContent()}
                </ul>
            </div>
         </nav>
        );
    }
}

export default Header;