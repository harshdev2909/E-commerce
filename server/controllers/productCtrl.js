const Products = require('../models/productModel')


class APIfeatures{
    constructor(query,queryString){
        this.query = query;
        this.queryString = queryString
    }

    filtering(){
        const queryObj = {...this.queryString}
        console.log(queryObj)
        const excludedFields = ['page','sort','limit']
        excludedFields.forEach(el=>delete(queryObj[el]))

        let queryStr=JSON.stringify(queryObj)
        queryStr =queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g,match=>'$'+match)

        console.log(queryStr)

        this.query.find(JSON.parse(queryStr))
        return 
    }

    sorting(){

    }

    pagination(){

    }
}
const productCtrl = {
    getProducts:async(req,res)=>{
        try{
        //   const features = new APIfeatures(Products.find(),req.query).filtering
           const products = await Products.find()
           console.log(req.query)
           res.json(products)
        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    createProduct:async(req,res)=>{
        try{
            const {product_id,title,price,description,content,category} = req.body

            const product = await Products.findOne({product_id})

            if(product)
            return res.status(400).json({msg:"This product already Exists"})

            const newProduct = new Products({
                product_id,title :title.toLowerCase(),price,description,content,category
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
            await Products.findByIdAndDelete(req.param.id)
            res.json({msg:"Deleted a product"})
        }
        catch(err){
            res.status(500).json({msg:err.message})
        }
    },
    updateProduct:async(req,res)=>{
        try{
            const {product_id,title,price,description,content,category} = req.body

            await Products.findOneAndUpdate({_id:req.params.id},{
                title:title.toLowerCase(),price,description,content,category
            })

            res.json({msg:"updated a Product"})
        }
        catch(err){
            res.status(500).json({msg:err.message})
        }
    }
}

module.exports = productCtrl