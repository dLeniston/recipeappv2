const express     = require("express");
const router      = express.Router({mergeParams: true});
const Comment     = require("../models/Comment");
const Recipe      = require("../models/Recipe");
//var middleware  = require("../middleware");

router.post('/', async function(req, res, next){
    try{
        let comment = await Comment.create({
        text: req.body.commentData.text
        });
        let foundRecipe = await Recipe.findById(req.params.recipe_id);
        foundRecipe.comments.push(comment.id);
        await foundRecipe.save();
        return res.status(200).json(comment);
    }catch(err){
        return next(err);
    }
});

router.get('/', async function(req, res, next){
    try{
        let foundRecipe = await Recipe.findById(req.params.recipe_id);
        console.log("RECIPE", foundRecipe);
        //let comments = await Comment.find({'recipe' : foundRecipe}).sort({created: 1});
        //return res.status(200).json(comments);
        return res.status(200).json({MSG: "Message"});
    }catch(err){
        return next(err);
    }
});

router.get('/:comment_id', async function(req, res, next){
    try{
        let foundComment = await Comment.findById(req.params.comment_id);
        return res.status(200).json(foundComment);
    }catch(err){
        return next(err);
    }
});

router.put('/:comment_id', async function(req, res, next){
    try{
        let foundComment = await Comment.findById((req.params.comment_id));
        await foundComment.update({
            text: req.body.commentData.text
        });
        return res.status(200).json(foundComment);
    }catch(err){
        return next(err);
    }
});

router.delete('/:comment_id', async function(req, res, next){
    try{
       let foundComment = await Comment.findById(req.params.comment_id);
       await foundComment.remove();
       return res.status(200).json({message: "Comment Deleted"});
    }catch(err){
        return next(err);
    }
});

module.exports = router;