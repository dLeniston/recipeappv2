import axios from 'axios';
import { LOAD_RECIPES, FETCH_RECIPE, ADD_RECIPE, REMOVE_RECIPE } from './types';

export const fetchRecipes = () => async dispatch =>{
    const res = await axios.get('/api/recipes');
    dispatch({type: LOAD_RECIPES, payload: res.data});
};

export const fetchRecipe = (recipe_id) => async dispatch =>{
    const res = await axios.get(`/api/recipes/${recipe_id}`);
    dispatch({type: FETCH_RECIPE, payload: res.data});
};

export const postNewRecipe = (recipeData) => async dispatch =>{
    const res = await axios.post('/api/recipes', { recipeData });
    dispatch({type: ADD_RECIPE, payload: res.data});
};

export const removeRecipe = (recipe_id) => async dispatch =>{
    const res = await axios.delete(`/api/recipes/${recipe_id}`);
    dispatch({type: REMOVE_RECIPE, payload: res.data});
};
