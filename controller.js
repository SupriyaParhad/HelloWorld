var fs=require("fs")
//This is edited copy
exports.getAll=function(req,res)
{
   var path="./products.json"
   fs.readFile(path,(err,data)=>{
    if(data)
    {
        console.log(data)
        var product=JSON.parse(data);
        console.log(product)
        res.send(product)
    }
    else
       res.send("Data not available in products.json")
   })
};

exports.insert=function(req, res){
    var path="./products.json"
    fs.readFile(path, (err, data)=>{
        console.log(data)
        if(data){
            var products=JSON.parse(data);
            var newProduct=req.body;

            console.log(products)
            console.log(newProduct)
             
            products.push(newProduct);
          
            fs.writeFile(path,JSON.stringify(products),(err)=>{
                if(err){
                    res.send("file IO problem")
                }
                else
                res.send("new product inserted into collection.")
            } )
            
        }
        else{
            res.send("data not available")
        }
    })
}

exports.getById=function(req,res){
    var productId=req.params.id;
    var path="./products.json"
    fs.readFile(path,(err,data)=> {
        if(data) {
            var products=JSON.parse(data)
            var product=products.find((p=>(p.id==productId)))
             res.send(product);
        }
        else
         res.send("Data not found")
    })
};

exports.delete=function(req,res){
    var productId=req.params.id;
    var path="./products.json"
    console.log("In delete fuction")
    fs.readFile(path,(err,data)=> {
        if(data) {
            var products=JSON.parse(data)
            var product=products.find((p=>(p.id==productId)))
              console.log(product)

            if(product)
            {
                console.log("In IF")
              // var id=product.id 
              var id=products.indexOf(product)
              console.log(id)
             //  products.splice(id,1)
            // products.remove(id)
               //products.pop(product)
              products.pop();
               console.log(products)
               res.send(products);
            }
        }
        else
         res.send("Data not found")
    })
};

/*exports.delete=function(req, res){
    var path="./products.json"
    fs.readFile(path, (err, data)=>{
        console.log(data)
        if(data){
            var products=JSON.parse(data);
            var newProduct=req.body;

            console.log(products)
            console.log(newProduct)
             
            products.push(newProduct);
          
            fs.writeFile(path,JSON.stringify(products),(err)=>{
                if(err){
                    res.send("file IO problem")
                }
                else
                res.send("new product inserted into collection.")
            } )
            
        }
        else{
            res.send("data not available")
        }
    })
}
*/
/*exports.insert=function(req,res)
{
    var path="./products.json"
    fs.readFile(path,(err,data)=>{
        if(data) {
            var products=JSON.parse(data);
            var newProduct=JSON.parse(req.body);
            products.push(newProduct);
            fs.writeFile(path,products,(err)=>
            {
                if(err)
                  res.send("Data not inserted");
            })

            
        }
    })
    
}   
*/
















