import { Router } from "express";

import voteApiController from "../controllers/vote/voteApiController.js";


const router = Router();
router.get("/",voteApiController.getAll);
router.get("/:id",voteApiController.getById);
router.post("/",voteApiController.create);
router.put("/:id",voteApiController.update);
router.delete("/:id",voteApiController.remove); 

export default router