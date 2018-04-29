import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateRecipe } from '../../actions/recipes';
import '../../css/RecipeForm.css';

class EditRecipeForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: props.recipe.name,
            image: props.recipe.image,
            ingredients: props.recipe.ingredients,
            instructions: props.recipe.instructions
        };
    }

    handleRecipeUpdate = event =>{
      event.preventDefault();  
      this.props.updateRecipe(this.props.recipe._id, this.state);
      this.setState({name: "", image: "", ingredients: "", instructions: ""});
      this.props.history.push("/recipes");
    };
    
    render(){
        const { name, image, ingredients, instructions } = this.state;
        return(
            <div className="container recipe-form z-depth-3">
              <h2><i className="fa fa-pencil-square" style={{paddingRight: "15px"}}></i>Edit {this.props.recipe.name}</h2>
            <div className="">
            <form className="col s8" onSubmit={this.handleRecipeUpdate} >
            <div className="input-field col s6">
                <input
                    id="name"
                    type="text"
                    placeholder="Pancakes"
                    value={name}
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
                    value={image}
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
                    value={ingredients}
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
                    value={instructions}
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

export default connect(null, { updateRecipe })(EditRecipeForm);