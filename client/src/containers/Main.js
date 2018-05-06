import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

//import Header from './Header';
import RecipesDashboard from '../components/recipes/RecipesDashboard';
import RecipeDisplay from './recipes/RecipeDisplay';
import NewRecipeForm from './recipes/NewRecipeForm';
import EditRecipeDashboard from '../components/recipes/EditRecipeDashboard';
import NewCommentForm from './comments/NewCommentForm';

const Main = props =>{
        return(
            <div className="container" style={{"width" : "100%" }}>
                <Route exact path="/recipes" component={RecipesDashboard} />
                <Route exact path="/recipes/new" component={NewRecipeForm} />
                <Route exact path="/recipes/:id/show" component={RecipeDisplay} />
                <Route exact path="/recipes/:id/edit" component={EditRecipeDashboard} />
                <Route exact path="/recipes/:id/comments/new" component={NewCommentForm} />
            </div>
        );
    };

export default withRouter(Main);