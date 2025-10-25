import { Router } from "express";
import crudControllers from "./crud.controllers";

const router = Router();
router.get("/get", crudControllers.getAllData);
router.post("/add", crudControllers.addNewData);
router.delete("/delete/:id", crudControllers.deleteData);
router.patch("/patch/:id", crudControllers.patchData);
router.put("/put/:id", crudControllers.putData);
export default router;
