const mongoose = require("mongoose")


const manageSchema = new mongoose.Schema(
    {
        name:{type:String,required:true},
        email:{type:String,required:true},
        n_pass:{type:String,required:true},
        c_n_pass:{type:String,required:true}
    },
    { timestamps: true }
);

module.exports = mongoose.model('Manage',manageSchema)