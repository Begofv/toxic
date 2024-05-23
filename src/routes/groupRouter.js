import { Router } from "express";

import groupApiController from "../controllers/group/groupApiController.js";


const router = Router();

router.get("/",groupApiController.getAll);
router.get("/:id",groupApiController.getById);
router.post("/",groupApiController.create);
router.put("/:id",groupApiController.update);
router.delete("/:id",groupApiController.remove); 
router.post("/:id/friend",groupApiController.addFriend);


export default router