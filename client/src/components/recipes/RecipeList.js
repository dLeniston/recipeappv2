import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRecipes } from '../../actions/recipes';
import '../../css/RecipeList.css';

class RecipeList extends Component{
    constructor(props){
    super(props);
    this.state = {
        recipes: []
        };
    }
    
    componentWillMount(){
        this.props.fetchRecipes();
    }
    
    componentWillUpdate(){
        this.props.fetchRecipes();
    }
    
    render(){
        const { recipes } = this.props;
        let recipeList = Object.keys(recipes).map((item, index) =>{
            const id = recipes[item]._id;
            return(
                    <div style={{width: "300px"}}>
                        <div className="card">
                            <div className="card-image">
                                <img src= {recipes[item].image} style={{height: "300px"}}/>
                                <span className="card-title" key={index}>{recipes[item].name}</span>
                            </div>
                            <div class="card-action">
                                <a><Link to={{
                                pathname: `/recipes/${id}/show`,
                                state: {id}
                                }}
                            >View Recipe</Link></a>
                            </div>
                        </div>
                    </div>
            );
          });
        return (
            <div className="container">
                <div className="row col s12">
                    <div className="offset-1 col s10">
                    <h1 style={{fontFamily: "Lobster", textAlign: "center", paddingBottom: "5px"}}>Recipes</h1>
                    <hr style={{marginLeft: "auto", marginRight: "auto"}}/>
                    <div className="recipe-list">
                        {recipeList}
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

export default connect(mapStateToProps, { fetchRecipes })(RecipeList);
