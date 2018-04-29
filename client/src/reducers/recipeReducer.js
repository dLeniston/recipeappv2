import { LOAD_RECIPES, FETCH_RECIPE, ADD_RECIPE, UPDATE_RECIPE, REMOVE_RECIPE } from '../actions/types';

export default function(state = [], action){
    switch(action.type){
        case LOAD_RECIPES:
            return action.payload;
        case FETCH_RECIPE:
            return action.payload;
        case ADD_RECIPE:
            return state;
        case UPDATE_RECIPE:
            return state;
        case REMOVE_RECIPE:
            return state;
        default:
            return state;
    }
}