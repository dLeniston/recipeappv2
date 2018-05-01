import { LOAD_COMMENTS, FETCH_COMMENT, ADD_COMMENT, UPDATE_COMMENT, REMOVE_COMMENT } from '../actions/types';

export default function(state = [], action){
    switch(action.type){
        case LOAD_COMMENTS:
            return action.payload;
        case FETCH_COMMENT:
            return action.payload;
        case ADD_COMMENT:
            return state;
        case UPDATE_COMMENT:
            return state;
        case REMOVE_COMMENT:
            return state;
        default:
            return state;
    }
}