const category = require('../models/catogryModels')
const catogryCtrl ={
    getCategories : async(req,res)=>{
        try{
            const categories = await category.find();
            res.json(categories)
        }
        catch(err){
            res.status(500).json({msg:err.message})
        }
    },
    createCategory :async(req,res)=>{
        try{
            res.json('check Admin success')
        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
    }
}

module.exports = catogryCtrl