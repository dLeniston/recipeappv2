import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewRecipe } from '../../actions/recipes';
import '../../css/RecipeForm.css';

class NewRecipeForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            image: "",
            ingredients: "",
            instructions: "",
        };
    }

    handleNewRecipe = event =>{
      event.preventDefault();  
      this.props.postNewRecipe(this.state);
      this.setState({name: "", image: "", ingredients: "", instructions: ""});
      this.props.history.push("/home");
    };
    
    render(){
        return(
            <div className="container recipe-form z-depth-3">
              <h2><i className="fa fa-pencil-square" style={{paddingRight: "15px"}}></i>Add a New Recipe</h2>
            <div className="">
            <form className="col s8" onSubmit={this.handleNewRecipe} >
            <div className="input-field col s6">
                <input
                    id="name"
                    type="text"
                    placeholder="Pancakes"
                    value={this.state.name}
                    onChange={e => this.setState({name: e.target.value})} 
                    required
                />
                <label for="name" className="active">Recipe Name</label>
            </div>
            <div className="input-field col s6">
                <input
                    id="image"
                    type="text"
                    placeholder="https://www.pictures.com/pic.jpg"
                    value={this.state.image}
                    onChange={e => this.setState({image: e.target.value})} 
                    required
                />
                <label for="image" className="active">Image URL</label>
            </div>
            <div className="input-field col s6">
                <input
                    id="ingredients"
                    type="text"
                    placeholder="500g White Flour, 2 Eggs, 300ml Milk"
                    value={this.state.ingredients}
                    onChange={e => this.setState({ingredients: e.target.value})} 
                    required
                />
                <label for="ingredients" className="active">Ingredients</label>
            </div>
            <div className="input-field col s6">
                <input
                    id="instructions"
                    type="text"
                    placeholder="Mix Ingredients"
                    value={this.state.instructions}
                    onChange={e => this.setState({instructions: e.target.value})} 
                    required
                />
                <label for="instructions" className="active">Instructions</label>
            </div>
                <button type="submit" className="btn">
                    Add Recipe <i className="fa fa-plus" style={{paddingLeft: "10px"}}></i>
                </button>
            </form>
            </div>
         </div>
        );
    }
}

export default connect(null, { postNewRecipe })(NewRecipeForm);
//export default NewRecipeForm;