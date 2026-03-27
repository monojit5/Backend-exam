import express from 'express';
import { createList, deleteData, fatchData, idCheck, updateData } from '../controllers/listController.js';
const listRouter = express.Router();
listRouter.post("/list", createList);
listRouter.get("/list", fatchData);
listRouter.get("/list/:id", idCheck);
listRouter.patch("/list/update/:id", updateData);
listRouter.delete("/list/delete/:id", deleteData);
export default listRouter;