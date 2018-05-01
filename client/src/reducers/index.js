import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer';
import commentReducer from './commentReducer';

export default combineReducers({
    recipes: recipeReducer,
    comments: commentReducer
});