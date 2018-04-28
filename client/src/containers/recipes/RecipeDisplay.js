import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRecipe } from '../../actions/recipes';
//import '../../css/postList.css';

class RecipeDisplay extends Component{
    constructor(props){
    super(props);
    this.state = {
        recipes: [],
        };
    }
    
    componentWillMount(){
        this.props.fetchRecipe(this.props.match.params.id);
    }

    render(){
        const id = this.props.match.params.id;
        console.log(id);
        return (
                <div class="row">
                    <div style={{width: "500px", margin: "auto"}}>
                        <div class="card">
                        <div class="card-image">
                            <img src={this.props.recipes.image} />
                            <span class="card-title">{this.props.recipes.name}</span>
                        </div>
                    <div class="card-content">
                        <div>
                            <h5>Ingredients</h5>
                            <p>{this.props.recipes.ingredients}</p>
                        </div>
                        <div>
                            <h5>Instructions</h5>
                            <p>{this.props.recipes.instructions}</p>
                        </div>
                        <p></p>
                    </div>
                        </div>
                    </div>
                </div>
            );
    }
}

function mapStateToProps(state){
    return{
        recipes: state.recipes
    };
}

export default connect(mapStateToProps, {fetchRecipe})(RecipeDisplay);