const { response } = require('express');
const Product = require('../models/product-schema');


const getProducts = async(req, res = response) => {

    try {
        const products = await Product.find({ enStock: true });
    
        if(!products){
            res.status(404).json({
                products: [],
                success: false
            });
        }
    
        res.status(200).json({
            products,
            success: true
        });
    } catch (error) {
        res.status(500).json({
            message: error
        });
    }
}

module.exports = {
    getProducts
}
