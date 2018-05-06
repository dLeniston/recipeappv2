import axios from 'axios';
import { LOAD_COMMENTS, FETCH_COMMENT, ADD_COMMENT, UPDATE_COMMENT, REMOVE_COMMENT } from './types';

export const fetchComments = (recipe_id) => async dispatch =>{
    const res = await axios.get(`/api/recipes/${recipe_id}/comments`);
    dispatch({type: LOAD_COMMENTS, payload: res.data});
};

export const fetchComment = (comment_id) => async dispatch =>{
    const res = await axios.get(`/api/comments/${comment_id}`);
    dispatch({type: FETCH_COMMENT, payload: res.data});
};

export const postNewComment = (recipe_id, commentData) => async dispatch =>{
    const res = await axios.post(`/api/recipes/${recipe_id}/comments`, { commentData });
    dispatch({type: ADD_COMMENT, payload: res.data});
};

export const updateComment = (comment_id, commentData) => async dispatch =>{
    const res = await axios.put(`/api/comments/${comment_id}`, {commentData});
    dispatch({type: UPDATE_COMMENT, payload: res.data});
};

export const removeComment = (comment_id) => async dispatch =>{
    const res = await axios.delete(`/api/comments/${comment_id}`);
    dispatch({type: REMOVE_COMMENT, payload: res.data});
};