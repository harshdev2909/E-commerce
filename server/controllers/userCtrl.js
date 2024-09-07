const Users = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');


const userCtrl = {
    register : async(req,res)=>{
        try{
            console.log(req.body)
            const {name,email,password} = req.body;

            // const user = await Users.findOne({email})
            // if(user) return res.status(400).json({msg:"Email Already Registered"})

            if(password.length<6)
            return res.status(400).json({msg:"Password is at least 6 character"})
            
            //password
            const passwordHash = await bcrypt.hash(password,10)
            const newUser = new Users({
                name,email,password:passwordHash
            })
            // save mongoDb

            await newUser.save()

            //create jwt to authenticate
            const accesstoken = createAccessToken({id:newUser._id})
            const refreshtoken = createrefreshToken({id:newUser._id})

            res.cookie('refreshtoke',refreshtoken,{
                httpOnly:true,
                path:'/user/refresh_token'
            }) 

            res.json({accesstoken})
        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    refreshtoken :async(req,res)=>{

        try{
            const rf_token= req.cookies.refreshtoken;
            if(!rf_token) return res.status(400).json({msg:"Please login or register"})

            jwt.verify(rf_token,process.env.REFRESH_TOKEN_SECRET,(err,user)=>{
            if(err) return res.status(400).json({msg:"Please Login or register"})
            const accesstoken = createAccessToken({id:user.id})
                res.json({user,accesstoken})
        })

       
        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
        
    },
    login:async(req,res)=>{
        try{
            const{email,password} = req.body;

            const user = await Users.findOne({email});
            if(!user) return res.status(400).json({msg:"User not Found"});

            const isMatch = await bcrypt.compare(password,user.password)
            if(!isMatch) return res.status(400).json({msg:"Incorrect Password"})

            const accesstoken = createAccessToken({id:user._id});
            const refresh_token = createrefreshToken({id:user._id})

            res.cookie('refreshtoken',refresh_token,{
                httpOnly:true,
                path:'/user/refresh_token'
            })
            res.json({accesstoken})
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    logout:async(req,res)=>{
        try{
            res.clearCookie('refreshtoken',{path:'/user/refresh_token'})
            return res.json({msg:"log out"})
        }
        catch(err){

        }
    },
    getUser:async(req,res)=>{
        try{
            const user = await Users.findById(req.user.id).select('-password')

            if(!user) return res.status(400).json({msg:"User not found"})
            res.json(user)
        }
        catch(err){

        }
    }
}

const createAccessToken = (payLoad) =>{
    return jwt.sign(payLoad,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'1d'})
}
const createrefreshToken = (payLoad) =>{
    return jwt.sign(payLoad,process.env.REFRESH_TOKEN_SECRET,{expiresIn:'1d'})
}

module.exports = userCtrl;