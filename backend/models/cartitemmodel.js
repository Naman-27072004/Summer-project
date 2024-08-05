const mongoose = require("mongoose")


const cart_itemSchema = new mongoose.Schema(
    {
        items:[]
    },
    { timestamps: true }
);

module.exports = mongoose.model('cart_items',cart_itemSchema)