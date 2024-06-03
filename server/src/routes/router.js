import { Router } from "express";

import userRouter from "./userRouter.js";
import voteRouter from "./voteRouter.js";
import categoryRouter from "./categoryRouter.js";
import groupRouter from "./groupRouter.js"; 
import authRouter from "./authRouter.js";

import { isAuthenticated,isAdmin } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/",(req,res)=>{
    res.json({message:"Hello api!"});
})

router.use("/users",userRouter);
router.use("/votes",isAuthenticated,voteRouter);
router.use("/categories",categoryRouter);
router.use("/groups",isAuthenticated,groupRouter);
router.use("/",authRouter);

export default router;
