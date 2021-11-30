import { Router } from "express";
import {
  indexController,
  storeController,
  destroyController,
  updateController,
  loginController,
} from "../Resources/Users";


import checkToken from "../Midleware/tokenJson";

const router = Router();

router.get("/api/v1/user", checkToken, indexController);
router.post("/api/v1/user", storeController);
router.put("/api/v1/user/:id", checkToken, updateController);
router.delete("/api/v1/user/:id", checkToken, destroyController);
router.post("/api/v1/auth", loginController);

export default router;
