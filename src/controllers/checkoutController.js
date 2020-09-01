const path =require("path")
module.exports= {
    index:(req,res)=>{
        res.render(path.resolve(__dirname, '../views/checkout/cart'),{ Title: 'Carrito' });
    },
    additemCart: (req,res)=>{
        
        console.log('agrego item');
        console.log(req.params.id);
        console.log(req.body.talle);
        
    }
}