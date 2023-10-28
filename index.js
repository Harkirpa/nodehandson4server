const express=require("express");

const userRouter=require('./router/userRouter')
const PORT=4555
const app=express();

app.use(express.json())
const cors = require('cors');
app.use(cors({
    origin: '*'
}));
app.use("/api",userRouter)
app.listen(PORT,()=>{
    try{
        console.log('server is running on Port No. 4555')
    }
    catch(err){
           console.log('error occured during starting the live error',err)
    }
  
})