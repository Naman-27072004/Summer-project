const mongoose = require("mongoose")


const cartSchema = new mongoose.Schema(
    {
        quantity:{type:Number,required:true}
    },
    { timestamps: true }
);

module.exports = mongoose.model('carts',cartSchema)