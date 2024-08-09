const mongoose = require("mongoose")


const checkoutSchema = new mongoose.Schema(
    {
        name:{type:String,required:true},
        street:{type:String,required:true},
        floor:{type:String,required:true},
        city:{type:String,required:true},
        phone:{type:Number,required:true},
        email:{type:String,required:true},
        upi:{type:String},
        card_no:{type:Number},
        ex_date:{type:String},
        cvc_cvv:{type:Number},
        name_card:{type:String},
        c_code:{type:String}
    },
    { timestamps: true }
);

module.exports = mongoose.model('Checkout',checkoutSchema)