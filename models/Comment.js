const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    text: String,
    createdAt: { type: Date, default: Date.now },
    recipe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipe"
    }
});

module.exports = mongoose.model("Comment", commentSchema);