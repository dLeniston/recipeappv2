import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { fetchRecipe } from '../../actions/recipes';
import EditRecipeForm from '../../containers/recipes/EditRecipeForm';

class EditRecipeDashboard extends Component{
    constructor(props){
    super(props);
    this.state = {
        recipes: [],
        };
    }
    
    componentWillMount(){
        this.props.fetchRecipe(this.props.location.state.id);
    }

render(){
    return (
        <div>
            <EditRecipeForm recipe={this.props.recipes} />
        </div>
    );
}
}

function mapStateToProps(state){
    return{
        recipes: state.recipes
    };
}

export default connect(mapStateToProps, {fetchRecipe})(EditRecipeDashboard);