const usermodel = require("../models/usermodel");

const bcrypt = require("bcrypt");

const registercontroller = async(req,res) => {
  try{
        const existingUser = await usermodel.findfindone({email:req.body.email})

        //validation
        if(existingUser){
            return res.status(200).send({
                sucess: false,
                message: "user Already exists"
            })
        }
  } catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"ERROR IN REGISTER API",
            error
        })
  } 
};

module.exports = {registercontroller};