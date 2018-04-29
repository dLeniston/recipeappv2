import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRecipe, removeRecipe } from '../../actions/recipes';
import Moment from 'react-moment';

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
    
    handleRemoveRecipe = event =>{
      event.preventDefault();  
      this.props.removeRecipe(this.props.recipes._id);
      this.props.history.push('/recipes');
    };

    render(){
        const { removeRecipe } = this.props;
        const id = this.props.recipes._id;
        console.log(id);
        return (
                <div className="container">
                <div className="row col">
                    <div className="offset-1 col s10">
                    <h1 style={{fontFamily: "Lobster", textAlign: "center", paddingBottom: "5px"}}>{this.props.recipes.name}</h1>
                    <hr style={{margin: "auto"}}/>
                </div>
                    <div className="container">
                        <div className="col" style={{width: "800px", margin: "auto"}}>
                            <div className="card horizontal">
                                <div className="card-image">
                                    <img src={this.props.recipes.image} />
                                </div>
                            <div className="card-stacked">
                            <div className="card-content">
                            <div>
                                <p><em>Submitted by - </em> Username</p>
                                <p><em>Submitted - </em> <Moment className="join-date" format="Do MMM YYYY">
                                    {this.props.recipes.created_date}
                                </Moment></p>
                            </div>
                                <div>
                                    <h5>Ingredients</h5>
                                    <p>{this.props.recipes.ingredients}</p>
                                </div>
                                <div>
                                    <h5>Instructions</h5>
                                    <p>{this.props.recipes.instructions}</p>
                                </div>
                            </div>
                            <div className="card-action">
                                <Link to={{
                                      pathname: `/recipes/${id}/edit`,
                                      state: { id }
                                    }}
                                    className="btn-floating btn-small waves-effect waves-light blue"
                                ><i className="fa fa-pencil"></i>
                                </Link>
                                <a className="btn-floating btn-small waves-effect waves-light red" style={{float:"right", paddingRight:"5px"}} onClick={this.handleRemoveRecipe}><i className="fa fa-trash-o"></i></a>
                            </div>
                            </div>
                            </div>
                            </div>
                    </div>
                </div>
                <div className="row col">
                    <div className="offset-1 col s10">
                    <h1 style={{fontFamily: "Lobster", textAlign: "center", paddingBottom: "5px"}}>Comments</h1>
                    <hr style={{margin: "auto"}}/>
                    </div>
                </div>
                {/*Make a Comments Component */}
            </div>
            );
    }
}

function mapStateToProps(state){
    return{
        recipes: state.recipes
    };
}

export default connect(mapStateToProps, {fetchRecipe, removeRecipe})(RecipeDisplay);