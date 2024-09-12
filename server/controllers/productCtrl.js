const Products = require('../models/productModel')

const productCtrl = {
    getProducts:async(req,res)=>{
        try{
           const products = await Products.find()
           res.json(products)
        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    createProduct:async(req,res)=>{
        try{
            const {product_id,title,price,description,content,images,category} = req.body
            if(!images) return res.status(400).json({msg:"No Image upload"})

            const product = await Products.findOne({product_id})

            if(product)
            return res.status(400).json({msg:"This product already Exists"})

            const newProduct = new Products({
                product_id,title :title.toLowerCase(),price,description,content,images,category
            })
            await newProduct.save()
            res.json({msg:"Create a product"});
        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    deleteProdcut:async(req,res)=>{
        try{

        }
        catch(err){
            res.status(500).json({msg:err.message})
        }
    },
    updateProduct:async(req,res)=>{
        try{

        }
        catch(err){
            res.status(500).json({msg:err.message})
        }
    }
}

module.exports = productCtrl