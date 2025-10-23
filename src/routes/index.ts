import { Router } from "express";
import crudRoutes from "../modules/crud/crud.routes";
import cors from "cors";

const globalRouter = Router();
const corsConfig = {
  origin: ["http://localhost:3000"],
};
globalRouter.use(cors());
globalRouter.use("/crud", crudRoutes);
export default globalRouter;
