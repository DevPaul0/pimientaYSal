const infoProduct = require('../database/infoproduct.json')
module.exports= function(req,res){
    res.render("index",{"infoProduct":infoProduct})
}