const express = require('express');
const router = express.Router({mergeParams: true});
const Recipe = require("../models/Recipe");


router.get("/", async function(req, res, next){
    try{
        let recipes = await Recipe.find().sort({createdAt: "desc"});
        return res.status(200).json(recipes);
    }catch(err){
        return next(err);
    }
});

router.post('/', async function(req, res, next){
    try{
        let recipe = await Recipe.create({
            name: req.body.recipeData.name,
            image: req.body.recipeData.image,
            ingredients: req.body.recipeData.ingredients,
            instructions: req.body.recipeData.instructions
        });
        return res.status(200).json(recipe);
    }catch(err){
        return next(err);
    }
});

router.get('/:recipe_id', async function(req, res, next){
    try{
        let foundRecipe = await Recipe.findById(req.params.recipe_id);
        return res.status(200).json(foundRecipe);
    }catch(err){
        return next(err);
    }
});

router.put("/:recipe_id", async function(req, res, next){
    try{
        let foundRecipe = await Recipe.findById(req.params.recipe_id);
        await foundRecipe.update({
            name: req.body.recipeData.name,
            img: req.body.recipeData.img,
            ingredients: req.body.recipeData.ingredients,
            instructions: req.body.recipeData.instructions
        });
        return res.status(200).json(foundRecipe);
    }catch(err){
        return next(err);
    }
});

router.delete('/:recipe_id', async function(req, res, next){
    try{
       let foundRecipe = await Recipe.findById(req.params.recipe_id);
       await foundRecipe.remove();
       return res.status(200).json({message: "Recipe Deleted"});
    }catch(err){
        return next(err);
    }
});

module.exports = router;