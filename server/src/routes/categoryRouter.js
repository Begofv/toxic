import { Router } from "express";

import categoryApiController from "../controllers/category/categoryApiController.js";


const router = Router();

router.get("/",categoryApiController.getAll);
router.get("/:id",categoryApiController.getById);
router.post("/",categoryApiController.create);
router.delete("/:id",categoryApiController.remove); 

export default router
