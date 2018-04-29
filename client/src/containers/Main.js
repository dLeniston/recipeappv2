import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import Header from './Header';
import RecipesDashboard from '../components/recipes/RecipesDashboard';
import RecipeDisplay from './recipes/RecipeDisplay';
import NewRecipeForm from './recipes/NewRecipeForm'

const Main = props =>{
        return(
            <div className="container" style={{"width" : "100%" }}>
                <Route exact path="/recipes" component={RecipesDashboard} />
                <Route exact path="/recipes/new" component={NewRecipeForm} />
                <Route exact path="/recipes/:id" component={RecipeDisplay} />
            </div>
        );
    };

export default withRouter(Main);