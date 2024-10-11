// src/routes/itemRoutes.js
import { Router } from "express";
import * as itemController from "../controllers/itemController.js";

const router = Router();

router.get("/", itemController.getItems); // GET /itens
router.get("/:id", itemController.getItem); // GET /itens/:id
router.post("/", itemController.createItem); // POST /itens
router.put("/:id", itemController.updateItem); // PUT /itens/:id
router.delete("/:id", itemController.deleteItem); // DELETE /itens/:id

export default router;
