const infoProduct = require('../database/infoproduct.json')
module.exports= function(req,res){
    const idMenu = req.params.id;
    const productoSeleccionado = infoProduct.find(function(producto) {
        return producto.id === parseInt(idMenu);
    });
    res.render("detalleMenu")

}