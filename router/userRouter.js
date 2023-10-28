const { login, register } = require("../controller/userController");
// const auth=require("../middleware/auth")

const userRouter=require("express").Router();
userRouter.get("/",(req,res)=>{
 res.send('This is home Page')
})
userRouter.post("/login",login)
userRouter.post("/register",register)

module.exports=userRouter;