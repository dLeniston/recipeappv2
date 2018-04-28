import React, {Component} from 'react';
import {Link} from 'react-router-dom';
 
import '../css/Landing.css';

class Landing extends Component{
    render(){
      return(
  <div>
    <div className="container">
      <div className="row">
        <div>
          <div id="content">
          <h1 style={{fontFamily: "Lobster"}} className="landingHeader">RecipeApp</h1>
          <hr />
            <div className="wrapper">
              <a className="waves-effect waves-light btn-large blue" id="landingButton"><Link to={{
                pathname: "/home",
                }}>Get Started</Link></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <ul className="slideshow">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
    );
    }
}

export default Landing;