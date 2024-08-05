const mongoose = require("mongoose")


const cartitemSchema = new mongoose.Schema(
    {
        items:[]
    },
    { timestamps: true }
);

module.exports = mongoose.model('cartitems',cartitemSchema)