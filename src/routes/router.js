import { Router } from "express";
import userRouter from "./userRouter.js";
import voteRouter from "./voteRouter.js";
import categoryRouter from "./categoryRouter.js";
import friendsRouter from "./friendsRouter.js"; 

const router = Router();

router.get("/",(req,res)=>{
    res.send({message:"Hello World!"});
})

router.use("/users",userRouter);
router.use("/votes",voteRouter);
router.use("/categories",categoryRouter);
router.use("/friends",friendsRouter);

export default router;