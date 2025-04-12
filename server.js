const express=require('express');
const mongoose=require('mongoose');
app.use(express.json());
const schema=require()
var app=express();  
mongoose.connect('mongodb://localhost:2701/labinternal')
const userschema=new mongoose.schema({
    name:{type:String,required:true},
    email:{type: String ,required:true,unique:true},
    password: {type:String,required:true}
})
app.get("/user",(req,res)=>{
    res.json(user)
})
const productschema=new mongoose.schema({
    name:{type:String,required:true},
    discription :{type: String },
    price: {type:String,required:true},
    category: {type:String},
    stock: {type:Number,default:0}
})

const user=mongoose.model('user',userschema);
const product=mongoose.model('user',productschema);
app.post("/userregister",(req,res)=>{
    let newuser=new user(req.body);
    newuser.save()
    .then(()=>{res.status(200).json({"message":"registerd successfully"});})
    .catch((err)=>{res.status(200).json({"message":"failed to register"})})
})
// app.post("/userlogin",(req,res)=>{
//     let newuser=new user(req.body);
// })
app.get("/product",(req,res)=>{
    const name = req.params.name
    let product = product.find(s=>s.name===name)
    if(product){
        res.status(200).json({
            "message":"product found",
            //"users":user
        })
    }

    else{
        res.status(404).json({"message":"user not found"})
    }

})
app.get("/product/:id",(req,res)=>{
    const id = req.params.id
    let product = product.find(s=>s.id===id)
    if(product.id){
        res.status(200).json({
            "message":"product found",
            //"users":user
        })
    }

    else{
        res.status(404).json({"message":"product not found"})
    }

})
app.post("/addproduct",(req,res)=>{
    let newproduct=new product(req.body);
    newproduct.save()
    .then(()=>{res.status(200).json({"message":"product added successfully"});})
    .catch((err)=>{res.status(200).json({"message":"failed to add product"})})
})
app.put("/products:/id",(req,res)=>{
    const product=req.params.id;
    const updateData=req.body;
    product.findOneAndUpadate(
        {id : productid},
        {$set:updateData},
        {new:true}
    )
    .then((updateproduct)=>{
        if(updateproduct){
            res.json({message:"product upated successfully",product:updatedProduct});
        }else{
            res.status(404).json({message:"product not found"});
        }
    })
    .catch(err=>res.status(500).json({message:"Error updating product",error:err.message}));
})
app.delete("/products/:id",(req,res)=>{
    const product=req.params.id;
   product.findByIdAndDelete(id)
   .then(deletedProduct=>{
    if(deletedProduct){
        res.json({message:"product delete successfully",product:deletedProduct});
    }
        else{
            res.status(404).json({message:"product not found"});
        }
    })
    .catch(err=>res.status(500).json({message:"error problem"}))
});
app.listen(3000,()=>{
    console.log('server running');
})
 