import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewComment } from '../../actions/comments';
import '../../css/RecipeForm.css';

class NewCommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: ""
        };
    }

    handleNewComment = event =>{
      event.preventDefault();  
      this.props.postNewComment(this.props.location.state.id, this.state);
      this.setState({text: ""});
      this.props.history.push("/recipes");
    };
    
    render(){
        console.log("PROPS", this.props.location.state.id);
        console.log("STATE", this.state);
        return(
            <div className="container recipe-form z-depth-3">
              <h2><i className="fa fa-pencil-square" style={{paddingRight: "15px"}}></i>Add a Comment</h2>
            <div className="">
            <form className="col s8" onSubmit={this.handleNewComment} >
            <div className="input-field col s6">
                <input
                    id="name"
                    type="text"
                    placeholder="Comment Text..."
                    value={this.state.text}
                    onChange={e => this.setState({text: e.target.value})} 
                    required
                />
                <label for="name" className="active">Comment</label>
            </div>
                <button type="submit" className="btn">
                    Add Comment <i className="fa fa-plus" style={{paddingLeft: "10px"}}></i>
                </button>
            </form>
            </div>
         </div>
        );
    }
}

export default connect(null, { postNewComment })(NewCommentForm);