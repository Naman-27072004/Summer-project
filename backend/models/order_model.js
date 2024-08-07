const mongoose = require("mongoose")


const orderSchema = new mongoose.Schema(
    {
        payment_method:{type:String,required:true},
        paid_at:{type:Number,required:true},
        total_price:{type:Number,required:true},
        is_paid:{type:String,required:true},
        is_delivered:{type:Boolean,default: false},
        delivered_at:{type:Boolean,default: false},
        order_items:[],
        shipping_address:{type:String,required:true},
        payment_result:[],
        quantity:{type:Number,required:true}
    },
    { timestamps: true }
);

module.exports = mongoose.model('orders',orderSchema)