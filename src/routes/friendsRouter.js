import { Router } from "express";

import friendsApiController from "../controllers/friends/friendsApiController.js";


const router = Router();

router.get("/",friendsApiController.getAll);
router.get("/:id",friendsApiController.getById);
router.post("/",friendsApiController.create);
router.put("/:id",friendsApiController.update);
router.delete("/:id",friendsApiController.remove); 

export default router