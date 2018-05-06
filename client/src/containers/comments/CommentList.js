import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../../actions/comments';

class CommentList extends Component{
    constructor(props){
    super(props);
    this.state = {
        comments: []
        };
    }
    
    componentWillMount(){
        this.props.fetchComments(this.props.recipeId);
    }
    
    componentWillUpdate(){
        this.props.fetchComments(this.props.recipeId);
    }
    
    render(){
        const { comments } = this.props;
        console.log("PROPS", this.props);
        let commentList = Object.keys(comments).map((item, index) =>{
            const id = comments[item]._id;
            return(
                    <li className="collection-item" key={index}>{comments[item].text}</li>
            );
          });
        return (
                <div className="row col s8">
                <div className="offset-1 col s10">
                <h3 style={{fontFamily: "Lobster", textAlign: "center"}}>Comments</h3>
                <hr style={{marginLeft: "auto", marginRight: "auto"}}/>
                    <ul className="collection" id="comments">
                        {commentList}
                    </ul>
                </div>
                </div>
            );
    }
}

function mapStateToProps(state){
    return{
        comments: state.comments
    };
}

export default connect(mapStateToProps, { fetchComments })(CommentList);