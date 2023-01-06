import express, { Request, Response } from "express";
const userRoutes = require("../controllers/user");
const router = express.Router();

router.get("/user", userRoutes.getUser);
router.post("/createUser", userRoutes.postUser);

export { router };
