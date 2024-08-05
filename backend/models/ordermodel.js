const mongoose = require("mongoose")


const oredrSchema = new mongoose.Schema(
    {
        paymentmethod:{type:String,required:true},
        paidat:{type:Number,required:true},
        totalprice:{type:Number,required:true},
        ispaid:{type:String,required:true},
        isdelivered:{type:Boolean,default: false},
        deliveredat:{type:Boolean,default: false},
        orderitems:[],
        shippingaddress:{type:String,required:true},
        paymentresult:[],
        quantity:{type:Number,required:true}
    },
    { timestamps: true }
);

module.exports = mongoose.model('orders',orderSchema)