import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import Header from './Header';

const Main = props =>{
        return(
            <div className="container" style={{"width" : "100%" }}>
                <Header />
                <h1>APP</h1>
            </div>
        );
    };

export default withRouter(Main);