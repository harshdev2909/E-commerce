const Users = require('../models/userModel')


const userCtrl = {
    register : async(req,res)=>{
        try{
            const {name,email,password} = req.body;

            const user = await Users.findOne({email})
            if(user) return res.status(400).json({msg:"Email Already Registered"})

            if(password.length<6)
            return res.status(400).json({msg:"Password is at least 6 character"})

            res.json({msg:"Register success"})
        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
    }
}

module.exports = userCtrl