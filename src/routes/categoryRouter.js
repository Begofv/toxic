import { Router } from "express";

import categoryApiController from "../controllers/category/categoryController.js";


const router = Router();

router.get("/",categoryApiController.getAll);
router.get("/:id",categoryApiController.getById);


export default router