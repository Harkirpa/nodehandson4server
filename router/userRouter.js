const { login, register } = require("../controller/userController");
const auth=require("../middleware/auth")

const userRouter=require("express").Router();
userRouter.get("/",auth,(req,res)=>{
    res.send({msg:"this is home page"})
})
userRouter.post("/login",login)
userRouter.post("/register",register)

module.exports=userRouter;